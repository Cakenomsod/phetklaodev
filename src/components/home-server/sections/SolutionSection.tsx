"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { SOLUTION_SEQUENCE } from "@/src/data/homeServerShowcase";
import ScrollReveal from "@/src/components/home-server/motion/ScrollReveal";

export default function SolutionSection() {
  const listRef = useRef<HTMLDivElement>(null);
  const inView = useInView(listRef, { once: true, margin: "-120px" });
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="section-pad border-t border-border-subtle surface-subtle"
      aria-labelledby="hs-solution-title"
    >
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-kicker">The Solution</p>
          <h2
            id="hs-solution-title"
            className="text-headline mt-4 max-w-2xl text-balance"
          >
            Architecture, revealed layer by layer
          </h2>
          <p className="text-body-muted mt-5 max-w-xl">
            Each component enters the system in sequence—showing how data flows
            from apps through the registry, edge, and local services.
          </p>
        </ScrollReveal>

        <div ref={listRef} className="relative mx-auto mt-20 max-w-lg">
          <div
            className="absolute top-6 bottom-6 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-accent-primary/25 to-transparent"
            aria-hidden
          />

          <ol className="flex flex-col gap-2">
            {SOLUTION_SEQUENCE.map((step, index) => (
              <motion.li
                key={step.id}
                className="relative"
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                animate={
                  inView || reduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 24 }
                }
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : index * 0.18,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                {index < SOLUTION_SEQUENCE.length - 1 && (
                  <span
                    className="absolute -bottom-3 left-1/2 z-10 -translate-x-1/2 font-mono text-accent-primary/50"
                    aria-hidden
                  >
                    ↓
                  </span>
                )}

                <article className="surface-card px-6 py-5 hover:border-accent-primary/20 hover:shadow-[var(--shadow-glow)]">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-semibold text-text-primary">
                      {step.title}
                    </h3>
                    <span className="shrink-0 font-mono text-[10px] tracking-wider text-accent-primary/80 uppercase">
                      {step.subtitle}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {step.description}
                  </p>
                </article>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
