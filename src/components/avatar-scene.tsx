"use client";

import * as React from "react";

/* ------------------------------------------------------------------ */
/* Custom SVG IDs — 5 KopEdu originals                                */
/* ------------------------------------------------------------------ */

const CUSTOM_IDS = [
  "sarjana",
  "petani",
  "pedagang",
  "pemimpin",
  "penggerak",
] as const;
type CustomId = (typeof CUSTOM_IDS)[number];

function isCustom(id: string): id is CustomId {
  return (CUSTOM_IDS as readonly string[]).includes(id);
}

/* ------------------------------------------------------------------ */
/* Local preset avatars — 29 images copied from VeriCode reference    */
/* ------------------------------------------------------------------ */

interface LocalAvatar {
  id: string;
  src: string;
  label: string;
}

const LOCAL_AVATARS: LocalAvatar[] = [
  { id: "av01", src: "/avatars/av1.jpg",  label: "Mahasiswi"    },
  { id: "av02", src: "/avatars/av2.jpg",  label: "Kreatif"      },
  { id: "av03", src: "/avatars/av3.jpg",  label: "Wirausahawan" },
  { id: "av04", src: "/avatars/av4.jpg",  label: "Akademisi"    },
  { id: "av05", src: "/avatars/av5.jpg",  label: "Pelajar"      },
  { id: "av06", src: "/avatars/av6.jpg",  label: "Ibu Muda"     },
  { id: "av07", src: "/avatars/av7.jpg",  label: "Barista"      },
  { id: "av08", src: "/avatars/av8.jpg",  label: "Teknisi"      },
  { id: "av09", src: "/avatars/av9.jpg",  label: "Profesional"  },
  { id: "av10", src: "/avatars/av10.jpg", label: "Arsitek"      },
  { id: "av11", src: "/avatars/av11.jpg", label: "Seniman"      },
  { id: "av12", src: "/avatars/av12.jpg", label: "Musisi"       },
  { id: "av13", src: "/avatars/av13.jpg", label: "Aktivis"      },
  { id: "av14", src: "/avatars/av14.jpg", label: "Diplomat"     },
  { id: "av15", src: "/avatars/av15.jpg", label: "Kreator"      },
  { id: "av16", src: "/avatars/av16.jpg", label: "DJ Muda"      },
  { id: "av17", src: "/avatars/av17.jpg", label: "Fotografer"   },
  { id: "av18", src: "/avatars/av18.jpg", label: "Desainer"     },
  { id: "av19", src: "/avatars/av19.jpg", label: "Peneliti"     },
  { id: "av20", src: "/avatars/av20.jpg", label: "Fashionista"  },
  { id: "av21", src: "/avatars/av21.jpg", label: "Mahasiswa"    },
  { id: "av22", src: "/avatars/av22.jpg", label: "Chef Muda"    },
  { id: "av23", src: "/avatars/av23.jpg", label: "Tour Guide"   },
  { id: "av24", src: "/avatars/av24.jpg", label: "Traveler"     },
  { id: "av25", src: "/avatars/av25.jpg", label: "Akuntan"      },
  { id: "av26", src: "/avatars/av26.jpg", label: "Penulis"      },
  { id: "av27", src: "/avatars/av27.jpg", label: "Wiraniaga"    },
  { id: "av28", src: "/avatars/av28.jpg", label: "Relawan"      },
  { id: "av29", src: "/avatars/av29.jpg", label: "Kader Desa"   },
];

const LOCAL_MAP = new Map(LOCAL_AVATARS.map((a) => [a.id, a]));

/* ------------------------------------------------------------------ */
/* All 34 avatars list (5 custom SVG + 29 local preset)               */
/* ------------------------------------------------------------------ */

export type AvatarEntry = { id: string; label: string; desc: string };

export const AVATARS: AvatarEntry[] = [
  { id: "sarjana",   label: "Sarjana",   desc: "Pelajar penuh semangat ilmu" },
  { id: "petani",    label: "Petani",    desc: "Penjaga ketahanan pangan desa" },
  { id: "pedagang",  label: "Pedagang",  desc: "Penggerak ekonomi pasar rakyat" },
  { id: "pemimpin",  label: "Pemimpin",  desc: "Pengurus koperasi berdedikasi" },
  { id: "penggerak", label: "Penggerak", desc: "Aktivis literasi koperasi muda" },
  ...LOCAL_AVATARS.map((a) => ({ id: a.id, label: a.label, desc: `Karakter avatar ${a.label}` })),
];

/* ------------------------------------------------------------------ */
/* Inline SVG characters — 5 KopEdu originals                         */
/* ------------------------------------------------------------------ */

function SarjanaSVG() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="50" fill="#dbeafe" />
      <path d="M28 100 Q28 68 50 62 Q72 68 72 100Z" fill="#1e3a5f" />
      <circle cx="50" cy="42" r="18" fill="#fde68a" />
      <rect x="30" y="24" width="40" height="5" rx="1" fill="#1e3a5f" />
      <rect x="36" y="15" width="28" height="11" rx="2" fill="#1e3a5f" />
      <line x1="64" y1="21" x2="72" y2="32" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="72" cy="33" r="2.5" fill="#f59e0b" />
    </svg>
  );
}

