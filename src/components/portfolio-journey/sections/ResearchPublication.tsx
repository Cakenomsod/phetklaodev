"use client";

import { FileText, ExternalLink } from "lucide-react";
import { RESEARCH_PUBLICATION } from "@/src/data/portfolioJourneyData";
import JourneyReveal from "@/src/components/portfolio-journey/motion/JourneyReveal";
import StaggerGroup, {
  staggerItem,
} from "@/src/components/portfolio-journey/motion/StaggerGroup";
import { motion } from "framer-motion";

export default function ResearchPublication() {
  const pub = RESEARCH_PUBLICATION;

  return (
    <section
      id="research"
      className="pj-section scroll-mt-14"
      aria-labelledby="research-heading"
    >
      <div className="pj-container">
        <JourneyReveal>
          <p className="pj-kicker">05 — Research</p>
          <h2 id="research-heading" className="pj-headline mt-4">
            Academic publication
          </h2>
        </JourneyReveal>

        <JourneyReveal className="mt-12" delay={0.05}>
          <article className="pj-card overflow-hidden">
            <header className="border-b border-[var(--pj-border)] bg-[var(--pj-bg-subtle)] px-8 py-10 sm:px-10">
              <p className="font-mono text-xs tracking-wider text-[var(--pj-text-muted)] uppercase">
                Graduation Thesis · {pub.period}
              </p>
              <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-[var(--pj-text)] sm:text-2xl">
                {pub.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-[var(--pj-text-muted)]">
                <span>{pub.authors}</span>
                <span aria-hidden>·</span>
                <span>{pub.institution}</span>
              </div>
              <a
                href={pub.documentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[var(--pj-accent)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--pj-accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pj-accent)]"
              >
                <FileText className="h-4 w-4" aria-hidden />
                Read full document
                <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden />
              </a>
            </header>

            <div className="grid gap-0 lg:grid-cols-2">
              <div className="border-b border-[var(--pj-border)] p-8 sm:p-10 lg:border-r lg:border-b-0">
                <h4 className="text-xs font-semibold tracking-[0.15em] text-[var(--pj-accent)] uppercase">
                  Abstract
                </h4>
                <p className="pj-body mt-4 text-[0.9375rem] leading-[1.8]">
                  {pub.abstract}
                </p>
              </div>

              <div className="p-8 sm:p-10">
                <h4 className="text-xs font-semibold tracking-[0.15em] text-[var(--pj-accent)] uppercase">
                  Methodology
                </h4>
                <ol className="mt-4 space-y-3">
                  {pub.methodology.map((step, i) => (
                    <li
                      key={step}
                      className="flex gap-3 text-sm leading-relaxed text-[var(--pj-text-secondary)]"
                    >
                      <span className="shrink-0 font-mono text-xs font-semibold text-[var(--pj-accent)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <StaggerGroup className="grid gap-0 border-t border-[var(--pj-border)] lg:grid-cols-2">
              <motion.div variants={staggerItem} className="border-b border-[var(--pj-border)] p-8 sm:p-10 lg:border-r lg:border-b-0">
                <h4 className="text-xs font-semibold tracking-[0.15em] text-[var(--pj-accent)] uppercase">
                  Findings
                </h4>
                <ul className="mt-4 space-y-3">
                  {pub.findings.map((finding) => (
                    <li
                      key={finding}
                      className="flex gap-2 text-sm leading-relaxed text-[var(--pj-text-secondary)]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--pj-accent)]" aria-hidden />
                      {finding}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={staggerItem} className="p-8 sm:p-10">
                <h4 className="text-xs font-semibold tracking-[0.15em] text-[var(--pj-accent)] uppercase">
                  Impact
                </h4>
                <ul className="mt-4 space-y-3">
                  {pub.impact.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-[var(--pj-text-secondary)]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--pj-accent)]" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </StaggerGroup>
          </article>
        </JourneyReveal>
      </div>
    </section>
  );
}
