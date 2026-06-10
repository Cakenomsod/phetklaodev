"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useCallback } from "react";
import { HERO_CONTENT } from "@/src/data/portfolioJourneyData";
import JourneyReveal from "@/src/components/portfolio-journey/motion/JourneyReveal";
import {
  fadeOnlyItem,
  heroStaggerContainer,
  heroStaggerItem,
} from "@/src/lib/motion";

export default function IntroHero() {
  const reduceMotion = useReducedMotion();
  const itemVariant = reduceMotion ? fadeOnlyItem : heroStaggerItem;

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const glowX = useSpring(pointerX, { stiffness: 64, damping: 22, mass: 0.6 });
  const glowY = useSpring(pointerY, { stiffness: 64, damping: 22, mass: 0.6 });
  const glowBackground = useMotionTemplate`radial-gradient(520px circle at ${glowX}px ${glowY}px, var(--theme-ambient-primary), transparent 72%)`;

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      if (reduceMotion) return;
      const rect = event.currentTarget.getBoundingClientRect();
      pointerX.set(event.clientX - rect.left);
      pointerY.set(event.clientY - rect.top);
    },
    [pointerX, pointerY, reduceMotion],
  );

  return (
    <section
      id="intro"
      className="pj-section scroll-mt-14 relative overflow-hidden"
      aria-labelledby="intro-heading"
      onPointerMove={handlePointerMove}
    >
      <div className="ambient-glow" aria-hidden>
        <div className="ambient-blob-secondary absolute top-[12%] left-1/2 h-[420px] w-[640px] -translate-x-1/2 rounded-full blur-[120px]" />
        <div className="ambient-blob-primary absolute right-[8%] bottom-[18%] h-[280px] w-[280px] rounded-full blur-[100px]" />
        {!reduceMotion && (
          <motion.div
            className="absolute inset-0"
            style={{ background: glowBackground }}
          />
        )}
      </div>

      <div className="pj-container relative">
        <motion.div
          variants={reduceMotion ? undefined : heroStaggerContainer}
          initial={reduceMotion ? undefined : "hidden"}
          animate={reduceMotion ? undefined : "visible"}
        >
          <motion.p
            variants={reduceMotion ? undefined : itemVariant}
            className="pj-kicker"
          >
            Application Portfolio · Yuan Ze University
          </motion.p>

          <motion.h1
            id="intro-heading"
            variants={reduceMotion ? undefined : itemVariant}
            className="pj-display mt-6 text-balance"
          >
            {HERO_CONTENT.name}
          </motion.h1>

          <motion.div
            variants={reduceMotion ? undefined : itemVariant}
            className="mt-8 flex flex-wrap gap-2"
            role="list"
            aria-label="Roles"
          >
            {HERO_CONTENT.roles.map((role) => (
              <span key={role} className="pj-role-pill" role="listitem">
                {role}
              </span>
            ))}
          </motion.div>

          <motion.p
            variants={reduceMotion ? undefined : itemVariant}
            className="pj-body mt-10 max-w-2xl text-balance text-lg"
          >
            {HERO_CONTENT.mission}
          </motion.p>

          <motion.div
            variants={reduceMotion ? undefined : itemVariant}
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--pj-text-muted)]"
          >
            <span>{HERO_CONTENT.school}</span>
            <span className="hidden h-1 w-1 rounded-full bg-[var(--pj-border-strong)] sm:inline-block" aria-hidden />
            <span>{HERO_CONTENT.program}</span>
          </motion.div>
        </motion.div>

        <JourneyReveal className="mt-20" delay={0.3}>
          <div className="pj-divider" />
        </JourneyReveal>
      </div>
    </section>
  );
}
