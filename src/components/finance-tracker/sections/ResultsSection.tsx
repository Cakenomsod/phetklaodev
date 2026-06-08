"use client";

import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { RESULTS_METRICS } from "@/src/data/financeTrackerShowcase";
import AnimatedCounter from "@/src/components/home-server/motion/AnimatedCounter";
import ScrollReveal from "@/src/components/finance-tracker/motion/ScrollReveal";

export default function ResultsSection() {
  return (
    <section
      className="section-pad relative border-t border-border-subtle"
      aria-labelledby="ft-results-title"
    >
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-kicker">Results</p>
          <h2
            id="ft-results-title"
            className="text-headline mt-4 max-w-3xl text-balance"
          >
            Measurable impact in production
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border-default bg-bg-tertiary/50 sm:grid-cols-2 lg:grid-cols-4">
          {RESULTS_METRICS.map((metric, index) => (
            <ScrollReveal key={metric.id} delay={index * 0.05}>
              <div className="flex h-full flex-col bg-bg-secondary/80 px-6 py-8 backdrop-blur-sm">
                <p className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                  <AnimatedCounter
                    value={metric.value}
                    suffix={metric.suffix}
                  />
                </p>
                <p className="mt-3 text-sm font-medium text-text-primary">
                  {metric.label}
                </p>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-text-muted">
                  {metric.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12" delay={0.1}>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="https://financetracker-pk.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-3 text-sm"
            >
              Live demo
              <ExternalLink className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="https://github.com/Cakepuarknomsod"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-6 py-3 text-sm"
            >
              GitHub
              <Github className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
