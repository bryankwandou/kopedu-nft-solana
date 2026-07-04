"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { loginAs } from "@/lib/progress";

type Mode = "daftar" | "masuk";

const EASE = [0.22, 1, 0.36, 1] as const;

const STATS = [
  { value: "14", label: "Modul terstruktur" },
  { value: "1.200+", label: "Pelajar aktif" },
  { value: "100%", label: "Gratis selamanya" },
];

const TRUST = [
  "14 modul dari dasar koperasi sampai KDMP",
  "KopBot AI siap menjawab kapan pun",
  "Sertifikat digital siap dibagikan ke LinkedIn",
];

const QUOTES = [
  "Satu modul sudah cukup untuk mulai.",
  "Koperasi adalah demokrasi ekonomi.",
  "Pahami dulu. Bergabung kemudian.",
];

export function AuthForm({ mode }: { mode: Mode }) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [quoteIdx] = React.useState(() => Math.floor(Math.random() * QUOTES.length));

  const isRegister = mode === "daftar";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const endpoint = isRegister ? "/api/auth/register" : "/api/auth/login";
      const body = isRegister
        ? { email, password, firstName, lastName }
        : { email, password };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = (await res.json()) as {
        userId?: string;
        firstName?: string;
        lastName?: string;
        error?: string;
      };

      if (!res.ok || !data.userId) {
        setError(data.error ?? "Terjadi kesalahan. Coba lagi.");
        setLoading(false);
        return;
      }

      await loginAs(data.userId, data.firstName ?? "", data.lastName ?? "");
      router.push("/dashboard");
    } catch {
      setError("Gagal terhubung ke server. Periksa koneksi internet.");
      setLoading(false);
    }
  }

  return (
    <div className="grid min-h-screen md:grid-cols-2">

      {/* â”€â”€â”€ Brand panel â”€â”€â”€ */}
      <div className="relative hidden flex-col overflow-hidden bg-primary p-12 text-primary-foreground md:flex">
        <div className="paper-grain pointer-events-none absolute inset-0 opacity-20" />

        <motion.div
          animate={{ scale: [1, 1.07, 1], opacity: [0.07, 0.11, 0.07] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary-foreground"
        />
        <motion.div
          animate={{ scale: [1, 1.09, 1], opacity: [0.05, 0.09, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary-foreground"
        />
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="pointer-events-none absolute bottom-1/3 right-12 h-28 w-28 rounded-full bg-primary-foreground"
        />

        <Link href="/" className="relative mb-10 block font-display text-2xl font-bold">
          KopEdu<span className="opacity-60">.</span>
        </Link>

        <div className="relative flex flex-1 flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-primary-foreground/55">
              {QUOTES[quoteIdx]}
            </p>
            <h2 className="font-display text-[2.4rem] font-bold leading-[1.1]">
              Ekonomi yang merata
              <br />
              tumbuh dari paham.
            </h2>
            <p className="mt-4 max-w-[34ch] text-[0.92rem] leading-relaxed text-primary-foreground/72">
              Ribuan pelajar sudah mulai belajar membangun
              usaha bersama lewat jalur koperasi.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-3 gap-3">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: EASE, delay: 0.35 + i * 0.11 }}
                className="rounded-sm border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-4"
              >
                <div className="font-mono-data text-[1.6rem] font-medium leading-none text-primary-foreground">
                  {s.value}
                </div>
                <div className="mt-1.5 text-[10.5px] leading-snug text-primary-foreground/58">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="relative font-mono-data text-[11px] text-primary-foreground/40">
          GotongDigital â€” Hackathon Kemenkop RI 2026
        </p>
      </div>

      {/* â”€â”€â”€ Form panel â”€â”€â”€ */}
      <div className="flex min-h-screen flex-col px-8 py-10 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="mb-10 md:hidden"
        >
          <Link href="/" className="font-display text-xl font-bold text-ink">
            KopEdu<span className="text-primary">.</span>
          </Link>
        </motion.div>

        <div className="w-full max-w-md">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <h1 className="font-display text-[2rem] font-bold leading-tight text-ink">
              {isRegister ? "Buat akun gratis" : "Masuk ke akun"}
            </h1>
            <p className="mt-2 text-[0.875rem] text-ink-2">
              {isRegister
                ? "Perjalanan belajar koperasimu dimulai dari sini."
                : "Lanjutkan dari mana kamu berhenti."}
            </p>
          </motion.div>

          {/* Google â€” disabled, coming soon */}
          <motion.button
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.1 }}
            type="button"
            disabled
            aria-disabled="true"
            className="mt-7 flex h-11 w-full cursor-not-allowed items-center justify-center gap-3 rounded-sm border border-line bg-card text-sm font-medium text-ink-2"
          >
            <GoogleMark />
            <span>Lanjutkan dengan Google</span>
            <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink-2">
              Segera
            </span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="my-5 flex items-center gap-3 text-xs text-ink-2"
          >
            <span className="h-px flex-1 bg-line" />
            atau dengan email
            <span className="h-px flex-1 bg-line" />
          </motion.div>

          {/* Error banner */}
          <AnimatePresence>
            {error && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="mb-4 rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <AnimatePresence>
              {isRegister && (
                <motion.div
                  key="name-fields"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE, delay: 0.24 }}
                  className="grid grid-cols-2 gap-3"
                >
                  <Field
                    label="Nama Depan"
                    type="text"
                    placeholder="cth. Budi"
                    autoComplete="given-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.currentTarget.value)}
                    required
                  />
                  <Field
                    label="Nama Belakang"
                    type="text"
                    placeholder="cth. Santoso"
                    autoComplete="family-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.currentTarget.value)}
                    required={false}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE, delay: isRegister ? 0.32 : 0.24 }}
            >
              <Field
                label="Email"
                type="email"
                placeholder="kamu@email.com"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE, delay: isRegister ? 0.4 : 0.32 }}
            >
              <Field
                label="Kata Sandi"
                type="password"
                placeholder="Minimal 8 karakter"
                autoComplete={isRegister ? "new-password" : "current-password"}
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE, delay: isRegister ? 0.48 : 0.4 }}
            >
              <button
                type="submit"
                disabled={loading}
                className="mt-1 inline-flex h-12 w-full items-center justify-center rounded-sm bg-primary text-[0.9rem] font-semibold text-primary-foreground transition-colors hover:bg-[#7a2ff2] disabled:opacity-70"
              >
                {loading
                  ? "Memproses..."
                  : isRegister
                    ? "Daftar Sekarang"
                    : "Masuk"}
              </button>
            </motion.div>
          </form>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: isRegister ? 0.56 : 0.48 }}
            className="mt-5 text-center text-sm text-ink-2"
          >
            {isRegister ? "Sudah punya akun? " : "Belum terdaftar? "}
            <Link
              href={isRegister ? "/masuk" : "/daftar"}
              className="font-semibold text-primary hover:underline"
            >
              {isRegister ? "Masuk" : "Buat akun gratis"}
            </Link>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: isRegister ? 0.64 : 0.56 }}
            className="mt-10 border-t border-line pt-7"
          >
            <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-ink-2">
              Yang kamu dapat
            </p>
            <ul className="space-y-3">
              {TRUST.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.38,
                    ease: EASE,
                    delay: (isRegister ? 0.7 : 0.62) + i * 0.08,
                  }}
                  className="flex items-start gap-3 text-[0.875rem] text-ink-2"
                >
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 5l2 2 4-4"
                        stroke="#7c3aed"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function GoogleMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
    </svg>
  );
}

function Field({
  label,
  required = true,
  onChange,
  ...props
}: {
  label: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      <input
        {...props}
        required={required}
        onChange={onChange}
        className="h-11 w-full rounded-sm border border-line bg-background px-3.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-2/60 focus:border-primary"
      />
    </label>
  );
}
