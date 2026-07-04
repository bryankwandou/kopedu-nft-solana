"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { useProgress } from "@/lib/progress";
import { AvatarDisplay } from "@/components/avatar-scene";

/* ------------------------------------------------------------------ */
/* SVG Icons — outline / filled pair for each tab                     */
/* ------------------------------------------------------------------ */

function IconHome({ filled }: { filled: boolean }) {
  return filled ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 12L12 4l9 8" />
      <path d="M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
    </svg>
  );
}

function IconModules({ filled }: { filled: boolean }) {
  return filled ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2H6.5A3.5 3.5 0 003 5.5v13A3.5 3.5 0 006.5 22H18a1 1 0 001-1V3a1 1 0 00-1-1zM6.5 20A1.5 1.5 0 015 18.5V16h13v4H6.5z" />
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  );
}

function IconChat({ filled }: { filled: boolean }) {
  return filled ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z" />
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}

function IconProfile({ filled }: { filled: boolean }) {
  return filled ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-5.33 0-8 2.67-8 4v1a1 1 0 001 1h14a1 1 0 001-1v-1c0-1.33-2.67-4-8-4z" />
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Nav items                                                           */
/* ------------------------------------------------------------------ */

function IconNft({ filled }: { filled: boolean }) {
  return filled ? (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 1.5l9 5.25v10.5L12 22.5l-9-5.25V6.75L12 1.5zm0 5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" />
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

const NAV = [
  { label: "Beranda",        href: "/dashboard",                Icon: IconHome    },
  { label: "Modul Saya",     href: "/dashboard/modul",          Icon: IconModules },
  { label: "KopBot",         href: "/dashboard/tanya",          Icon: IconChat    },
  { label: "Sertifikat NFT", href: "/dashboard/sertifikat-nft", Icon: IconNft     },
  { label: "Profil",         href: "/dashboard/profil",         Icon: IconProfile },
];

function isActive(href: string, pathname: string) {
  return href === "/dashboard" ? pathname === "/dashboard" : pathname.startsWith(href);
}

/* ------------------------------------------------------------------ */
/* Desktop sidebar                                                     */
/* ------------------------------------------------------------------ */

export function Sidebar() {
  const pathname = usePathname();
  const progress = useProgress();
  const displayName =
    [progress.firstName, progress.lastName].filter(Boolean).join(" ") ||
    progress.profileName ||
    "Pelajar";

  return (
    <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r border-line bg-card p-6 md:flex overflow-y-auto">
      <Link href="/" className="mb-10 block font-display text-lg font-bold text-ink">
        KopEdu<span className="text-primary">.</span>
      </Link>

      <nav className="flex-1">
        <ul className="space-y-1">
          {NAV.map((n) => {
            const active = isActive(n.href, pathname);
            return (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={`relative flex items-center gap-2.5 rounded-sm px-3 py-2.5 text-sm transition-colors ${
                    active ? "font-semibold text-primary" : "text-ink-2 hover:text-ink"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="sidebar-active"
                      className="absolute inset-0 -z-0 rounded-sm bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 shrink-0 opacity-70">
                    <n.Icon filled={active} />
                  </span>
                  <span className="relative z-10">{n.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-6 border-t border-line pt-4">
        <Link href="/dashboard/profil" className="flex items-center gap-3 group">
          <div className="transition-opacity group-hover:opacity-80">
            <AvatarDisplay avatarId={progress.avatarId} size={36} />
          </div>
          <div className="min-w-0">
            <strong className="block truncate text-sm text-ink">{displayName}</strong>
            <span className="text-xs text-ink-2">Lihat Profil</span>
          </div>
        </Link>
      </div>
    </aside>
  );
}

/* ------------------------------------------------------------------ */
/* Mobile bottom tab bar                                               */
/* ------------------------------------------------------------------ */

export function MobileTabbar() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-card md:hidden"
      style={{
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
        boxShadow: "0 -1px 0 rgba(0,0,0,0.08), 0 -6px 20px rgba(0,0,0,0.07)",
      }}
    >
      <div className="flex h-[62px] items-center">
        {NAV.map((n) => {
          const active = isActive(n.href, pathname);
          return (
            <Link
              key={n.href}
              href={n.href}
              aria-label={n.label}
              className="relative flex flex-1 flex-col items-center justify-center gap-[3px]"
            >
              {/* Animated background highlight for active tab */}
              {active && (
                <motion.span
                  layoutId="mobile-tab-bg"
                  className="absolute inset-x-2 inset-y-[5px] rounded-2xl bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}

              {/* Icon */}
              <span
                className={`relative z-10 transition-colors ${
                  active ? "text-primary" : "text-ink-2"
                }`}
              >
                <n.Icon filled={active} />
              </span>

              {/* Label */}
              <span
                className={`relative z-10 text-[9px] font-medium leading-none tracking-wide transition-colors ${
                  active ? "font-semibold text-primary" : "text-ink-2"
                }`}
              >
                {n.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
