"use client";

import { IMPACT_METRICS } from "@/src/data/portfolioJourneyData";
import AnimatedCounter from "@/src/components/home-server/motion/AnimatedCounter";
import JourneyReveal from "@/src/components/portfolio-journey/motion/JourneyReveal";
import StaggerGroup, {
  staggerItem,
} from "@/src/components/portfolio-journey/motion/StaggerGroup";
import { motion } from "framer-motion";

export default function ImpactOverview() {
  return (
    <section
      id="impact"
      className="pj-section scroll-mt-14"
      aria-labelledby="impact-heading"
    >
      <div className="pj-container">
        <JourneyReveal>
          <p className="pj-kicker">03 — Impact</p>
          <h2 id="impact-heading" className="pj-headline mt-4">
            By the numbers
          </h2>
          <p className="pj-body mt-6">
            Measurable evidence of building, researching, competing, and leading—
            not aspirations, but work already done.
          </p>
        </JourneyReveal>

        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {IMPACT_METRICS.map((metric) => (
            <motion.div
              key={metric.id}
              variants={staggerItem}
              className="pj-card group p-6 sm:p-7"
            >
              <p className="pj-metric-value">
                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix ?? ""}
                />
              </p>
              <p className="mt-3 text-sm font-semibold text-[var(--pj-text)]">
                {metric.label}
              </p>
              <p className="pj-body-muted mt-2 text-sm leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
