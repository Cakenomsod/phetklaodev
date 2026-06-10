"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CHALLENGE_STEPS } from "@/src/data/homeServerShowcase";
import ScrollReveal from "@/src/components/home-server/motion/ScrollReveal";

export default function ChallengeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineScale = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="section-pad relative border-t border-border-subtle"
      aria-labelledby="hs-challenge-title"
    >
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-kicker">The Challenge</p>
          <h2
            id="hs-challenge-title"
            className="text-headline mt-4 max-w-3xl text-balance"
          >
            Remote access without compromise
          </h2>
        </ScrollReveal>

        <div className="relative mt-20">
          {!reduceMotion && (
            <motion.div
              className="absolute top-0 left-[11px] hidden h-full w-px origin-top bg-gradient-to-b from-accent-primary/60 via-accent-primary/20 to-transparent sm:block"
              style={{ scaleY: lineScale }}
              aria-hidden
            />
          )}

          <ol className="flex flex-col gap-24 sm:gap-32">
            {CHALLENGE_STEPS.map((step, index) => (
              <li key={step.id} className="relative sm:pl-16">
                {!reduceMotion && (
                  <span
                    className="absolute top-2 left-0 hidden h-[22px] w-[22px] items-center justify-center rounded-full border border-accent-primary/40 bg-bg-primary sm:flex"
                    aria-hidden
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
                  </span>
                )}

                <ScrollReveal delay={index * 0.06}>
                  <p className="font-mono text-[10px] tracking-[0.18em] text-text-muted uppercase">
                    {step.kicker}
                  </p>
                  <h3 className="mt-4 max-w-3xl text-balance text-2xl leading-snug font-medium tracking-tight text-text-primary sm:text-3xl">
                    {step.headline}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
                    {step.body}
                  </p>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
