"use client";

import * as React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { AnimatedHeadline, Magnetic, CountUp } from "@/components/motion";

const Hero3D = dynamic(() => import("@/components/hero-3d"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-24 w-24 animate-pulse rounded-full bg-accent/40" />
    </div>
  ),
});

const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="paper-grain pointer-events-none absolute inset-0 opacity-60" />
      <div className="container-edge relative grid items-center gap-8 py-10 md:grid-cols-2 md:py-16 lg:gap-12">
        {/* Left: copy */}
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="eyebrow mb-5"
          >
            Belajar Koperasi untuk Pelajar Indonesia
          </motion.p>

          <h1 className="font-display text-[clamp(2rem,3.4vw,3.2rem)] font-black leading-[1.1] tracking-tight text-ink">
            <AnimatedHeadline text="Kenali Koperasi." delay={0.1} />
            <br />
            <span className="text-primary">
              <AnimatedHeadline text="Pegang Ekonomimu." delay={0.45} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.8 }}
            className="mt-6 max-w-[44ch] text-[1.0625rem] leading-relaxed text-ink-2"
          >
            Dari nol sampai paham betul lewat modul singkat, kuis langsung, dan
            asisten AI yang siap menjawab dalam bahasa kamu. Gratis, dan setiap
            langkah memberi poin.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.95 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <Link
                href="/daftar"
                className="inline-flex h-12 items-center rounded-sm bg-primary px-7 text-[0.95rem] font-semibold text-primary-foreground transition-colors hover:bg-[#7a2ff2]"
              >
                Mulai Gratis
              </Link>
            </Magnetic>
            <Link
              href="/#modul"
              className="inline-flex h-12 items-center rounded-sm border-2 border-primary px-7 text-[0.95rem] font-semibold text-primary transition-colors hover:bg-accent"
            >
              Lihat Kurikulum
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[0.8125rem] text-ink-2"
          >
            <span>
              <strong className="font-mono-data text-ink">
                <CountUp to={1200} suffix="+" />
              </strong>{" "}
              pelajar
            </span>
            <span aria-hidden>Â·</span>
            <span>
              <strong className="font-mono-data text-ink">14</strong> modul
            </span>
            <span aria-hidden>Â·</span>
            <span>Sertifikat digital</span>
          </motion.div>
        </div>

        {/* Right: 3D scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.3 }}
          className="relative h-65 w-full md:h-105"
        >
          <Hero3D />
        </motion.div>
      </div>
    </section>
  );
}
