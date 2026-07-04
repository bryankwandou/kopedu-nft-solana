"use client";

import * as React from "react";
import Link from "next/link";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletButton } from "@/components/solana/wallet-button";
import { useProgress, moduleDoneCount } from "@/lib/progress";
import { modules } from "@/lib/data";

type CertificateRecord = {
  asset_address: string;
  wallet_address: string;
  full_name: string;
  cert_id: string;
  minted_at?: string;
};

type CheckState =
  | { status: "checking" }
  | { status: "none" }
  | { status: "found"; certificate: CertificateRecord };

type MintState =
  | { status: "idle" }
  | { status: "minting" }
  | { status: "done"; certificate: CertificateRecord }
  | { status: "error"; message: string };

export default function SertifikatNftPage() {
  const progress = useProgress();
  const wallet = useWallet();
  const done = moduleDoneCount(progress);
  const allDone = done >= modules.length;

  const [check, setCheck] = React.useState<CheckState>({ status: "checking" });
  const [mint, setMint] = React.useState<MintState>({ status: "idle" });
  const [nameConfirmed, setNameConfirmed] = React.useState(false);

  const suggestedName =
    [progress.firstName, progress.lastName].filter(Boolean).join(" ") ||
    progress.profileName ||
    "";
  const [fullName, setFullName] = React.useState(suggestedName);

  React.useEffect(() => {
    if (!progress.userId) return;
    let cancelled = false;
    fetch(`/api/mint-certificate?userId=${encodeURIComponent(progress.userId)}`)
      .then((r) => r.json())
      .then((json: { enabled: boolean; certificate: CertificateRecord | null }) => {
        if (cancelled) return;
        setCheck(json.certificate ? { status: "found", certificate: json.certificate } : { status: "none" });
      })
      .catch(() => {
        if (!cancelled) setCheck({ status: "none" });
      });
    return () => {
      cancelled = true;
    };
  }, [progress.userId]);

  async function handleMint() {
    if (!wallet.publicKey || !nameConfirmed) return;
    setMint({ status: "minting" });
    try {
      const res = await fetch("/api/mint-certificate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: progress.userId,
          walletAddress: wallet.publicKey.toBase58(),
          fullName: fullName.trim(),
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setMint({ status: "error", message: json.error || "Gagal menerbitkan sertifikat." });
        return;
      }
      setMint({ status: "done", certificate: json.certificate });
    } catch {
      setMint({ status: "error", message: "Koneksi terputus. Coba lagi." });
    }
  }

  const certificate =
    check.status === "found"
      ? check.certificate
      : mint.status === "done"
        ? mint.certificate
        : null;

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

      {certificate ? (
        <div className="mt-8">
          <div className="overflow-hidden rounded-lg border border-line bg-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/api/nft-certificate-image?nama=${encodeURIComponent(
                certificate.full_name
              )}&cert=${encodeURIComponent(certificate.cert_id)}&modul=${modules.length}`}
              alt={`Sertifikat KopEdu untuk ${certificate.full_name}`}
              className="w-full"
            />
          </div>
          <div className="mt-4 rounded-lg border border-primary/30 bg-accent-soft p-6">
            <p className="font-semibold text-primary">Sertifikat NFT-mu sudah terbit.</p>
            <p className="mt-2 text-sm text-ink-2">
              Atas nama <strong className="text-ink">{certificate.full_name}</strong> — ID{" "}
              {certificate.cert_id}
            </p>
            <p className="mt-2 break-all font-mono-data text-xs text-ink-2">
              Alamat aset: {certificate.asset_address}
            </p>
            <p className="mt-1 break-all font-mono-data text-xs text-ink-2">
              Pemilik: {certificate.wallet_address}
            </p>
            <a
              href={`https://explorer.solana.com/address/${certificate.asset_address}?cluster=devnet`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex h-9 items-center rounded-sm bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors duration-100 hover:bg-[#7a2ff2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Lihat di Solana Explorer
            </a>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-ink-2">
            Setiap akun hanya bisa menerbitkan satu sertifikat NFT — karena
            NFT bersifat permanen di blockchain, sertifikat ini tidak bisa
            diganti atau diterbitkan ulang.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-8 rounded-lg border border-line bg-card p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-ink-2">Dompet penerima</p>
                <p
                  className="mt-1 font-mono-data text-sm text-ink"
                  title={wallet.publicKey ? wallet.publicKey.toBase58() : undefined}
                >
                  {wallet.publicKey
                    ? wallet.publicKey.toBase58().slice(0, 4) + "…" + wallet.publicKey.toBase58().slice(-4)
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

          {allDone && wallet.publicKey && (
            <div className="mt-4 rounded-lg border border-line bg-card p-6">
              <label htmlFor="cert-name" className="text-sm font-semibold text-ink">
                Nama untuk sertifikat
              </label>
              <p className="mt-1 text-xs text-ink-2">
                Nama ini akan tercetak permanen di NFT dan tidak bisa diubah
                setelah diterbitkan. Periksa ejaannya sebelum melanjutkan.
              </p>
              <input
                id="cert-name"
                type="text"
                autoComplete="name"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  setNameConfirmed(false);
                }}
                maxLength={80}
                placeholder="Nama lengkap"
                className="mt-3 h-11 w-full rounded-sm border border-line bg-background px-3 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              />
              <label className="mt-3 flex items-start gap-2 text-xs text-ink-2">
                <input
                  type="checkbox"
                  checked={nameConfirmed}
                  onChange={(e) => setNameConfirmed(e.target.checked)}
                  disabled={fullName.trim().length < 2}
                  className="mt-0.5 h-4 w-4 rounded-sm border-line focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                />
                Saya sudah memeriksa dan mengonfirmasi nama di atas benar dan
                final untuk dicetak permanen di NFT ini.
              </label>
            </div>
          )}

          <div className="mt-6">
            <button
              onClick={handleMint}
              disabled={
                !allDone ||
                !wallet.publicKey ||
                !nameConfirmed ||
                fullName.trim().length < 2 ||
                mint.status === "minting"
              }
              aria-busy={mint.status === "minting"}
              className="solana-gradient-bg solana-glow inline-flex h-11 w-full items-center justify-center rounded-sm text-sm font-semibold text-white transition-transform duration-100 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0 disabled:pointer-events-none disabled:translate-y-0 disabled:opacity-40 disabled:shadow-none"
            >
              {mint.status === "minting" ? "Menerbitkan di blockchain…" : "Mint Sertifikat NFT"}
            </button>
            {mint.status === "error" && <p className="mt-3 text-xs text-destructive">{mint.message}</p>}
            <p className="mt-4 text-xs leading-relaxed text-ink-2">
              Jaringan: Solana Devnet (tanpa biaya nyata untukmu — biaya
              transaksi ditanggung platform). Sertifikat versi cetak tetap
              tersedia di{" "}
              <Link href="/sertifikat" className="text-primary underline">
                halaman sertifikat
              </Link>
              .
            </p>
          </div>
        </>
      )}
    </div>
  );
}
