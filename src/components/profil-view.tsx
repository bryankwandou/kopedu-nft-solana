"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, Stagger, StaggerItem, CountUp } from "@/components/motion";
import { modules } from "@/lib/data";
import {
  useProgress,
  moduleDoneCount,
  relativeTime,
  resetProgress,
  setProfile,
  setAvatar,
} from "@/lib/progress";
import { AvatarDisplay, AvatarSelector } from "@/components/avatar-scene";

/* ------------------------------------------------------------------ */
/* Profile Form                                                        */
/* ------------------------------------------------------------------ */

const INPUT_CLS =
  "h-10 w-full rounded-sm border border-line bg-background px-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-2/50 focus:border-primary";

const ERR_CLS = "mt-1 text-xs text-red-600";

function ProfileForm() {
  const progress = useProgress();

  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    username: "",
    bio: "",
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [saving, setSaving] = React.useState(false);
  const [saved, setSaved] = React.useState(false);

  React.useEffect(() => {
    setForm({
      firstName: progress.firstName,
      lastName: progress.lastName,
      username: progress.username,
      bio: progress.bio,
    });
  }, [progress.firstName, progress.lastName, progress.username, progress.bio]);

  function field(key: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
  }

  function validate(): Record<string, string> {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "Nama depan wajib diisi.";
    if (form.username.trim() && !/^[a-z0-9_]{3,20}$/.test(form.username.trim())) {
      e.username = "3â€“20 karakter: huruf kecil, angka, atau garis bawah.";
    }
    if (form.bio.length > 160) e.bio = `Terlalu panjang (${form.bio.length}/160).`;
    return e;
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSaving(true);
    setProfile({
      firstName: form.firstName,
      lastName: form.lastName,
      username: form.username,
      bio: form.bio,
    });
    await new Promise((r) => setTimeout(r, 450));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <form onSubmit={handleSave} className="mt-6 rounded-md border border-line bg-card p-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-2">
        Informasi Profil
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">Nama Depan</span>
            <input
              type="text"
              value={form.firstName}
              onChange={field("firstName")}
              placeholder="cth. Budi"
              maxLength={40}
              className={INPUT_CLS}
            />
            {errors.firstName && <p className={ERR_CLS}>{errors.firstName}</p>}
          </label>
        </div>
        <div>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">Nama Belakang</span>
            <input
              type="text"
              value={form.lastName}
              onChange={field("lastName")}
              placeholder="cth. Santoso"
              maxLength={40}
              className={INPUT_CLS}
            />
          </label>
        </div>
      </div>

      <div className="mt-4">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Username</span>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-ink-2">
              @
            </span>
            <input
              type="text"
              value={form.username}
              onChange={field("username")}
              placeholder="nama_kamu"
              maxLength={20}
              className={`${INPUT_CLS} pl-7`}
            />
          </div>
          {errors.username && <p className={ERR_CLS}>{errors.username}</p>}
          <p className="mt-1 text-xs text-ink-2">Opsional. Hanya huruf kecil, angka, dan _.</p>
        </label>
      </div>

      <div className="mt-4">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Bio</span>
          <textarea
            value={form.bio}
            onChange={field("bio")}
            placeholder="Ceritakan sedikit tentang dirimu atau alasanmu belajar koperasi..."
            maxLength={200}
            rows={3}
            className={`${INPUT_CLS} h-auto resize-none py-2.5`}
          />
          <div className="mt-1 flex items-center justify-between">
            {errors.bio ? (
              <p className={ERR_CLS}>{errors.bio}</p>
            ) : (
              <span />
            )}
            <p className={`text-xs ${form.bio.length > 150 ? "text-amber-600" : "text-ink-2"}`}>
              {form.bio.length}/160
            </p>
          </div>
        </label>
      </div>

      <div className="mt-5 flex items-center justify-end gap-3">
        <AnimatePresence>
          {saved && (
            <motion.span
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              className="text-sm font-medium text-primary"
            >
              Tersimpan.
            </motion.span>
          )}
        </AnimatePresence>
        <button
          type="submit"
          disabled={saving}
          className="inline-flex h-10 items-center rounded-sm bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[#7a2ff2] disabled:opacity-60"
        >
          {saving ? "Menyimpan..." : "Simpan Perubahan"}
        </button>
      </div>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/* Main view                                                           */
/* ------------------------------------------------------------------ */

export function ProfilView() {
  const progress = useProgress();
  const done = moduleDoneCount(progress);

  const displayName =
    [progress.firstName, progress.lastName].filter(Boolean).join(" ") ||
    progress.profileName ||
    "Pelajar";

  const badges = [
    {
      name: "Langkah Pertama",
      desc: "Selesaikan modul pertama",
      earned: done >= 1,
    },
    {
      name: "Pelajar Tekun",
      desc: "Streak belajar 5 hari berturut-turut",
      earned: progress.streak >= 5,
    },
    {
      name: "Dasar Tuntas",
      desc: "Tamatkan semua modul tingkat Dasar",
      earned: [1, 2].every((id) => progress.completedModules.includes(id)),
    },
    {
      name: "Paham SHU",
      desc: "Lulus modul Sisa Hasil Usaha",
      earned: progress.completedModules.includes(5),
    },
    {
      name: "Separuh Jalan",
      desc: "Selesaikan 5 modul atau lebih",
      earned: done >= 5,
    },
    {
      name: "Kurikulum Penuh",
      desc: "Rampungkan seluruh 14 modul",
      earned: done >= modules.length,
    },
  ];
  const earnedCount = badges.filter((b) => b.earned).length;

  const history = progress.activity.map((a) => ({
    text: a.text,
    time: relativeTime(a.ts),
  }));

  return (
    <div className="mx-auto max-w-4xl px-6 py-10 pb-28 md:pb-10">
      {/* Header */}
      <Reveal y={12}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-5">
            <div className="shrink-0">
              <AvatarDisplay avatarId={progress.avatarId} size={72} />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold text-ink">{displayName}</h1>
              {progress.username && (
                <p className="mt-0.5 text-sm font-medium text-primary">@{progress.username}</p>
              )}
              <p className="mt-1 text-sm text-ink-2">
                Bergabung Juni 2026 &middot; {done} dari {modules.length} modul
              </p>
              {progress.bio && (
                <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-ink-2">
                  {progress.bio}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={resetProgress}
            className="rounded-sm border border-line px-3 py-1.5 text-xs font-medium text-ink-2 transition-colors hover:border-red-400 hover:text-red-600"
          >
            Atur ulang progres
          </button>
        </div>
      </Reveal>

      {/* Profile form */}
      <Reveal delay={0.12}>
        <ProfileForm />
      </Reveal>

      {/* Avatar selector */}
      <Reveal delay={0.16}>
        <div className="mt-6 rounded-md border border-line bg-card p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-2">
            Karakter Avatar
          </p>
          <AvatarSelector
            current={progress.avatarId}
            onChange={(id: string) => setAvatar(id)}
          />
        </div>
      </Reveal>

      {/* Stats */}
      <Stagger className="mt-6 grid grid-cols-2 overflow-hidden rounded-md border border-line bg-card sm:grid-cols-4">
        <Cell label="Total Poin" value={progress.points} />
        <Cell label="Modul Selesai" value={done} border />
        <Cell label="Hari Streak" value={progress.streak} border />
        <Cell label="Badge" value={earnedCount} suffix={` / ${badges.length}`} border />
      </Stagger>

      {/* Certificate */}
      <Reveal>
        <div className="mt-6 overflow-hidden rounded-md border border-line bg-card">
          <div className="flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
            <div>
              <p className="eyebrow mb-1">Sertifikat Digital</p>
              <h2 className="font-display text-xl font-bold text-ink">
                Literasi Dasar Koperasi
              </h2>
              <p className="mt-1 text-sm text-ink-2">
                {done >= modules.length
                  ? "Seluruh modul rampung. Sertifikat siap diunduh."
                  : `Sisa ${modules.length - done} modul lagi sebelum sertifikat terbuka.`}
              </p>
            </div>
            {done >= modules.length ? (
              <Link
                href="/sertifikat"
                className="inline-flex h-10 items-center gap-2 rounded-sm bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-[#7a2ff2]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Unduh Sertifikat
              </Link>
            ) : (
              <span className="inline-flex h-10 cursor-not-allowed items-center rounded-sm border border-line px-5 text-sm font-medium text-ink-2">
                Belum Terbuka
              </span>
            )}
          </div>
          <div className="h-1.5 w-full bg-line">
            <div
              className="h-full bg-primary transition-[width] duration-700"
              style={{ width: `${(done / modules.length) * 100}%` }}
            />
          </div>
        </div>
      </Reveal>

      {/* Badges */}
      <div className="mt-10">
        <Reveal>
          <h2 className="mb-4 font-display text-xl font-bold text-ink">Pencapaian</h2>
        </Reveal>
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {badges.map((b, i) => (
            <StaggerItem key={b.name}>
              <div
                className={`rounded-md border p-5 transition-colors ${
                  b.earned
                    ? "border-line bg-card"
                    : "border-dashed border-line bg-transparent opacity-50"
                }`}
              >
                <div
                  className={`mb-3 flex h-10 w-10 items-center justify-center rounded-full font-mono-data text-sm ${
                    b.earned ? "bg-accent text-primary" : "bg-muted text-ink-2"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-sm font-semibold text-ink">{b.name}</h3>
                <p className="mt-1 text-xs text-ink-2">{b.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* History */}
      <div className="mt-10">
        <Reveal>
          <h2 className="mb-2 font-display text-xl font-bold text-ink">Riwayat Kegiatan</h2>
        </Reveal>
        <div className="rounded-md border border-line bg-card px-5">
          {history.length === 0 && (
            <p className="py-6 text-sm text-ink-2">
              Riwayat akan muncul begitu kamu mulai mengerjakan modul.
            </p>
          )}
          {history.map((a, i) => (
            <div
              key={i}
              className="flex items-center gap-3 border-b border-line py-4 text-sm last:border-b-0"
            >
              <span className="h-2 w-2 shrink-0 rounded-full border-2 border-primary bg-accent" />
              <span className="text-ink">{a.text}</span>
              <span className="ml-auto whitespace-nowrap text-xs text-ink-2">{a.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Cell({
  label,
  value,
  suffix = "",
  border = false,
}: {
  label: string;
  value: number;
  suffix?: string;
  border?: boolean;
}) {
  return (
    <StaggerItem className={border ? "border-l border-line" : ""}>
      <div className="p-4 sm:p-5">
        <div className="font-mono-data text-2xl font-medium text-ink">
          <CountUp to={value} suffix={suffix} />
        </div>
        <div className="mt-1 text-xs text-ink-2">{label}</div>
      </div>
    </StaggerItem>
  );
}
