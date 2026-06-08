"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { IDENTITY_PILLARS } from "@/src/data/portfolioJourneyData";
import JourneyReveal from "@/src/components/portfolio-journey/motion/JourneyReveal";
import StaggerGroup, {
  staggerItem,
} from "@/src/components/portfolio-journey/motion/StaggerGroup";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/src/lib/utils";

export default function WhyMeSection() {
  const [activeId, setActiveId] = useState(IDENTITY_PILLARS[0].id);
  const reduceMotion = useReducedMotion();
  const active = IDENTITY_PILLARS.find((p) => p.id === activeId) ?? IDENTITY_PILLARS[0];

  return (
    <section
      id="story"
      className="pj-section scroll-mt-14 border-t border-[var(--pj-border)] bg-[var(--pj-bg-subtle)]"
      aria-labelledby="story-heading"
    >
      <div className="pj-container">
        <JourneyReveal>
          <p className="pj-kicker">02 — Narrative</p>
          <h2 id="story-heading" className="pj-headline mt-4 text-balance">
            Why am I different?
          </h2>
          <p className="pj-body mt-6">
            Not a list of credentials—a pattern of how I approach problems,
            recover from failure, and build things that matter.
          </p>
        </JourneyReveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
          <StaggerGroup className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {IDENTITY_PILLARS.map((pillar) => (
              <motion.button
                key={pillar.id}
                type="button"
                variants={staggerItem}
                onClick={() => setActiveId(pillar.id)}
                className={cn(
                  "shrink-0 rounded-xl border px-5 py-4 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pj-accent)]",
                  activeId === pillar.id
                    ? "border-[var(--pj-accent)] bg-[var(--pj-bg-elevated)] shadow-[var(--pj-shadow-md)]"
                    : "border-[var(--pj-border)] bg-transparent hover:border-[var(--pj-border-strong)] hover:bg-[var(--pj-bg-elevated)]",
                )}
                aria-pressed={activeId === pillar.id}
              >
                <span className="pj-kicker text-[0.625rem]">{pillar.label}</span>
                <span
                  className={cn(
                    "mt-2 block text-sm font-medium leading-snug",
                    activeId === pillar.id
                      ? "text-[var(--pj-text)]"
                      : "text-[var(--pj-text-muted)]",
                  )}
                >
                  {pillar.headline}
                </span>
              </motion.button>
            ))}
          </StaggerGroup>

          <JourneyReveal key={active.id} y={16}>
            <article className="pj-card pj-card-featured p-8 sm:p-10">
              {!reduceMotion ? (
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <h3 className="text-xl font-semibold tracking-tight text-[var(--pj-text)]">
                    {active.headline}
                  </h3>
                  <p className="pj-body mt-6">{active.narrative}</p>
                  <p className="mt-8 border-t border-[var(--pj-border)] pt-6 font-mono text-xs tracking-wide text-[var(--pj-accent)]">
                    {active.evidence}
                  </p>
                  {active.id === "competitor" && (
                    <Link
                      href="/projects/cybersecurity-competitor"
                      className="btn-secondary mt-6 inline-flex px-4 py-2 text-xs"
                    >
                      View case study
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  )}
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold tracking-tight text-[var(--pj-text)]">
                    {active.headline}
                  </h3>
                  <p className="pj-body mt-6">{active.narrative}</p>
                  <p className="mt-8 border-t border-[var(--pj-border)] pt-6 font-mono text-xs tracking-wide text-[var(--pj-accent)]">
                    {active.evidence}
                  </p>
                  {active.id === "competitor" && (
                    <Link
                      href="/projects/cybersecurity-competitor"
                      className="btn-secondary mt-6 inline-flex px-4 py-2 text-xs"
                    >
                      View case study
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  )}
                </>
              )}
            </article>
          </JourneyReveal>
        </div>
      </div>
    </section>
  );
}
