<div align="center">

# KopEdu Web3

**Belajar koperasi. Kuasai ekonomimu. Buktikan on-chain.**

Platform edukasi literasi koperasi untuk pelajar Indonesia, dengan sertifikat kelulusan yang diterbitkan sebagai NFT terverifikasi di jaringan Solana.

[**🌐 Live Demo — kopedux.vercel.app**](https://kopedux.vercel.app) · [Repo GitHub](https://github.com/nayrbryanGaming/kopedu-nft-solana)

</div>

---

## Ringkasan (One-Liner)

> KopEdu Web3 adalah platform edukasi literasi koperasi Indonesia yang memadukan kurikulum interaktif, tutor AI, dan sertifikat kelulusan berbentuk NFT on-chain di Solana — bukti belajar yang permanen dan dapat diverifikasi siapa pun tanpa perantara.

## Masalah

Literasi koperasi di Indonesia rendah, padahal koperasi adalah pilar ekonomi kerakyatan yang didorong pemerintah lewat program Koperasi Desa/Kelurahan Merah Putih. Materi belajar koperasi yang ada kebanyakan statis (PDF, modul cetak), tidak interaktif, dan sertifikat kelulusannya mudah dipalsukan atau hilang karena hanya berupa file PDF/kertas.

## Solusi

KopEdu Web3 menjawab dua masalah sekaligus:

1. **Belajar jadi interaktif** — 14 modul terstruktur (dasar → menengah → lanjutan, termasuk KopDes Merah Putih) lengkap dengan kuis, sistem poin, dan **KopBot**, tutor AI berbahasa Indonesia yang siap menjawab pertanyaan kapan saja.
2. **Sertifikat jadi tidak bisa dipalsukan** — setelah menyelesaikan seluruh kurikulum, pelajar mint sertifikatnya sendiri sebagai **NFT (Metaplex Core) di Solana**, langsung dari dompetnya sendiri (Phantom/Solflare). Siapa pun bisa memverifikasi keasliannya di Solana Explorer tanpa harus mempercayai penerbitnya.

## Fitur

- 14 modul literasi koperasi (dasar sampai KopDes Merah Putih), lengkap dengan kuis dan sistem poin.
- **KopBot** — tutor AI berbahasa Indonesia (Groq LLM, Llama 3.3 70B) yang menjawab seputar koperasi.
- Koneksi dompet Solana (Phantom, Solflare) lewat Solana Wallet Adapter.
- **Sertifikat NFT** — setelah semua modul selesai, pelajar mint sertifikat sebagai aset Metaplex Core di Solana, tersimpan permanen dan terverifikasi on-chain.
- Sertifikat versi cetak (PDF) tetap tersedia sebagai alternatif non-Web3.
- Progres belajar tersimpan lokal dan tersinkron ke database cloud (Neon PostgreSQL) — bisa lanjut belajar dari perangkat mana pun.

## Teknologi

| Layer | Stack |
|---|---|
| Frontend | Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 |
| Web3 | `@solana/web3.js`, Solana Wallet Adapter (Phantom, Solflare), Metaplex Umi + `mpl-core` |
| AI | Groq API (Llama 3.3 70B) untuk KopBot |
| Database | Neon PostgreSQL (serverless) |
| Deployment | Vercel |

## Arsitektur Web3

- [`src/components/solana/wallet-provider.tsx`](src/components/solana/wallet-provider.tsx) — `ConnectionProvider` (Devnet) + `WalletProvider` + modal koneksi dompet.
- [`src/app/dashboard/sertifikat-nft/page.tsx`](src/app/dashboard/sertifikat-nft/page.tsx) — halaman mint sertifikat; membuat aset Metaplex Core dengan dompet pengguna sebagai payer dan owner (non-custodial — kunci privat tidak pernah menyentuh server).
- [`src/app/api/nft-metadata/route.ts`](src/app/api/nft-metadata/route.ts) — endpoint metadata JSON standar Metaplex untuk tiap sertifikat NFT.
- [`scripts/mint-proof.mjs`](scripts/mint-proof.mjs) — skrip pembuktian alur mint end-to-end di luar browser, untuk keperluan demo/hackathon.

## Menjalankan Lokal

```bash
npm install
cp .env.example .env.local   # isi POSTGRES_URL dan GROQ_API_KEY
npm run dev
```

Buka `http://localhost:3000`. Untuk mencoba mint NFT, hubungkan dompet Phantom/Solflare yang diarahkan ke jaringan **Devnet** dan ambil SOL gratis di https://faucet.solana.com.

## Roadmap

- Token poin SPL sebagai insentif belajar.
- Badge NFT per modul (bukan hanya sertifikat akhir).
- Tata kelola koperasi berbasis DAO — simulasi voting "satu anggota satu suara" on-chain, selaras dengan prinsip koperasi asli.

## Tim

| Nama | Peran |
|---|---|
| **Marvel Harjosetio** | Pemilik ide & pemilik konsep |
| **Vincentius Bryan Kwandou** | PIC Superteam Campus Club Universitas Atma Jaya Makassar — mewujudkan ide menjadi produk |

---

<div align="center">

GotongDigital — Hackathon Kemenkop RI 2026

</div>
