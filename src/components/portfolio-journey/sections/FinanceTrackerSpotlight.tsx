"use client";

import Link from "next/link";
import { ArrowRight, Brain, GitBranch, Receipt } from "lucide-react";
import ArchitectureGraph from "@/src/components/finance-tracker/graph/ArchitectureGraph";
import AnimatedCounter from "@/src/components/home-server/motion/AnimatedCounter";
import { RESULTS_METRICS } from "@/src/data/financeTrackerShowcase";
import JourneyReveal from "@/src/components/portfolio-journey/motion/JourneyReveal";
import StaggerGroup, {
  staggerItem,
} from "@/src/components/portfolio-journey/motion/StaggerGroup";
import { motion } from "framer-motion";

const HIGHLIGHTS = [
  {
    icon: Receipt,
    title: "AI receipt pipeline",
    description: "Regex → Gemini → Zod validation turns photos into ledger entries.",
  },
  {
    icon: GitBranch,
    title: "12 → 4 transfers",
    description: "Greedy net-balance matching minimizes peer-to-peer settlement.",
  },
  {
    icon: Brain,
    title: "Hybrid architecture",
    description: "Firestore sync, Immich media, local LLM fallback for privacy.",
  },
];

export default function FinanceTrackerSpotlight() {
  return (
    <section
      className="pj-section border-t border-[var(--pj-border)]"
      aria-labelledby="finance-tracker-heading"
    >
      <div className="pj-container">
        <JourneyReveal>
          <p className="pj-kicker">Flagship Build</p>
          <h2 id="finance-tracker-heading" className="pj-headline mt-4 text-balance">
            AI-Powered Finance & Trip Tracker
          </h2>
          <p className="pj-body mt-6 max-w-2xl">
            Product thinking, algorithm design, and AI engineering—deployed for
            real group trips. An interactive case study on turning expense chaos
            into automated settlement.
          </p>
        </JourneyReveal>

        <JourneyReveal className="mt-12" delay={0.1}>
          <div className="pj-inset-dark p-6 sm:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-kicker text-[0.625rem] text-text-muted">
                System Architecture
              </p>
              <Link
                href="/projects/finance-tracker"
                className="btn-secondary px-4 py-2 text-xs"
              >
                Full case study
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
            <ArchitectureGraph />
          </div>
        </JourneyReveal>

        <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              className="pj-card p-6"
            >
              <item.icon
                className="h-5 w-5 text-[var(--pj-accent)]"
                aria-hidden
              />
              <h3 className="mt-4 text-sm font-semibold text-[var(--pj-text)]">
                {item.title}
              </h3>
              <p className="pj-body-muted mt-2 text-sm">{item.description}</p>
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
                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix}
                />
              </p>
              <p className="mt-2 text-xs font-medium text-[var(--pj-text-secondary)]">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
