"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { JOURNEY_NARRATIVE } from "@/src/data/cybersecurityCompetitorShowcase";
import ScrollReveal from "@/src/components/cybersecurity-competitor/motion/ScrollReveal";

export default function JourneySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="section-pad border-t border-border-subtle"
      aria-labelledby="cyber-journey-title"
    >
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-kicker">{JOURNEY_NARRATIVE.kicker}</p>
          <h2
            id="cyber-journey-title"
            className="text-headline mt-4 max-w-3xl text-balance"
          >
            {JOURNEY_NARRATIVE.headline}
          </h2>
          <p className="text-body mt-6 max-w-2xl">{JOURNEY_NARRATIVE.body}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-16">
          <div className="relative overflow-x-auto pb-4">
            <ol className="flex min-w-[640px] items-start gap-0">
              {JOURNEY_NARRATIVE.turningPoints.map((point, i) => (
                <li key={point.id} className="relative flex flex-1 flex-col items-center">
                  {i > 0 && (
                    <div
                      className="absolute top-5 right-1/2 h-px w-full bg-border-default"
                      aria-hidden
                    />
                  )}

                  <motion.div
                    className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-accent-primary/30 bg-bg-secondary font-mono text-[10px] font-semibold text-accent-primary"
                    initial={reduceMotion ? false : { scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.4 }}
                  >
                    {point.label}
                  </motion.div>

                  <div className="mt-4 px-3 text-center">
                    <p className="text-xs font-medium text-text-primary">
                      {point.event}
                    </p>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-text-muted">
                      {point.meaning}
                    </p>
                  </div>

                  {i < JOURNEY_NARRATIVE.turningPoints.length - 1 && (
                    <ArrowRight
                      className="absolute top-5 -right-2 z-20 h-3 w-3 text-text-muted/40"
                      aria-hidden
                    />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
