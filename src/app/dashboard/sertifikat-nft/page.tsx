"use client";

import * as React from "react";
import Link from "next/link";
import { useWallet } from "@solana/wallet-adapter-react";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { generateSigner } from "@metaplex-foundation/umi";
import { create, mplCore } from "@metaplex-foundation/mpl-core";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletButton } from "@/components/solana/wallet-button";
import { useProgress, moduleDoneCount } from "@/lib/progress";
import { modules } from "@/lib/data";

function certId(userId: string): string {
  return "KPED-" + userId.replace(/-/g, "").slice(0, 10).toUpperCase();
}

type MintState =
  | { status: "idle" }
  | { status: "minting" }
  | { status: "done"; asset: string }
  | { status: "error"; message: string };

export default function SertifikatNftPage() {
  const progress = useProgress();
  const wallet = useWallet();
  const done = moduleDoneCount(progress);
  const allDone = done >= modules.length;
  const [mint, setMint] = React.useState<MintState>({ status: "idle" });

  const displayName =
    [progress.firstName, progress.lastName].filter(Boolean).join(" ") ||
    progress.profileName ||
    "Pelajar KopEdu";

  async function handleMint() {
    if (!wallet.publicKey) return;
    setMint({ status: "minting" });
    try {
      const umi = createUmi(clusterApiUrl("devnet"))
        .use(mplCore())
        .use(walletAdapterIdentity(wallet));
      const asset = generateSigner(umi);
      const id = certId(progress.userId || "0000000000");
      const uri = `${window.location.origin}/api/nft-metadata?nama=${encodeURIComponent(
        displayName
      )}&cert=${encodeURIComponent(id)}&modul=${modules.length}`;

      await create(umi, {
        asset,
        name: `Sertifikat KopEdu — ${id}`,
        uri,
      }).sendAndConfirm(umi);

      setMint({ status: "done", asset: asset.publicKey.toString() });
    } catch (e) {
      setMint({
        status: "error",
        message: e instanceof Error ? e.message : "Transaksi gagal. Coba lagi.",
      });
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <p className="eyebrow mb-2">Web3 · Solana Devnet</p>
      <h1 className="font-display text-3xl font-bold text-ink">
        Sertifikat <span className="solana-gradient-text">NFT</span>
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-ink-2">
        Terbitkan sertifikat penyelesaian kurikulum sebagai NFT di jaringan
        Solana. Sertifikat tersimpan permanen di blockchain dan dapat
        diverifikasi siapa pun tanpa perantara.
      </p>

      <div className="mt-8 rounded-lg border border-line bg-card p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-ink-2">Dompet Solana</p>
            <p
              className="mt-1 font-mono-data text-sm text-ink"
              title={wallet.publicKey ? wallet.publicKey.toBase58() : undefined}
            >
              {wallet.publicKey
                ? wallet.publicKey.toBase58().slice(0, 4) +
                  "…" +
                  wallet.publicKey.toBase58().slice(-4)
                : "Belum terhubung"}
            </p>
          </div>
          <WalletButton />
        </div>
      </div>

      <div className="mt-4 rounded-lg border border-line bg-card p-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-ink">Progres Belajar</p>
          <p className="font-mono-data text-sm text-primary">
            {done}/{modules.length} modul
          </p>
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="solana-gradient-bg h-full rounded-full transition-[width]"
            style={{ width: `${(done / modules.length) * 100}%` }}
          />
        </div>
        {!allDone && (
          <p className="mt-3 text-xs text-ink-2">
            Selesaikan semua modul untuk membuka mint sertifikat.{" "}
            <Link href="/dashboard/modul" className="text-primary underline">
              Lanjut belajar
            </Link>
          </p>
        )}
      </div>

      <div className="mt-6">
        {mint.status === "done" ? (
          <div className="rounded-lg border border-primary/30 bg-accent-soft p-6">
            <p className="font-semibold text-primary">Sertifikat NFT berhasil diterbitkan.</p>
            <p className="mt-2 break-all font-mono-data text-xs text-ink-2">
              Alamat aset: {mint.asset}
            </p>
            <a
              href={`https://explorer.solana.com/address/${mint.asset}?cluster=devnet`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex h-9 items-center rounded-sm bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors duration-100 hover:bg-[#7a2ff2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Lihat di Solana Explorer
            </a>
          </div>
        ) : (
          <button
            onClick={handleMint}
            disabled={!allDone || !wallet.publicKey || mint.status === "minting"}
            aria-busy={mint.status === "minting"}
            className="solana-gradient-bg solana-glow inline-flex h-11 w-full items-center justify-center rounded-sm text-sm font-semibold text-white transition-transform duration-100 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0 disabled:pointer-events-none disabled:translate-y-0 disabled:opacity-40 disabled:shadow-none"
          >
            {mint.status === "minting"
              ? "Menerbitkan di blockchain…"
              : "Mint Sertifikat NFT"}
          </button>
        )}
        {mint.status === "error" && (
          <p className="mt-3 text-xs text-destructive">{mint.message}</p>
        )}
        <p className="mt-4 text-xs leading-relaxed text-ink-2">
          Jaringan: Solana Devnet (tanpa biaya nyata). Butuh SOL devnet gratis?
          Ambil di{" "}
          <a
            href="https://faucet.solana.com"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline"
          >
            faucet.solana.com
          </a>
          . Sertifikat versi cetak tetap tersedia di{" "}
          <Link href="/sertifikat" className="text-primary underline">
            halaman sertifikat
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