function PetaniSVG() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="50" fill="#dcfce7" />
      <path d="M28 100 Q28 68 50 62 Q72 68 72 100Z" fill="#3d7a4a" />
      <circle cx="50" cy="44" r="17" fill="#fde68a" />
      <ellipse cx="50" cy="28" rx="26" ry="5" fill="#d97706" />
      <path d="M32 27 Q50 4 68 27Z" fill="#b45309" />
      <path d="M38 60 L50 66 L62 60" stroke="#2d5a35" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function PedagangSVG() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="50" fill="#ffedd5" />
      <path d="M28 100 Q28 68 50 62 Q72 68 72 100Z" fill="#c2410c" />
      <path d="M38 63 L50 68 L62 63 L62 90 L38 90Z" fill="#ea580c" />
      <circle cx="50" cy="43" r="17" fill="#fde68a" />
      <rect x="64" y="66" width="16" height="20" rx="3" fill="#92400e" />
      <line x1="64" y1="72" x2="72" y2="62" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function PemimpinSVG() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="50" fill="#ede9fe" />
      <path d="M26 100 Q26 66 50 60 Q74 66 74 100Z" fill="#4c1d95" />
      <path d="M42 61 L50 68 L58 61 L56 100 L44 100Z" fill="#f5f3ff" />
      <path d="M47 63 L53 63 L51 82 L50 85 L49 82Z" fill="#4c1d95" />
      <circle cx="50" cy="42" r="17" fill="#fde68a" />
      <path d="M33 41 Q34 26 50 25 Q66 26 67 41 Q60 34 50 34 Q40 34 33 41Z" fill="#1c1917" />
    </svg>
  );
}

function PenggerakSVG() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="50" fill="#fee2e2" />
      <path d="M28 100 Q28 68 50 62 Q72 68 72 100Z" fill="#b91c1c" />
      <path d="M65 62 Q78 50 76 38 Q80 37 82 40 Q85 52 70 66Z" fill="#b91c1c" />
      <circle cx="79" cy="36" r="7" fill="#fde68a" />
      <path d="M35 62 Q22 70 24 82 Q20 83 18 80 Q15 68 30 58Z" fill="#b91c1c" />
      <circle cx="50" cy="43" r="17" fill="#fde68a" />
      <path d="M33 41 Q50 36 67 41" stroke="#fbbf24" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

const CUSTOM_SVG: Record<CustomId, React.FC> = {
  sarjana:   SarjanaSVG,
  petani:    PetaniSVG,
  pedagang:  PedagangSVG,
  pemimpin:  PemimpinSVG,
  penggerak: PenggerakSVG,
};

/* ------------------------------------------------------------------ */
/* AvatarContent — inner content (SVG or local image)                 */
/* ------------------------------------------------------------------ */

export function AvatarContent({ avatarId }: { avatarId: string }) {
  if (isCustom(avatarId)) {
    const AvatarSVG = CUSTOM_SVG[avatarId];
    return <AvatarSVG />;
  }
  const local = LOCAL_MAP.get(avatarId);
  if (local) {
    return (
      <img
        src={local.src}
        alt=""
        aria-hidden="true"
        className="h-full w-full object-cover"
        style={{ objectPosition: "50% 10%" }}
        loading="lazy"
        decoding="async"
      />
    );
  }
  return <SarjanaSVG />;
}

/* ------------------------------------------------------------------ */
/* AvatarDisplay — circular container                                  */
/* ------------------------------------------------------------------ */

export function AvatarDisplay({
  avatarId,
  size = 80,
}: {
  avatarId: string;
  size?: number;
}) {
  return (
    <div
      style={{ width: size, height: size }}
      className="shrink-0 overflow-hidden rounded-full ring-2 ring-line bg-accent/30"
    >
      <AvatarContent avatarId={avatarId} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* AvatarSelector — 34-item 5-column grid, two sections               */
/* ------------------------------------------------------------------ */

const SVG_AVATARS = AVATARS.slice(0, 5);
const PHOTO_AVATARS = AVATARS.slice(5);

function AvatarBtn({
  av,
  isSelected,
  onChange,
}: {
  av: AvatarEntry;
  isSelected: boolean;
  onChange: (id: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(av.id)}
      title={av.desc}
      className={`flex flex-col items-center gap-1.5 rounded-md border p-2 transition-all ${
        isSelected
          ? "border-primary bg-accent shadow-sm"
          : "border-line hover:border-primary/50 hover:bg-accent/30"
      }`}
    >
      <div
        className={`overflow-hidden rounded-full bg-accent/30 transition-transform ${
          isSelected ? "scale-110 ring-2 ring-primary" : ""
        }`}
        style={{ width: 52, height: 52 }}
      >
        <AvatarContent avatarId={av.id} />
      </div>
      <span
        className={`text-center text-[10px] font-semibold leading-tight ${
          isSelected ? "text-primary" : "text-ink-2"
        }`}
      >
        {av.label}
      </span>
    </button>
  );
}

export function AvatarSelector({
  current,
  onChange,
}: {
  current: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="mt-6">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-2">
        Pilih Karakter
      </p>

      {/* Karakter KopEdu — 5 illustrated originals */}
      <p className="mb-2 text-[10px] text-ink-2/55">Karakter KopEdu</p>
      <div className="grid grid-cols-5 gap-3">
        {SVG_AVATARS.map((av) => (
          <AvatarBtn key={av.id} av={av} isSelected={current === av.id} onChange={onChange} />
        ))}
      </div>

      {/* Karakter Umum — 29 photo avatars */}
      <p className="mb-2 mt-5 text-[10px] text-ink-2/55">Karakter Umum</p>
      <div className="grid grid-cols-5 gap-3">
        {PHOTO_AVATARS.map((av) => (
          <AvatarBtn key={av.id} av={av} isSelected={current === av.id} onChange={onChange} />
        ))}
      </div>
    </div>
  );
}
