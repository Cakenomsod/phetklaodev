"use client";

import { LEADERSHIP_TIMELINE } from "@/src/data/portfolioJourneyData";
import JourneyReveal from "@/src/components/portfolio-journey/motion/JourneyReveal";
import StaggerGroup, {
  staggerItem,
} from "@/src/components/portfolio-journey/motion/StaggerGroup";
import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";

const categoryLabels = {
  leadership: "Leadership",
  growth: "Growth",
  milestone: "Milestone",
  achievement: "Achievement",
} as const;

export default function LeadershipTimeline() {
  return (
    <section
      id="leadership"
      className="pj-section scroll-mt-14 border-t border-[var(--pj-border)] bg-[var(--pj-bg-subtle)]"
      aria-labelledby="leadership-heading"
    >
      <div className="pj-container">
        <JourneyReveal>
          <p className="pj-kicker">06 — Leadership</p>
          <h2 id="leadership-heading" className="pj-headline mt-4">
            Growth over time
          </h2>
          <p className="pj-body mt-6">
            Leadership isn&apos;t a title—it&apos;s a trajectory. From media
            production to student council, from volunteer camps to clinical
            exposure, each role built a different capability.
          </p>
        </JourneyReveal>

        <div className="relative mt-16 pl-8 sm:pl-12">
          <div className="pj-timeline-line" aria-hidden />

          <StaggerGroup className="space-y-10">
            {LEADERSHIP_TIMELINE.map((event) => (
              <motion.article
                key={event.id}
                variants={staggerItem}
                className="relative"
              >
                <div
                  className={cn(
                    "absolute -left-8 top-1.5 h-3 w-3 rounded-full border-2 border-[var(--pj-bg-subtle)] sm:-left-12",
                    event.featured
                      ? "bg-[var(--pj-accent)]"
                      : "bg-[var(--pj-bg-elevated)] ring-2 ring-[var(--pj-accent-muted)]",
                  )}
                  aria-hidden
                />

                <div
                  className={cn(
                    "pj-card p-6 sm:p-7",
                    event.featured && "pj-card-featured ring-1 ring-[var(--pj-accent-soft)]",
                  )}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <time className="font-mono text-xs font-medium text-[var(--pj-accent)]">
                      {event.year}
                      {event.month ? ` · ${event.month}` : ""}
                    </time>
                    <span className="rounded-full bg-[var(--pj-bg-subtle)] px-2.5 py-0.5 text-[0.625rem] font-semibold tracking-wider text-[var(--pj-text-muted)] uppercase">
                      {categoryLabels[event.category]}
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-[var(--pj-text)]">
                    {event.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[var(--pj-text-muted)]">
                    {event.subtitle}
                  </p>
                  <p className="pj-body-muted mt-3 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
