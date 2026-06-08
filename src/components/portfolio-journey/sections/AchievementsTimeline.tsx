"use client";

import Link from "next/link";
import { ACHIEVEMENT_TIMELINE } from "@/src/data/portfolioJourneyData";
import JourneyReveal from "@/src/components/portfolio-journey/motion/JourneyReveal";
import StaggerGroup, {
  staggerItem,
} from "@/src/components/portfolio-journey/motion/StaggerGroup";
import { motion } from "framer-motion";
import { ArrowRight, Trophy } from "lucide-react";

export default function AchievementsTimeline() {
  return (
    <section
      id="achievements"
      className="pj-section scroll-mt-14 border-t border-[var(--pj-border)]"
      aria-labelledby="achievements-heading"
    >
      <div className="pj-container">
        <JourneyReveal>
          <p className="pj-kicker">02 — Results</p>
          <h2 id="achievements-heading" className="pj-headline mt-4">
            National programming & cybersecurity
          </h2>
          <p className="pj-body mt-6 max-w-2xl">
            Three national-level results from 2025—programming, cybersecurity,
            and algorithmic competition.
          </p>
        </JourneyReveal>

        <StaggerGroup className="mt-12 grid gap-4 lg:grid-cols-3">
          {ACHIEVEMENT_TIMELINE.map((event) => (
            <motion.article
              key={event.id}
              variants={staggerItem}
              className="pj-card pj-card-featured p-6 sm:p-7"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--pj-accent-soft)] text-[var(--pj-accent)]">
                <Trophy className="h-4 w-4" aria-hidden />
              </div>
              <time className="mt-5 block font-mono text-xs font-medium text-[var(--pj-accent)]">
                {event.year}
                {event.month ? ` · ${event.month}` : ""}
              </time>
              <h3 className="mt-2 text-base font-semibold text-[var(--pj-text)]">
                {event.title}
              </h3>
              <p className="mt-0.5 text-sm text-[var(--pj-accent)]">
                {event.subtitle}
              </p>
              <p className="pj-body-muted mt-3 text-sm leading-relaxed">
                {event.description}
              </p>
            </motion.article>
          ))}
        </StaggerGroup>

        <JourneyReveal className="mt-8">
          <Link
            href="/projects/cybersecurity-competitor"
            className="btn-secondary inline-flex px-4 py-2 text-xs"
          >
            Cybersecurity case study
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </JourneyReveal>
      </div>
    </section>
  );
}
