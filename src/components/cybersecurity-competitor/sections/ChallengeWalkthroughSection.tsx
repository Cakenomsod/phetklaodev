"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Lightbulb,
  Search,
  Wrench,
} from "lucide-react";
import {
  CHALLENGE_WALKTHROUGH,
  WALKTHROUGH_STEPS,
  type WalkthroughPhase,
} from "@/src/data/cybersecurityCompetitorShowcase";
import ScrollReveal from "@/src/components/cybersecurity-competitor/motion/ScrollReveal";
import { cn } from "@/src/lib/utils";

const PHASE_CONFIG: Record<
  WalkthroughPhase,
  { label: string; icon: typeof Search; color: string }
> = {
  problem: {
    label: "Problem",
    icon: AlertCircle,
    color: "text-amber-400 border-amber-500/20 bg-amber-500/5",
  },
  investigation: {
    label: "Investigation",
    icon: Search,
    color: "text-blue-400 border-blue-500/20 bg-blue-500/5",
  },
  solution: {
    label: "Solution",
    icon: Wrench,
    color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
  },
  lessons: {
    label: "Lessons Learned",
    icon: Lightbulb,
    color: "text-violet-400 border-violet-500/20 bg-violet-500/5",
  },
};

const DOMAIN_LABELS = {
  web: "Web",
  crypto: "Crypto",
  network: "Network",
  methodology: "CTF",
} as const;

const PHASES: WalkthroughPhase[] = [
  "problem",
  "investigation",
  "solution",
  "lessons",
];

