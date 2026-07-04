import { NextRequest } from "next/server";

/**
 * Metadata JSON standar Metaplex (Token Metadata 1.1) untuk NFT sertifikat.
 * Bidang seller_fee_basis_points/properties wajib ada agar wallet (Phantom,
 * Solflare) dan indexer (DAS) mengenali aset ini sebagai NFT valid, bukan
 * "Unverified" — gambar per-sertifikat dirender dinamis di /api/nft-certificate-image.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const nama = searchParams.get("nama") || "Pelajar KopEdu";
  const certId = searchParams.get("cert") || "KPED-XXXXXXXXXX";
  const modul = searchParams.get("modul") || "14";
  const tanggal = searchParams.get("tanggal") || "";
  const origin = req.nextUrl.origin;

  const imageUrl = `${origin}/api/nft-certificate-image?nama=${encodeURIComponent(
    nama
  )}&cert=${encodeURIComponent(certId)}&modul=${encodeURIComponent(modul)}&tanggal=${encodeURIComponent(
    tanggal
  )}`;

  // Karakter dibatasi ASCII murni di JSON on-chain (tanpa em dash/simbol non-ASCII):
  // beberapa indexer NFT (DAS) salah membaca UTF-8 multi-byte sebagai Latin-1,
  // menghasilkan mojibake pada field "name"/atribut saat dibaca ulang oleh wallet.
  const body = {
    name: `Sertifikat KopEdu - ${certId}`,
    symbol: "KOPEDU",
    description: `Sertifikat penyelesaian kurikulum Literasi Dasar Koperasi Indonesia (${modul} modul) di platform KopEdu, diberikan kepada ${nama}. ID sertifikat: ${certId}. Diterbitkan on-chain di Solana sebagai bukti belajar yang permanen dan dapat diverifikasi siapa pun.`,
    image: imageUrl,
    external_url: origin,
    seller_fee_basis_points: 0,
    attributes: [
      { trait_type: "Nama Pemilik", value: nama },
      { trait_type: "Program", value: "Literasi Dasar Koperasi Indonesia" },
      { trait_type: "Jumlah Modul", value: modul },
      { trait_type: "ID Sertifikat", value: certId },
      { trait_type: "Penerbit", value: "KopEdu - GotongDigital" },
      { trait_type: "Jaringan", value: "Solana" },
    ],
    properties: {
      category: "image",
      files: [{ uri: imageUrl, type: "image/png" }],
      creators: [
        {
          address: "5KY42de2Hcbed1dYUvi2uYMvG9SyJJM1oZ5oawDML8gy",
          share: 100,
        },
      ],
    },
  };

  return new Response(JSON.stringify(body), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
