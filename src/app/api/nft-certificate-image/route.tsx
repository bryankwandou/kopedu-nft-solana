import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

function formatDate(iso: string | null): string {
  const d = iso ? new Date(iso) : new Date();
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const nama = searchParams.get("nama") || "Pelajar KopEdu";
  const cert = searchParams.get("cert") || "KPED-0000000000";
  const modul = searchParams.get("modul") || "14";
  const tanggal = formatDate(searchParams.get("tanggal"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "840px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f7f5f0",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "1080px",
            height: "720px",
            borderRadius: "18px",
            background:
              "linear-gradient(135deg, #7c3aed 0%, #0ea86e 100%)",
            padding: "6px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              height: "100%",
              background: "#ffffff",
              borderRadius: "14px",
              padding: "56px 64px",
            }}
          >
            {/* Wordmark */}
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                fontSize: "34px",
                fontWeight: 800,
                color: "#1c1b22",
              }}
            >
              KopEdu
              <span style={{ color: "#7c3aed" }}>.</span>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "10px",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "5px",
                color: "#7c3aed",
              }}
            >
              SERTIFIKAT ON-CHAIN &middot; SOLANA
            </div>

            {/* Divider */}
            <div
              style={{
                display: "flex",
                marginTop: "28px",
                width: "180px",
                height: "2px",
                background: "#e9defc",
              }}
            />

            {/* Seal */}
            <div
              style={{
                display: "flex",
                marginTop: "30px",
                width: "84px",
                height: "84px",
                borderRadius: "9999px",
                background:
                  "linear-gradient(135deg, #7c3aed 0%, #0ea86e 100%)",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "40px",
                color: "#ffffff",
                fontWeight: 800,
              }}
            >
              K
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "28px",
                fontSize: "18px",
                color: "#6b6875",
              }}
            >
              Diberikan kepada
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "10px",
                fontSize: "56px",
                fontWeight: 800,
                color: "#1c1b22",
                textAlign: "center",
                maxWidth: "820px",
              }}
            >
              {nama}
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "18px",
                fontSize: "19px",
                color: "#6b6875",
                textAlign: "center",
              }}
            >
              atas keberhasilan menyelesaikan seluruh kurikulum
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "22px",
                padding: "18px 40px",
                borderRadius: "10px",
                border: "1px solid #e9defc",
                background: "#f6f1ff",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#6d28d9",
                }}
              >
                Literasi Dasar Koperasi Indonesia
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "6px",
                  fontSize: "16px",
                  color: "#7c3aed",
                }}
              >
                {modul} Modul &middot; Platform KopEdu
              </div>
            </div>

            {/* Footer row */}
            <div
              style={{
                display: "flex",
                width: "100%",
                marginTop: "auto",
                paddingTop: "28px",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", fontSize: "13px", color: "#9a97a3" }}>
                  Tanggal Penyelesaian
                </div>
                <div style={{ display: "flex", fontSize: "16px", fontWeight: 700, color: "#1c1b22" }}>
                  {tanggal}
                </div>
              </div>

              <div style={{ display: "flex", fontSize: "13px", fontWeight: 700, color: "#0ea86e" }}>
                TERVERIFIKASI DI SOLANA
              </div>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                <div style={{ display: "flex", fontSize: "13px", color: "#9a97a3" }}>
                  ID Sertifikat
                </div>
                <div style={{ display: "flex", fontSize: "16px", fontWeight: 700, color: "#1c1b22" }}>
                  {cert}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 840 }
  );
}