export default function ChallengeWalkthroughSection() {
  const [activeStepId, setActiveStepId] = useState(WALKTHROUGH_STEPS[0].id);
  const reduceMotion = useReducedMotion();

  const activeStep =
    WALKTHROUGH_STEPS.find((s) => s.id === activeStepId) ?? WALKTHROUGH_STEPS[0];
  const phaseConfig = PHASE_CONFIG[activeStep.phase];
  const PhaseIcon = phaseConfig.icon;

  const stepsInPhase = WALKTHROUGH_STEPS.filter(
    (s) => s.phase === activeStep.phase,
  );
  const stepIndexInPhase = stepsInPhase.findIndex((s) => s.id === activeStep.id);

  return (
    <section
      className="section-pad border-t border-border-subtle bg-bg-secondary/20"
      aria-labelledby="cyber-challenge-title"
    >
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-kicker">Technical Walkthrough</p>
          <h2
            id="cyber-challenge-title"
            className="text-headline mt-4 max-w-3xl text-balance"
          >
            {CHALLENGE_WALKTHROUGH.title}
          </h2>
          <p className="text-body mt-6 max-w-2xl">
            {CHALLENGE_WALKTHROUGH.subtitle}. {CHALLENGE_WALKTHROUGH.context}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="mt-10">
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Walkthrough phases"
          >
            {PHASES.map((phase) => {
              const config = PHASE_CONFIG[phase];
              const Icon = config.icon;
              const isActive = activeStep.phase === phase;
              const count = WALKTHROUGH_STEPS.filter((s) => s.phase === phase).length;

              return (
                <button
                  key={phase}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    const first = WALKTHROUGH_STEPS.find((s) => s.phase === phase);
                    if (first) setActiveStepId(first.id);
                  }}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors",
                    isActive
                      ? config.color
                      : "border-border-default text-text-muted hover:border-border-strong",
                  )}
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden />
                  {config.label}
                  <span className="font-mono text-[10px] opacity-60">{count}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[280px_1fr]">
          <ScrollReveal delay={0.1}>
            <nav aria-label="Walkthrough steps">
              <ol className="space-y-1">
                {WALKTHROUGH_STEPS.map((step, i) => {
                  const isActive = activeStepId === step.id;
                  const isPast =
                    WALKTHROUGH_STEPS.findIndex((s) => s.id === activeStepId) > i;

                  return (
                    <li key={step.id}>
                      <button
                        type="button"
                        onClick={() => setActiveStepId(step.id)}
                        aria-current={isActive ? "step" : undefined}
                        className={cn(
                          "flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                          isActive
                            ? "bg-bg-secondary"
                            : "hover:bg-bg-secondary/50",
                        )}
                      >
                        <span
                          className={cn(
                            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[10px]",
                            isActive
                              ? "bg-accent-primary/20 text-accent-primary"
                              : isPast
                                ? "bg-emerald-500/10 text-emerald-500"
                                : "bg-bg-tertiary text-text-muted",
                          )}
                        >
                          {isPast ? (
                            <CheckCircle2 className="h-3 w-3" aria-hidden />
                          ) : (
                            i + 1
                          )}
                        </span>
                        <span
                          className={cn(
                            "text-xs leading-snug",
                            isActive
                              ? "font-medium text-text-primary"
                              : "text-text-muted",
                          )}
                        >
                          {step.title}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </nav>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className={cn(
                  "rounded-2xl border p-6 sm:p-8",
                  phaseConfig.color,
                )}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <PhaseIcon className="h-4 w-4" aria-hidden />
                    <span className="font-mono text-[10px] tracking-wider uppercase">
                      {phaseConfig.label}
                      {stepsInPhase.length > 1 &&
                        ` · Step ${stepIndexInPhase + 1} of ${stepsInPhase.length}`}
                    </span>
                  </div>
                  <ul className="flex flex-wrap gap-1" aria-label="Domains involved">
                    {activeStep.domains.map((d) => (
                      <li key={d}>
                        <span className="rounded border border-border-default/50 bg-bg-secondary/50 px-2 py-0.5 font-mono text-[9px] text-text-muted uppercase">
                          {DOMAIN_LABELS[d]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-text-primary">
                  {activeStep.title}
                </h3>
                <p className="text-body mt-3 text-sm leading-relaxed">
                  {activeStep.body}
                </p>

                {activeStep.detail && (
                  <p className="mt-4 rounded-lg border border-border-default/50 bg-bg-secondary/40 px-4 py-3 font-mono text-xs text-text-muted">
                    {activeStep.detail}
                  </p>
                )}

                {activeStep.code && (
                  <pre className="mt-4 overflow-x-auto rounded-lg border border-border-default bg-bg-tertiary/80 p-4 font-mono text-[11px] leading-relaxed text-text-primary">
                    {activeStep.code}
                  </pre>
                )}

                {activeStep.insight && (
                  <div className="mt-4 flex items-start gap-2 rounded-lg border border-accent-primary/20 bg-accent-primary/5 px-4 py-3">
                    <Lightbulb
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-primary"
                      aria-hidden
                    />
                    <p className="text-xs leading-relaxed text-text-primary">
                      {activeStep.insight}
                    </p>
                  </div>
                )}

                {activeStep.phase === "solution" && (
                  <div className="mt-5 flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden />
                    <span className="font-mono text-sm text-emerald-400">
                      {CHALLENGE_WALKTHROUGH.flag}
                    </span>
                  </div>
                )}

                <div className="mt-6 flex justify-between gap-4">
                  <button
                    type="button"
                    disabled={
                      WALKTHROUGH_STEPS.findIndex((s) => s.id === activeStepId) === 0
                    }
                    onClick={() => {
                      const idx = WALKTHROUGH_STEPS.findIndex(
                        (s) => s.id === activeStepId,
                      );
                      if (idx > 0) setActiveStepId(WALKTHROUGH_STEPS[idx - 1].id);
                    }}
                    className="text-xs text-text-muted transition-colors hover:text-text-primary disabled:opacity-30"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    disabled={
                      WALKTHROUGH_STEPS.findIndex((s) => s.id === activeStepId) ===
                      WALKTHROUGH_STEPS.length - 1
                    }
                    onClick={() => {
                      const idx = WALKTHROUGH_STEPS.findIndex(
                        (s) => s.id === activeStepId,
                      );
                      if (idx < WALKTHROUGH_STEPS.length - 1) {
                        setActiveStepId(WALKTHROUGH_STEPS[idx + 1].id);
                      }
                    }}
                    className="inline-flex items-center gap-1 text-xs font-medium text-accent-primary transition-colors hover:text-accent-primary/80 disabled:opacity-30"
                  >
                    Next step
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
