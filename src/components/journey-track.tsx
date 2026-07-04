"use client";

import * as React from "react";
import { motion, useInView } from "motion/react";
import { modules } from "@/lib/data";
import { useProgress, activeModuleId } from "@/lib/progress";

// Fixed pixel width per module slot — guarantees equal spacing at every screen size
const ITEM_W = 76;

export function JourneyTrack() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const progress = useProgress();

  const activeId = activeModuleId(progress);
  const activeIndex = modules.findIndex((m) => m.id === activeId);
  const fillIndex = activeIndex >= 0 ? activeIndex : 0;

  // Track line runs center-of-first-dot → center-of-last-dot
  const trackLeft = ITEM_W / 2;
  const trackWidth = (modules.length - 1) * ITEM_W;
  const fillWidth = fillIndex > 0 ? (fillIndex / (modules.length - 1)) * trackWidth : 0;
  const contentWidth = modules.length * ITEM_W;

  return (
    <div ref={ref} className="rounded-md border border-line bg-card p-6 sm:p-8">
      <p className="eyebrow mb-6 text-ink-2">Perjalanan Belajarmu</p>

      {/* Outer container — clips overflow, shows right-fade hint on mobile */}
      <div className="relative">
        {/* Scrollable row — scrollbar hidden visually but still functional */}
        <div
          className="overflow-x-auto pb-3 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          <div
            className="relative flex items-start"
            style={{ width: contentWidth }}
          >
            {/* Track background: center-to-center */}
            <div
              className="absolute top-2.5 h-0.5 bg-line"
              style={{ left: trackLeft, width: trackWidth }}
            />

            {/* Animated fill */}
            <motion.div
              className="absolute top-2.5 h-0.5 bg-primary"
              style={{ left: trackLeft }}
              initial={{ width: 0 }}
              animate={inView ? { width: fillWidth } : { width: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            />

            {/* Module dots + labels */}
            {modules.map((m, i) => {
              const isDone = progress.completedModules.includes(m.id);
              const isActive = m.id === activeId;
              return (
                <div
                  key={m.id}
                  className="relative z-10 flex shrink-0 flex-col items-center gap-2"
                  style={{ width: ITEM_W }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.3 + i * 0.06,
                    }}
                    className={`h-5 w-5 rounded-full border-2 transition-colors ${
                      isActive
                        ? "border-primary bg-primary ring-4 ring-accent"
                        : isDone
                          ? "border-primary bg-primary"
                          : "border-line bg-card"
                    }`}
                  />
                  <span className="w-full px-1 text-center text-[10px] leading-tight text-ink-2">
                    {m.short}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right-edge fade — visible only on mobile to hint at scrollability */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-card to-transparent sm:hidden" />
      </div>
    </div>
  );
}
