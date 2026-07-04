# KopEdu Web3 — Belajar Koperasi, Sertifikat On-Chain Solana

Versi Web3 dari platform edukasi koperasi KopEdu. Seluruh kurikulum literasi koperasi kini dipadukan dengan jaringan Solana: sertifikat kelulusan diterbitkan sebagai NFT yang dapat diverifikasi on-chain oleh siapa pun.

## Fitur

- 14 modul literasi koperasi (dasar sampai KopDes Merah Putih), lengkap dengan kuis dan sistem poin.
- KopBot, tutor AI berbahasa Indonesia (Groq LLM).
- Koneksi dompet Solana (Phantom, Solflare) lewat Solana Wallet Adapter.
- Sertifikat NFT: setelah semua modul selesai, pelajar mint sertifikat sebagai aset Metaplex Core di Solana Devnet, langsung dari dompet sendiri.
- Sertifikat versi cetak (PDF) tetap tersedia.
- Progres tersimpan lokal dan tersinkron ke Neon PostgreSQL.

## Teknologi

Next.js (App Router) · React 19 · TypeScript · Tailwind CSS v4 · @solana/web3.js · Solana Wallet Adapter · Metaplex Umi + mpl-core · Neon PostgreSQL · Groq API

## Menjalankan Lokal

```bash
npm install
cp .env.example .env.local   # isi POSTGRES_URL dan GROQ_API_KEY
npm run dev
```

Buka http://localhost:3000. Untuk mencoba mint NFT, hubungkan dompet Phantom/Solflare yang diarahkan ke Devnet dan ambil SOL gratis di https://faucet.solana.com.

## Arsitektur Web3

- `src/components/solana/wallet-provider.tsx` — ConnectionProvider (Devnet) + WalletProvider + modal.
- `src/app/dashboard/sertifikat-nft/page.tsx` — halaman mint; membuat aset Metaplex Core dengan dompet pengguna sebagai payer dan owner.
- `src/app/api/nft-metadata/route.ts` — metadata JSON standar Metaplex untuk NFT sertifikat.
- Roadmap: token poin SPL, badge NFT per modul, dan tata kelola koperasi berbasis DAO.

---

GotongDigital — Hackathon Kemenkop RI 2026.
