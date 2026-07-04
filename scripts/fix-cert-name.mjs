import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { keypairIdentity, publicKey as umiPublicKey } from "@metaplex-foundation/umi";
import { update, fetchAsset, fetchCollection, mplCore } from "@metaplex-foundation/mpl-core";
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

const assetAddress = "71YjrP4ajP32azDzgHHFi4VapjEJXMmAmd1SrGosHBsf";
const asset = await fetchAsset(umi, umiPublicKey(assetAddress));
console.log("current name:", asset.name);
const collection = await fetchCollection(umi, umiPublicKey("6bAxfYPKjpToWRoBG5qTSXgfd1MREoY5RSeJVr1efCic"));

await update(umi, {
  asset,
  collection,
  name: "Sertifikat KopEdu - KPED-A8200EAF3C",
}).sendAndConfirm(umi);

const updated = await fetchAsset(umi, umiPublicKey(assetAddress));
console.log("new name:", updated.name);
