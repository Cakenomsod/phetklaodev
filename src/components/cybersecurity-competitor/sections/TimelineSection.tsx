"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  TIMELINE_CATEGORY_LABELS,
  TIMELINE_EVENTS,
  type TimelineCategory,
} from "@/src/data/cybersecurityCompetitorShowcase";
import ScrollReveal from "@/src/components/cybersecurity-competitor/motion/ScrollReveal";
import { cn } from "@/src/lib/utils";

const CATEGORY_STYLES: Record<
  TimelineCategory,
  { dot: string; badge: string; line: string }
> = {
  training: {
    dot: "bg-blue-500/80 border-blue-500/30",
    badge: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    line: "bg-blue-500/30",
  },
  bootcamp: {
    dot: "bg-violet-500/80 border-violet-500/30",
    badge: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    line: "bg-violet-500/30",
  },
  competition: {
    dot: "bg-amber-500/80 border-amber-500/30",
    badge: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    line: "bg-amber-500/30",
  },
};

const FILTERS: Array<{ id: TimelineCategory | "all"; label: string }> = [
  { id: "all", label: "All" },
  { id: "training", label: "Training" },
  { id: "bootcamp", label: "Bootcamps" },
  { id: "competition", label: "Competitions" },
];

export default function TimelineSection() {
  const [activeId, setActiveId] = useState(TIMELINE_EVENTS[3].id);
  const [filter, setFilter] = useState<TimelineCategory | "all">("all");
  const reduceMotion = useReducedMotion();

  const filtered =
    filter === "all"
      ? TIMELINE_EVENTS
      : TIMELINE_EVENTS.filter((e) => e.category === filter);

  const active = TIMELINE_EVENTS.find((e) => e.id === activeId) ?? TIMELINE_EVENTS[0];
  const styles = CATEGORY_STYLES[active.category];

  return (
    <section
      className="section-pad border-t border-border-subtle bg-bg-secondary/20"
      aria-labelledby="cyber-timeline-title"
    >
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-kicker">Competition Timeline</p>
          <h2
            id="cyber-timeline-title"
            className="text-headline mt-4 max-w-3xl text-balance"
          >
            Bootcamps, training, and national events
          </h2>
          <p className="text-body mt-6 max-w-2xl">
            Select a milestone to see how each stage built the skills tested at
            Thailand Cyber Top Talent — not a list of awards, but a progression.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="mt-8">
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter timeline by category"
          >
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "rounded-full border px-4 py-1.5 font-mono text-[10px] tracking-wider uppercase transition-colors",
                  filter === f.id
                    ? "border-accent-primary/40 bg-accent-primary/10 text-accent-primary"
                    : "border-border-default text-text-muted hover:border-border-strong hover:text-text-primary",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_340px] lg:gap-16">
          <ScrollReveal delay={0.1}>
            <div className="relative">
              <div
                className="absolute top-0 bottom-0 left-[11px] w-px bg-border-default"
                aria-hidden
              />

              <ol className="space-y-1">
                {filtered.map((event) => {
                  const isActive = activeId === event.id;
                  const eventStyles = CATEGORY_STYLES[event.category];

                  return (
                    <li key={event.id}>
                      <button
                        type="button"
                        onClick={() => setActiveId(event.id)}
                        aria-current={isActive ? "step" : undefined}
                        className={cn(
                          "group relative flex w-full items-start gap-5 rounded-xl py-4 pl-0 pr-4 text-left transition-colors",
                          isActive
                            ? "bg-bg-secondary/80"
                            : "hover:bg-bg-secondary/40",
                        )}
                      >
                        <div
                          className={cn(
                            "relative z-10 mt-1.5 h-[22px] w-[22px] shrink-0 rounded-full border-2 transition-transform",
                            eventStyles.dot,
                            isActive && "scale-110 ring-2 ring-accent-primary/20",
                          )}
                          aria-hidden
                        />

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <h3
                              className={cn(
                                "text-sm font-semibold transition-colors",
                                isActive
                                  ? "text-text-primary"
                                  : "text-text-muted group-hover:text-text-primary",
                              )}
                            >
                              {event.title}
                            </h3>
                            <time className="shrink-0 font-mono text-[10px] text-text-muted">
                              {event.year}
                              {event.month ? ` · ${event.month}` : ""}
                            </time>
                          </div>
                          <p className="mt-0.5 text-xs text-accent-primary/80">
                            {event.subtitle}
                          </p>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="sticky top-24 rounded-2xl border border-border-default bg-bg-secondary/60 p-6 backdrop-blur-sm"
              >
                <span
                  className={cn(
                    "inline-flex rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-wider uppercase",
                    styles.badge,
                  )}
                >
                  {TIMELINE_CATEGORY_LABELS[active.category]}
                </span>

                <h3 className="mt-4 text-base font-semibold text-text-primary">
                  {active.title}
                </h3>
                <p className="mt-1 text-sm text-accent-primary/80">
                  {active.subtitle}
                </p>

                <p className="text-body mt-4 text-sm leading-relaxed">
                  {active.description}
                </p>

                {active.outcome && (
                  <div className="mt-5 rounded-lg border border-border-default bg-bg-tertiary/50 px-4 py-3">
                    <p className="font-mono text-[10px] tracking-wider text-text-muted uppercase">
                      Outcome
                    </p>
                    <p className="mt-1 text-sm font-medium text-text-primary">
                      {active.outcome}
                    </p>
                  </div>
                )}

                {active.skills && active.skills.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Skills practiced">
                    {active.skills.map((skill) => (
                      <li key={skill}>
                        <span className="rounded-md border border-border-default bg-bg-tertiary/80 px-2 py-0.5 font-mono text-[10px] text-text-muted">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
