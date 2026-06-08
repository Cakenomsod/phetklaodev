"use client";

import { Cpu, HardDrive, Lock, Shield } from "lucide-react";
import { RELIABILITY_ITEMS } from "@/src/data/financeTrackerShowcase";
import ScrollReveal from "@/src/components/finance-tracker/motion/ScrollReveal";

const ICONS = {
  shield: Shield,
  lock: Lock,
  "hard-drive": HardDrive,
  cpu: Cpu,
} as const;

export default function ReliabilitySection() {
  return (
    <section
      className="section-pad relative border-t border-border-subtle bg-bg-secondary/30"
      aria-labelledby="ft-reliability-title"
    >
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-kicker">Reliability & Privacy</p>
          <h2
            id="ft-reliability-title"
            className="text-headline mt-4 max-w-3xl text-balance"
          >
            Engineering tradeoffs, stated honestly
          </h2>
          <p className="text-body mt-6 max-w-2xl">
            Security boundaries, storage choices, and fallback paths were
            deliberate—not afterthoughts.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {RELIABILITY_ITEMS.map((item, index) => {
            const Icon = ICONS[item.icon];

            return (
              <ScrollReveal key={item.id} delay={index * 0.06}>
                <article className="flex h-full flex-col rounded-2xl border border-border-default bg-bg-secondary/50 p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-default bg-bg-tertiary">
                      <Icon className="h-4 w-4 text-accent-primary" aria-hidden />
                    </div>
                    <h3 className="text-base font-semibold text-text-primary">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-5 flex-1 text-sm leading-relaxed text-text-muted">
                    {item.summary}
                  </p>

                  <div className="mt-6 rounded-xl border border-border-subtle bg-bg-tertiary/50 px-4 py-3">
                    <p className="font-mono text-[9px] tracking-[0.14em] text-text-muted uppercase">
                      Tradeoff
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-text-muted">
                      {item.tradeoff}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
