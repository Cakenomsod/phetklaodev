"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HERO_CONTENT } from "@/src/data/portfolioJourneyData";
import JourneyReveal from "@/src/components/portfolio-journey/motion/JourneyReveal";

const heroStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function IntroHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="intro"
      className="pj-section scroll-mt-14"
      aria-labelledby="intro-heading"
    >
      <div className="pj-container">
        <motion.div
          variants={reduceMotion ? undefined : heroStagger}
          initial={reduceMotion ? undefined : "hidden"}
          animate={reduceMotion ? undefined : "visible"}
        >
          <motion.p
            variants={reduceMotion ? undefined : heroItem}
            className="pj-kicker"
          >
            Application Portfolio · Yuan Ze University
          </motion.p>

          <motion.h1
            id="intro-heading"
            variants={reduceMotion ? undefined : heroItem}
            className="pj-display mt-6 text-balance"
          >
            {HERO_CONTENT.name}
          </motion.h1>

          <motion.div
            variants={reduceMotion ? undefined : heroItem}
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
            variants={reduceMotion ? undefined : heroItem}
            className="pj-body mt-10 max-w-2xl text-balance text-lg"
          >
            {HERO_CONTENT.mission}
          </motion.p>

          <motion.div
            variants={reduceMotion ? undefined : heroItem}
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--pj-text-muted)]"
          >
            <span>{HERO_CONTENT.school}</span>
            <span className="hidden h-1 w-1 rounded-full bg-[var(--pj-border-strong)] sm:inline-block" aria-hidden />
            <span>{HERO_CONTENT.program}</span>
          </motion.div>
        </motion.div>

        <JourneyReveal className="mt-20" delay={0.3}>
          <div className="pj-divider" />
          <p className="mt-8 text-center font-[family-name:var(--font-serif)] text-sm italic text-[var(--pj-text-muted)]">
            Scroll to explore the journey
          </p>
        </JourneyReveal>
      </div>
    </section>
  );
}
