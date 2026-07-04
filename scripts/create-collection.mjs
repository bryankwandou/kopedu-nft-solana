import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { generateSigner, keypairIdentity } from "@metaplex-foundation/umi";
import { createCollection, mplCore } from "@metaplex-foundation/mpl-core";
import { clusterApiUrl } from "@solana/web3.js";
import bs58pkg from "bs58";
import fs from "fs";

const bs58 = bs58pkg.default ?? bs58pkg;

const authFile = JSON.parse(
  fs.readFileSync(
    "C:\\Users\\arche\\AppData\\Local\\Temp\\claude\\e--000VSCODE-PROJECT-MULAI-DARI-DESEMBER-2025-KopEdu---RintisKop\\fee657cd-6adc-4197-9dc7-65880158b3a1\\scratchpad\\cert-authority.json",
    "utf8"
  )
);

const umi = createUmi(clusterApiUrl("devnet")).use(mplCore());
const kp = umi.eddsa.createKeypairFromSecretKey(bs58.decode(authFile.secretB58));
umi.use(keypairIdentity(kp));

console.log("Authority:", kp.publicKey.toString());
const bal = await umi.rpc.getBalance(kp.publicKey);
console.log("Balance:", Number(bal.basisPoints) / 1e9, "SOL");

const collection = generateSigner(umi);
const uri = "https://kopedu-nft-solana.vercel.app/collection-metadata.json";

await createCollection(umi, {
  collection,
  name: "KopEdu — Sertifikat Literasi Koperasi",
  uri,
}).sendAndConfirm(umi);

console.log("COLLECTION_ADDRESS=" + collection.publicKey.toString());

fs.writeFileSync(
  "C:\\Users\\arche\\AppData\\Local\\Temp\\claude\\e--000VSCODE-PROJECT-MULAI-DARI-DESEMBER-2025-KopEdu---RintisKop\\fee657cd-6adc-4197-9dc7-65880158b3a1\\scratchpad\\collection-info.json",
  JSON.stringify({ collectionAddress: collection.publicKey.toString(), authority: kp.publicKey.toString() })
);
