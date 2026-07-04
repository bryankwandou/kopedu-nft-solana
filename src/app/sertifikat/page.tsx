"use client";

import * as React from "react";
import Link from "next/link";
import { useProgress, moduleDoneCount } from "@/lib/progress";
import { modules } from "@/lib/data";

function formatDate(ts: number): string {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(ts || Date.now());
}

function certId(userId: string): string {
  return "KPED-" + userId.replace(/-/g, "").slice(0, 10).toUpperCase();
}

export default function SertifikatPage() {
  const progress = useProgress();
  const done = moduleDoneCount(progress);
  const allDone = done >= modules.length;

  const displayName =
    [progress.firstName, progress.lastName].filter(Boolean).join(" ") ||
    progress.profileName ||
    "Pelajar KopEdu";

  const completedAt = progress.updatedAt || Date.now();

  if (!allDone) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background p-8 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9945ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
        </div>
        <h1 className="font-display text-2xl font-bold text-ink">Sertifikat Belum Terbuka</h1>
        <p className="max-w-sm text-sm text-ink-2">
          Selesaikan semua {modules.length} modul untuk membuka sertifikat. Kamu sudah menyelesaikan <strong>{done}</strong> dari {modules.length} modul.
        </p>
        <div className="mt-2 h-2 w-64 overflow-hidden rounded-full bg-line">
          <div className="h-full rounded-full bg-primary transition-[width]" style={{ width: `${(done / modules.length) * 100}%` }} />
        </div>
        <Link href="/dashboard/modul" className="mt-4 inline-flex h-10 items-center rounded-sm bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-[#7a2ff2]">
          Lanjut Belajar
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Print button â€” hidden when printing */}
      <div className="flex items-center justify-between border-b border-line bg-card px-6 py-3 print:hidden">
        <Link href="/dashboard/profil" className="text-sm font-medium text-ink-2 hover:text-ink">
          â† Kembali ke Profil
        </Link>
        <div className="flex gap-2">
          <button
            onClick={() => window.print()}
            className="inline-flex h-9 items-center gap-2 rounded-sm bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-[#7a2ff2]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
            Unduh / Cetak PDF
          </button>
        </div>
      </div>

      {/* Certificate â€” printable area */}
      <div className="flex min-h-screen items-center justify-center bg-[#0f0d18] p-6 print:min-h-0 print:bg-white print:p-0">
        <div
          id="certificate"
          className="relative w-full max-w-[800px] bg-white shadow-2xl print:shadow-none"
          style={{ aspectRatio: "1.414 / 1" }}
        >
          {/* Outer decorative border */}
          <div className="absolute inset-3 border-2 border-[#9945ff]/30" />
          <div className="absolute inset-4 border border-[#cdb4ff]" />

          {/* Corner ornaments */}
          <Ornament className="absolute left-6 top-6" />
          <Ornament className="absolute right-6 top-6 -scale-x-100" />
          <Ornament className="absolute bottom-6 left-6 -scale-y-100" />
          <Ornament className="absolute bottom-6 right-6 scale-[-1]" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-12 py-10 text-center">
            {/* Logo */}
            <div className="mb-3 font-display text-2xl font-black text-[#9945ff]">
              KopEdu<span className="opacity-50">.</span>
            </div>

            {/* Eyebrow */}
            <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.25em] text-[#9945ff]/60">
              Sertifikat Penyelesaian
            </p>

            {/* Divider */}
            <div className="mb-5 flex w-32 items-center gap-2">
              <div className="h-px flex-1 bg-[#cdb4ff]" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#9945ff]/40" />
              <div className="h-px flex-1 bg-[#cdb4ff]" />
            </div>

            <p className="mb-1 text-[0.7rem] text-[#5a5a5a]">diberikan kepada</p>

            {/* Name */}
            <h1 className="mb-2 font-display text-[clamp(1.4rem,4vw,2.2rem)] font-black leading-tight text-[#1a1a1a]">
              {displayName}
            </h1>

            <p className="mb-4 max-w-[38ch] text-[0.72rem] leading-relaxed text-[#5a5a5a]">
              atas keberhasilan menyelesaikan seluruh kurikulum
            </p>

            {/* Course badge */}
            <div className="mb-5 rounded border border-[#cdb4ff] bg-[#f6f1ff] px-6 py-3">
              <p className="font-display text-[0.95rem] font-bold text-[#9945ff]">
                Literasi Dasar Koperasi Indonesia
              </p>
              <p className="mt-0.5 text-[0.65rem] text-[#9945ff]/70">
                {modules.length} Modul &nbsp;Â·&nbsp; {progress.points} Poin &nbsp;Â·&nbsp; Platform KopEdu
              </p>
            </div>

            {/* Divider */}
            <div className="mb-5 flex w-32 items-center gap-2">
              <div className="h-px flex-1 bg-[#cdb4ff]" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#9945ff]/40" />
              <div className="h-px flex-1 bg-[#cdb4ff]" />
            </div>

            {/* Footer row */}
            <div className="flex w-full items-end justify-between px-4">
              <div className="text-left">
                <p className="text-[0.62rem] text-[#888]">Tanggal Penyelesaian</p>
                <p className="text-[0.72rem] font-semibold text-[#333]">{formatDate(completedAt)}</p>
              </div>

              {/* Seal */}
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#9945ff] bg-[#f6f1ff]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" fill="#9945ff" />
                  </svg>
                </div>
                <p className="mt-1 text-[0.55rem] font-bold uppercase tracking-wider text-[#9945ff]">Verified</p>
              </div>

              <div className="text-right">
                <p className="text-[0.62rem] text-[#888]">ID Sertifikat</p>
                <p className="font-mono text-[0.65rem] font-semibold text-[#333]">{certId(progress.userId || "0000000000")}</p>
              </div>
            </div>

            {/* Attribution */}
            <p className="mt-4 text-[0.58rem] text-[#aaa]">
              GotongDigital â€” Hackathon Kemenkop RI 2026 &nbsp;Â·&nbsp; kopedu.vercel.app
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          @page { size: A4 landscape; margin: 10mm; }
          body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
        }
      `}</style>
    </>
  );
}

function Ornament({ className }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className={className}>
      <path d="M2 2 L14 2 L2 14 Z" fill="#cdb4ff" opacity="0.8" />
      <path d="M2 2 L8 2 L2 8 Z" fill="#9945ff" opacity="0.5" />
    </svg>
  );
}
