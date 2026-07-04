import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { keypairIdentity, generateSigner, publicKey as umiPublicKey } from "@metaplex-foundation/umi";
import { create, fetchCollection, mplCore } from "@metaplex-foundation/mpl-core";
import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import bs58pkg from "bs58";

import { hasDatabase, getDb, ensureCertificatesTable, ensureSchema } from "@/lib/db";
import { modules } from "@/lib/data";

export const dynamic = "force-dynamic";

const bs58 = bs58pkg;
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function bad(msg: string, status = 400) {
  return Response.json({ error: msg }, { status });
}

function certId(userId: string): string {
  return "KPED-" + userId.replace(/-/g, "").slice(0, 10).toUpperCase();
}

function isValidSolanaAddress(addr: string): boolean {
  try {
    // eslint-disable-next-line no-new
    new PublicKey(addr);
    return true;
  } catch {
    return false;
  }
}

export async function GET(req: Request) {
  if (!hasDatabase) return Response.json({ enabled: false, certificate: null });

  const userId = new URL(req.url).searchParams.get("userId") ?? "";
  if (!UUID_RE.test(userId)) return bad("Invalid userId");

  await ensureCertificatesTable();
  const sql = getDb();
  const rows = await sql`
    SELECT asset_address, wallet_address, full_name, cert_id, minted_at
    FROM kopedu_certificates WHERE user_id = ${userId}
  `;

  return Response.json({ enabled: true, certificate: rows[0] ?? null });
}

export async function POST(req: Request) {
  if (!hasDatabase) return bad("Service unavailable", 503);

  const authoritySecret = process.env.CERT_AUTHORITY_SECRET;
  const collectionAddress = process.env.CERT_COLLECTION_ADDRESS;
  if (!authoritySecret || !collectionAddress) {
    return bad("Layanan sertifikat belum dikonfigurasi.", 503);
  }

  let body: { userId?: string; walletAddress?: string; fullName?: string };
  try {
    body = await req.json();
  } catch {
    return bad("Permintaan tidak valid");
  }

  const userId = (body.userId ?? "").trim();
  const walletAddress = (body.walletAddress ?? "").trim();
  const fullName = (body.fullName ?? "").trim();

  if (!UUID_RE.test(userId)) return bad("Invalid userId");
  if (!walletAddress || !isValidSolanaAddress(walletAddress)) return bad("Alamat dompet tidak valid");
  if (fullName.length < 2 || fullName.length > 80) return bad("Nama harus 2–80 karakter");

  await ensureSchema();
  await ensureCertificatesTable();
  const sql = getDb();

  // Wajib: maksimal 1 sertifikat per akun — idempotent, kembalikan yang sudah ada.
  const existing = await sql`
    SELECT asset_address, wallet_address, full_name, cert_id, minted_at
    FROM kopedu_certificates WHERE user_id = ${userId}
  `;
  if (existing.length > 0) {
    return Response.json({ alreadyMinted: true, certificate: existing[0] });
  }

  // Verifikasi progres: seluruh modul harus sudah selesai sebelum sertifikat bisa diterbitkan.
  const progressRows = await sql`SELECT data FROM kopedu_progress WHERE user_id = ${userId}`;
  const progress = progressRows[0]?.data as { completedModules?: number[] } | undefined;
  const completedCount = progress?.completedModules?.length ?? 0;
  if (completedCount < modules.length) {
    return bad(`Belum menyelesaikan semua modul (${completedCount}/${modules.length}).`, 403);
  }

  const cert = certId(userId);

  try {
    const umi = createUmi(clusterApiUrl("devnet")).use(mplCore());
    const authorityKp = umi.eddsa.createKeypairFromSecretKey(bs58.decode(authoritySecret));
    umi.use(keypairIdentity(authorityKp));

    const collection = await fetchCollection(umi, umiPublicKey(collectionAddress));
    const asset = generateSigner(umi);
    const uri = `${new URL(req.url).origin}/api/nft-metadata?nama=${encodeURIComponent(
      fullName
    )}&cert=${encodeURIComponent(cert)}&modul=${modules.length}`;

    await create(umi, {
      asset,
      collection,
      owner: umiPublicKey(walletAddress),
      name: `Sertifikat KopEdu — ${cert}`,
      uri,
    }).sendAndConfirm(umi);

    await sql`
      INSERT INTO kopedu_certificates (user_id, asset_address, wallet_address, full_name, cert_id)
      VALUES (${userId}, ${asset.publicKey.toString()}, ${walletAddress}, ${fullName}, ${cert})
    `;

    return Response.json({
      alreadyMinted: false,
      certificate: {
        asset_address: asset.publicKey.toString(),
        wallet_address: walletAddress,
        full_name: fullName,
        cert_id: cert,
      },
    });
  } catch (e) {
    console.error("[mint-certificate]", e);
    return bad("Gagal menerbitkan sertifikat. Coba lagi sebentar lagi.", 500);
  }
}
