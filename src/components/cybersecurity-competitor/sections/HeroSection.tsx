"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useCallback } from "react";
import { Shield, Target, Timer, Users } from "lucide-react";
import {
  COMPETITION_CONTEXT,
  HERO_DOMAINS,
  HERO_METRICS,
} from "@/src/data/cybersecurityCompetitorShowcase";
import {
  fadeOnlyItem,
  heroStaggerContainer,
  heroStaggerItem,
} from "@/src/lib/motion";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const itemVariant = reduceMotion ? fadeOnlyItem : heroStaggerItem;

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const glowX = useSpring(pointerX, { stiffness: 64, damping: 22, mass: 0.6 });
  const glowY = useSpring(pointerY, { stiffness: 64, damping: 22, mass: 0.6 });
  const glow = useMotionTemplate`radial-gradient(480px circle at ${glowX}px ${glowY}px, var(--theme-ambient-primary), transparent 70%)`;

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      if (reduceMotion) return;
      const rect = e.currentTarget.getBoundingClientRect();
      pointerX.set(e.clientX - rect.left);
      pointerY.set(e.clientY - rect.top);
    },
    [pointerX, pointerY, reduceMotion],
  );

  const percentileWidth = `${100 - HERO_METRICS.topPercent}%`;

  return (
    <section
      className="relative flex min-h-[92svh] flex-col justify-end overflow-hidden pb-20 pt-28 sm:pb-28"
      onPointerMove={handlePointerMove}
      aria-labelledby="cyber-hero-title"
    >
      <div className="ambient-glow" aria-hidden>
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        <div className="ambient-blob-primary absolute top-[10%] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full blur-[130px]" />
        <div className="ambient-blob-secondary absolute right-[8%] bottom-[18%] h-[280px] w-[280px] rounded-full blur-[100px]" />
        {!reduceMotion && (
          <motion.div className="absolute inset-0" style={{ background: glow }} />
        )}
      </div>

      <motion.div
        className="container-narrow relative px-4 sm:px-6 lg:px-8"
        variants={heroStaggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariant} className="text-kicker">
          Cybersecurity Competitor
        </motion.p>

        <motion.h1
          id="cyber-hero-title"
          variants={itemVariant}
          className="text-display mt-6 max-w-4xl text-balance font-bold"
        >
          Thailand Cyber
          <br />
          <span className="text-text-muted/90">Top Talent 2025</span>
        </motion.h1>

        <motion.p
          variants={itemVariant}
          className="text-body mt-8 max-w-2xl text-lg sm:text-xl"
        >
          Evidence of technical problem-solving under pressure — not a trophy
          wall, but how I investigate challenges I have never seen before.
        </motion.p>

        <motion.ul
          variants={itemVariant}
          className="mt-8 flex flex-wrap gap-2"
          aria-label="Security domains"
        >
          {HERO_DOMAINS.map((domain) => (
            <li key={domain}>
              <span className="rounded-full border border-border-default bg-bg-secondary/80 px-3 py-1 font-mono text-[10px] tracking-wider text-text-muted uppercase backdrop-blur-sm">
                {domain}
              </span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          variants={itemVariant}
          className="mt-10 overflow-hidden rounded-xl border border-border-default bg-bg-secondary/80 backdrop-blur-sm"
        >
          <div className="grid gap-px bg-bg-tertiary/50 sm:grid-cols-3">
            <div className="flex flex-col gap-2 bg-bg-secondary/80 px-6 py-6">
              <div className="flex items-center gap-2">
                <Target className="h-3.5 w-3.5 text-accent-primary/70" aria-hidden />
                <span className="font-mono text-[10px] tracking-[0.16em] text-text-muted uppercase">
                  National rank
                </span>
              </div>
              <span className="text-4xl font-semibold tracking-tight text-text-primary">
                #{HERO_METRICS.rank}
              </span>
              <span className="text-xs text-text-muted">
                of {HERO_METRICS.totalTeams} teams
              </span>
            </div>

            <div className="flex flex-col gap-2 bg-bg-secondary/80 px-6 py-6">
              <div className="flex items-center gap-2">
                <Users className="h-3.5 w-3.5 text-accent-primary/70" aria-hidden />
                <span className="font-mono text-[10px] tracking-[0.16em] text-text-muted uppercase">
                  Percentile
                </span>
              </div>
              <span className="text-4xl font-semibold tracking-tight text-text-primary">
                Top {HERO_METRICS.topPercent}%
              </span>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-bg-tertiary">
                <motion.div
                  className="h-full rounded-full bg-accent-primary/70"
                  initial={reduceMotion ? false : { width: 0 }}
                  animate={{ width: percentileWidth }}
                  transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 bg-bg-secondary/80 px-6 py-6">
              <div className="flex items-center gap-2">
                <Shield className="h-3.5 w-3.5 text-accent-primary/70" aria-hidden />
                <span className="font-mono text-[10px] tracking-[0.16em] text-text-muted uppercase">
                  Organizer
                </span>
              </div>
              <span className="text-sm font-medium leading-snug text-text-primary">
                {COMPETITION_CONTEXT.organizer}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-text-muted">
                <Timer className="h-3 w-3" aria-hidden />
                {COMPETITION_CONTEXT.constraint}
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
