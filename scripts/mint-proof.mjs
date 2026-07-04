// Bukti alur mint sertifikat NFT KopEdu — jalur kode sama dengan halaman
// /dashboard/sertifikat-nft (umi + mpl-core create), hanya identitasnya
// keypair devnet hackathon, bukan wallet adapter browser.
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { generateSigner, keypairIdentity, sol } from "@metaplex-foundation/umi";
import { create, mplCore, fetchAsset } from "@metaplex-foundation/mpl-core";
import { clusterApiUrl } from "@solana/web3.js";
import bs58 from "bs58";

const umi = createUmi(clusterApiUrl("devnet")).use(mplCore());
let kp;
if (process.env.WALLET_SECRET_B58) {
  kp = umi.eddsa.createKeypairFromSecretKey(bs58.decode(process.env.WALLET_SECRET_B58));
} else if (process.env.WALLET_SEED_HEX) {
  kp = umi.eddsa.createKeypairFromSeed(Uint8Array.from(Buffer.from(process.env.WALLET_SEED_HEX, "hex")));
} else {
  throw new Error("Set WALLET_SECRET_B58 atau WALLET_SEED_HEX");
}
umi.use(keypairIdentity(kp));

console.log("Wallet:", kp.publicKey.toString());
let bal = await umi.rpc.getBalance(kp.publicKey);
console.log("Saldo :", Number(bal.basisPoints) / 1e9, "SOL");

if (Number(bal.basisPoints) < 5_000_000) {
  console.log("Saldo kurang — minta airdrop devnet 1 SOL...");
  try {
    await umi.rpc.airdrop(kp.publicKey, sol(1));
    bal = await umi.rpc.getBalance(kp.publicKey);
    console.log("Saldo baru:", Number(bal.basisPoints) / 1e9, "SOL");
  } catch (e) {
    console.error("Airdrop gagal:", e.message);
    process.exit(2);
  }
}

const asset = generateSigner(umi);
const uri =
  "https://kopedu-nft-solana.vercel.app/api/nft-metadata?nama=Uji%20Workflow%20KopEdu&cert=KPED-PROOF00001&modul=14";

console.log("Mint aset Metaplex Core...");
const res = await create(umi, {
  asset,
  name: "Sertifikat KopEdu — KPED-PROOF00001",
  uri,
}).sendAndConfirm(umi);

const sig = bs58.encode(res.signature);
console.log("BERHASIL");
console.log("Asset   :", asset.publicKey.toString());
console.log("Tx      :", sig);
console.log("Explorer asset:", `https://explorer.solana.com/address/${asset.publicKey}?cluster=devnet`);
console.log("Explorer tx   :", `https://explorer.solana.com/tx/${sig}?cluster=devnet`);

const onchain = await fetchAsset(umi, asset.publicKey);
console.log("Verifikasi on-chain — name:", onchain.name, "| owner:", onchain.owner.toString(), "| uri:", onchain.uri);
