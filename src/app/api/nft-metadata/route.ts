import { NextRequest, NextResponse } from "next/server";

/**
 * Metadata JSON standar Metaplex untuk NFT sertifikat.
 * URI ini dipakai saat mint di halaman /dashboard/sertifikat-nft.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const nama = searchParams.get("nama") || "Pelajar KopEdu";
  const certId = searchParams.get("cert") || "KPED-XXXXXXXXXX";
  const modul = searchParams.get("modul") || "14";
  const origin = req.nextUrl.origin;

  return NextResponse.json({
    name: `Sertifikat KopEdu — ${nama}`,
    symbol: "KOPEDU",
    description: `Sertifikat penyelesaian kurikulum Literasi Dasar Koperasi Indonesia (${modul} modul) di platform KopEdu. ID sertifikat: ${certId}. Diterbitkan on-chain di Solana sebagai bukti belajar yang dapat diverifikasi.`,
    image: `${origin}/nft-sertifikat.svg`,
    external_url: origin,
    attributes: [
      { trait_type: "Program", value: "Literasi Dasar Koperasi Indonesia" },
      { trait_type: "Jumlah Modul", value: modul },
      { trait_type: "ID Sertifikat", value: certId },
      { trait_type: "Penerbit", value: "KopEdu — GotongDigital" },
    ],
  });
}
