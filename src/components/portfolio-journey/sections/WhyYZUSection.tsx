"use client";

import { WHY_YZU_CONTENT } from "@/src/data/portfolioJourneyData";
import JourneyReveal from "@/src/components/portfolio-journey/motion/JourneyReveal";
import StaggerGroup, {
  staggerItem,
} from "@/src/components/portfolio-journey/motion/StaggerGroup";
import { motion } from "framer-motion";

export default function WhyYZUSection() {
  return (
    <section
      id="why-yzu"
      className="pj-section scroll-mt-14 border-t border-[var(--pj-border)] bg-[var(--pj-bg-subtle)]"
      aria-labelledby="why-yzu-heading"
    >
      <div className="pj-container">
        <div className="mx-auto max-w-3xl">
          <JourneyReveal>
            <p className="pj-kicker">04 — Personal</p>
            <h2 id="why-yzu-heading" className="pj-headline mt-4 text-balance">
              {WHY_YZU_CONTENT.headline}
            </h2>
          </JourneyReveal>

          <JourneyReveal className="relative mt-12" delay={0.08}>
            <span
              className="pointer-events-none absolute -top-4 -left-2 font-mono text-[4rem] leading-none text-[var(--pj-accent-muted)] select-none sm:-left-4 sm:text-[5.5rem]"
              aria-hidden
            >
              &ldquo;
            </span>

            <div className="space-y-7 border-l-2 border-accent-primary/30 pl-8">
              {WHY_YZU_CONTENT.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-lg leading-[1.85] text-[var(--pj-text-secondary)]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </JourneyReveal>

          <JourneyReveal className="mt-14" delay={0.12}>
            <h3 className="text-sm font-semibold tracking-wide text-[var(--pj-text-muted)] uppercase">
              At YZU
            </h3>
            <StaggerGroup className="mt-6 grid gap-4 sm:grid-cols-2">
              {WHY_YZU_CONTENT.goals.map((goal) => (
                <motion.div
                  key={goal}
                  variants={staggerItem}
                  className="pj-card p-5"
                >
                  <p className="text-sm leading-relaxed text-[var(--pj-text-secondary)]">
                    {goal}
                  </p>
                </motion.div>
              ))}
            </StaggerGroup>
          </JourneyReveal>
        </div>
      </div>
    </section>
  );
}
