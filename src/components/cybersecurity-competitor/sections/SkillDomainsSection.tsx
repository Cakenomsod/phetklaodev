"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Binary, Globe, Network, Search } from "lucide-react";
import {
  SKILL_DOMAINS,
  type SkillDomain,
} from "@/src/data/cybersecurityCompetitorShowcase";
import ScrollReveal from "@/src/components/cybersecurity-competitor/motion/ScrollReveal";
import { cn } from "@/src/lib/utils";

const DOMAIN_ICONS: Record<SkillDomain["id"], typeof Globe> = {
  web: Globe,
  crypto: Binary,
  network: Network,
  methodology: Search,
};

export default function SkillDomainsSection() {
  const [activeId, setActiveId] = useState<SkillDomain["id"]>("web");
  const reduceMotion = useReducedMotion();
  const active = SKILL_DOMAINS.find((d) => d.id === activeId) ?? SKILL_DOMAINS[0];

  return (
    <section
      className="section-pad border-t border-border-subtle"
      aria-labelledby="cyber-skills-title"
    >
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-kicker">How I Solve</p>
          <h2
            id="cyber-skills-title"
            className="text-headline mt-4 max-w-3xl text-balance"
          >
            Four domains, one investigation mindset
          </h2>
          <p className="text-body mt-6 max-w-2xl">
            Competition challenges span web, crypto, and network — but the
            methodology is the same: observe, hypothesize, test the cheapest
            assumption first.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[220px_1fr]">
          <ScrollReveal delay={0.08}>
            <div
              className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
              role="tablist"
              aria-label="Security domains"
            >
              {SKILL_DOMAINS.map((domain) => {
                const Icon = DOMAIN_ICONS[domain.id];
                const isActive = activeId === domain.id;

                return (
                  <button
                    key={domain.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveId(domain.id)}
                    className={cn(
                      "flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-300",
                      isActive
                        ? "border-accent-primary/40 bg-bg-secondary shadow-sm"
                        : "border-border-default hover:border-border-strong hover:bg-bg-secondary/50",
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-4 w-4 shrink-0",
                        isActive ? "text-accent-primary" : "text-text-muted",
                      )}
                      aria-hidden
                    />
                    <span
                      className={cn(
                        "text-sm font-medium",
                        isActive ? "text-text-primary" : "text-text-muted",
                      )}
                    >
                      {domain.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <AnimatePresence mode="wait">
              <motion.article
                key={active.id}
                role="tabpanel"
                initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl border border-border-default bg-bg-secondary/40 p-6 sm:p-8"
              >
                <h3 className="text-lg font-semibold text-text-primary">
                  {active.headline}
                </h3>
                <p className="text-body mt-4 text-sm leading-relaxed">
                  {active.approach}
                </p>

                <div className="mt-6 rounded-xl border border-dashed border-border-default bg-bg-tertiary/30 p-5">
                  <p className="font-mono text-[10px] tracking-wider text-text-muted uppercase">
                    Typical challenge pattern
                  </p>
                  <p className="mt-2 text-sm text-text-primary">{active.example}</p>
                </div>

                <div className="mt-6">
                  <p className="font-mono text-[10px] tracking-wider text-text-muted uppercase">
                    Tools & techniques
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {active.tools.map((tool) => (
                      <li key={tool}>
                        <span className="rounded-full border border-border-default bg-bg-tertiary/80 px-3 py-1 font-mono text-[10px] text-text-muted">
                          {tool}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
