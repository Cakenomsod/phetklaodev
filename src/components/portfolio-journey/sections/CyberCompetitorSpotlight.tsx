"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Binary,
  Globe,
  Network,
  Search,
  Shield,
} from "lucide-react";
import AnimatedCounter from "@/src/components/home-server/motion/AnimatedCounter";
import {
  RESULTS_METRICS,
  TIMELINE_EVENTS,
  WALKTHROUGH_STEPS,
} from "@/src/data/cybersecurityCompetitorShowcase";
import JourneyReveal from "@/src/components/portfolio-journey/motion/JourneyReveal";
import StaggerGroup, {
  staggerItem,
} from "@/src/components/portfolio-journey/motion/StaggerGroup";

const WALKTHROUGH_PREVIEW = WALKTHROUGH_STEPS.filter(
  (s) => s.phase === "investigation",
).slice(0, 2);

const DOMAIN_ICONS = [Globe, Binary, Network, Search];

export default function CyberCompetitorSpotlight() {
  const [activeTimelineId, setActiveTimelineId] = useState("cyber-talent");

  const activeEvent =
    TIMELINE_EVENTS.find((e) => e.id === activeTimelineId) ??
    TIMELINE_EVENTS[3];

  return (
    <section
      className="pj-section border-t border-[var(--pj-border)]"
      aria-labelledby="cyber-competitor-heading"
    >
      <div className="pj-container">
        <JourneyReveal>
          <p className="pj-kicker">Competitor Identity</p>
          <h2 id="cyber-competitor-heading" className="pj-headline mt-4 text-balance">
            Thailand Cyber Top Talent 2025
          </h2>
          <p className="pj-body mt-6 max-w-2xl">
            Evidence for the Competitor pillar — not trophy cards, but how I
            investigate unfamiliar problems under competition pressure.
          </p>
        </JourneyReveal>

        <JourneyReveal className="mt-12" delay={0.1}>
          <div className="pj-inset-dark p-6 sm:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-kicker text-[0.625rem] text-text-muted">
                Competition timeline
              </p>
              <Link
                href="/projects/cybersecurity-competitor"
                className="btn-secondary px-4 py-2 text-xs"
              >
                Full case study
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>

            <div className="relative overflow-x-auto pb-2">
              <div
                className="flex min-w-[520px] items-center gap-0"
                role="tablist"
                aria-label="Competition milestones"
              >
                {TIMELINE_EVENTS.map((event, i) => {
                  const isActive = activeTimelineId === event.id;

                  return (
                    <button
                      key={event.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveTimelineId(event.id)}
                      className="group relative flex flex-1 flex-col items-center px-2"
                    >
                      {i > 0 && (
                        <div
                          className="absolute top-3 right-1/2 h-px w-full bg-[var(--pj-border)]"
                          aria-hidden
                        />
                      )}
                      <div
                        className={`relative z-10 h-6 w-6 rounded-full border-2 transition-transform ${
                          isActive
                            ? "scale-110 border-[var(--pj-accent)] bg-[var(--pj-accent-soft)]"
                            : "border-[var(--pj-border)] bg-[var(--pj-bg-subtle)] group-hover:border-[var(--pj-border-strong)]"
                        }`}
                      />
                      <span
                        className={`mt-2 text-center font-mono text-[9px] leading-tight ${
                          isActive
                            ? "text-[var(--pj-accent)]"
                            : "text-[var(--pj-text-muted)]"
                        }`}
                      >
                        {event.month ?? event.year}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeEvent.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="mt-6 rounded-xl border border-[var(--pj-border)] bg-[var(--pj-bg-subtle)] p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-semibold text-[var(--pj-text)]">
                    {activeEvent.title}
                  </h3>
                  <time className="font-mono text-[10px] text-[var(--pj-text-muted)]">
                    {activeEvent.year}
                  </time>
                </div>
                <p className="mt-1 text-xs text-[var(--pj-accent)]">
                  {activeEvent.subtitle}
                </p>
                <p className="pj-body-muted mt-3 text-sm leading-relaxed">
                  {activeEvent.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </JourneyReveal>

        <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2">
          {WALKTHROUGH_PREVIEW.map((step) => (
            <motion.div
              key={step.id}
              variants={staggerItem}
              className="pj-card p-6"
            >
              <p className="font-mono text-[10px] tracking-wider text-[var(--pj-accent)] uppercase">
                Investigation
              </p>
              <h3 className="mt-3 text-sm font-semibold text-[var(--pj-text)]">
                {step.title}
              </h3>
              <p className="pj-body-muted mt-2 text-sm">{step.body}</p>
              {step.insight && (
                <p className="mt-3 border-t border-[var(--pj-border)] pt-3 text-xs text-[var(--pj-text-muted)]">
                  {step.insight}
                </p>
              )}
            </motion.div>
          ))}
        </StaggerGroup>

        <StaggerGroup className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {DOMAIN_ICONS.map((Icon, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="flex flex-col items-center gap-2 rounded-xl border border-[var(--pj-border)] bg-[var(--pj-bg-subtle)] p-4 text-center"
            >
              <Icon className="h-4 w-4 text-[var(--pj-accent)]" aria-hidden />
              <span className="text-[10px] font-medium text-[var(--pj-text-secondary)]">
                {["Web Security", "Cryptography", "Network Analysis", "CTF Method"][
                  i
                ]}
              </span>
            </motion.div>
          ))}
        </StaggerGroup>

        <StaggerGroup className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {RESULTS_METRICS.map((metric) => (
            <motion.div
              key={metric.id}
              variants={staggerItem}
              className="surface-card p-5 text-center"
            >
              <p className="text-2xl font-semibold tracking-tight text-[var(--pj-text)]">
                {"prefix" in metric && metric.prefix}
                <AnimatedCounter
                  value={metric.value}
                  suffix={"suffix" in metric ? metric.suffix : ""}
                />
              </p>
              <p className="mt-2 text-xs font-medium text-[var(--pj-text-secondary)]">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </StaggerGroup>

        <JourneyReveal className="mt-8" delay={0.15}>
          <div className="flex items-center gap-3 rounded-xl border border-[var(--pj-border)] bg-[var(--pj-bg-subtle)] px-5 py-4">
            <Shield className="h-4 w-4 shrink-0 text-[var(--pj-accent)]" aria-hidden />
            <p className="text-sm text-[var(--pj-text-secondary)]">
              Full technical walkthrough with Problem → Investigation → Solution
              → Lessons —{" "}
              <Link
                href="/projects/cybersecurity-competitor"
                className="font-medium text-[var(--pj-accent)] hover:underline"
              >
                explore the case study
              </Link>
            </p>
          </div>
        </JourneyReveal>
      </div>
    </section>
  );
}
