"use client";

import { SYSTEM_IMPACT } from "@/src/data/homeServerShowcase";
import AnimatedCounter from "@/src/components/home-server/motion/AnimatedCounter";
import ScrollReveal from "@/src/components/home-server/motion/ScrollReveal";

const OUTCOMES = [
  "Zero exposed ports on the home router",
  "AI-powered photo search via Immich CLIP",
  "Secure remote access from any network",
  "Automated tunnel URL updates on boot",
  "Event-driven Firestore synchronization",
] as const;

export default function SystemImpactSection() {
  return (
    <section
      className="section-pad border-t border-border-subtle surface-subtle"
      aria-labelledby="hs-impact-title"
    >
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-kicker">System Impact</p>
          <h2
            id="hs-impact-title"
            className="text-headline mt-4 max-w-2xl text-balance"
          >
            Measurable outcomes
          </h2>
        </ScrollReveal>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border-default bg-bg-tertiary/50 sm:grid-cols-2 lg:grid-cols-4">
          {SYSTEM_IMPACT.map((metric, index) => (
            <ScrollReveal key={metric.id} delay={index * 0.05} className="h-full">
              <li className="flex h-full flex-col bg-bg-secondary/80 px-6 py-8">
                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix}
                  className="text-4xl font-bold tracking-tight text-accent-primary"
                />
                <p className="mt-3 text-sm font-medium text-text-primary">
                  {metric.label}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                  {metric.description}
                </p>
              </li>
            </ScrollReveal>
          ))}
        </ul>

        <ScrollReveal className="mt-20" delay={0.08}>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {OUTCOMES.map((outcome) => (
              <li
                key={outcome}
                className="surface-card flex items-start gap-3 px-5 py-4"
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary shadow-[0_0_8px_var(--theme-accent-glow)]"
                  aria-hidden
                />
                <span className="text-sm leading-relaxed text-text-primary">
                  {outcome}
                </span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
