"use client";

import { useState } from "react";
import { ACHIEVEMENT_TIMELINE } from "@/src/data/portfolioJourneyData";
import JourneyReveal from "@/src/components/portfolio-journey/motion/JourneyReveal";
import StaggerGroup, {
  staggerItem,
} from "@/src/components/portfolio-journey/motion/StaggerGroup";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/src/lib/utils";
import { Trophy, Star } from "lucide-react";

export default function AchievementsTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>(
    ACHIEVEMENT_TIMELINE.find((e) => e.featured)?.id ?? null,
  );
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="achievements"
      className="pj-section scroll-mt-14"
      aria-labelledby="achievements-heading"
    >
      <div className="pj-container">
        <JourneyReveal>
          <p className="pj-kicker">07 — Achievements</p>
          <h2 id="achievements-heading" className="pj-headline mt-4">
            Progression, not just awards
          </h2>
          <p className="pj-body mt-6">
            Each milestone represents a year of deliberate practice—from failing
            POSN Camp 1 to ranking nationally in programming and cybersecurity.
          </p>
        </JourneyReveal>

        <StaggerGroup className="mt-16 space-y-3">
          {ACHIEVEMENT_TIMELINE.map((event) => {
            const isExpanded = expandedId === event.id;

            return (
              <motion.div key={event.id} variants={staggerItem}>
                <button
                  type="button"
                  onClick={() =>
                    setExpandedId(isExpanded ? null : event.id)
                  }
                  aria-expanded={isExpanded}
                  className={cn(
                    "pj-card w-full p-5 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pj-accent)] sm:p-6",
                    isExpanded && "pj-card-featured ring-1 ring-[var(--pj-accent-soft)]",
                    event.featured && !isExpanded && "border-[var(--pj-border-strong)]",
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                        event.featured
                          ? "bg-[var(--pj-accent-soft)] text-[var(--pj-accent)]"
                          : "bg-[var(--pj-bg-subtle)] text-[var(--pj-text-muted)]",
                      )}
                    >
                      {event.featured ? (
                        <Trophy className="h-4 w-4" aria-hidden />
                      ) : (
                        <Star className="h-4 w-4" aria-hidden />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-base font-semibold text-[var(--pj-text)]">
                          {event.title}
                        </h3>
                        <time className="shrink-0 font-mono text-xs text-[var(--pj-text-muted)]">
                          {event.year}
                          {event.month ? ` · ${event.month}` : ""}
                        </time>
                      </div>
                      <p className="mt-0.5 text-sm text-[var(--pj-accent)]">
                        {event.subtitle}
                      </p>

                      {!reduceMotion ? (
                        <motion.div
                          initial={false}
                          animate={{
                            height: isExpanded ? "auto" : 0,
                            opacity: isExpanded ? 1 : 0,
                          }}
                          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pj-body-muted pt-3 text-sm leading-relaxed">
                            {event.description}
                          </p>
                        </motion.div>
                      ) : (
                        isExpanded && (
                          <p className="pj-body-muted pt-3 text-sm leading-relaxed">
                            {event.description}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
