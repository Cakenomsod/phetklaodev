"use client";

import { FileText, ExternalLink } from "lucide-react";
import { RESEARCH_PUBLICATION } from "@/src/data/portfolioJourneyData";
import JourneyReveal from "@/src/components/portfolio-journey/motion/JourneyReveal";

export default function ResearchPublication() {
  const pub = RESEARCH_PUBLICATION;

  return (
    <section
      id="research"
      className="pj-section scroll-mt-14 border-t border-[var(--pj-border)]"
      aria-labelledby="research-heading"
    >
      <div className="pj-container">
        <JourneyReveal>
          <p className="pj-kicker">03 — Research</p>
          <h2 id="research-heading" className="pj-headline mt-4">
            Research-driven problem solving
          </h2>
          <p className="pj-body mt-6 max-w-2xl">
            Controlled experiments in the Young Scientist Program taught me to
            define the problem before touching tools—the same discipline I apply
            to system design.
          </p>
        </JourneyReveal>

        <JourneyReveal className="mt-12" delay={0.05}>
          <article className="pj-card p-8 sm:p-10">
            <p className="font-mono text-xs tracking-wider text-[var(--pj-text-muted)] uppercase">
              Graduation Thesis · {pub.period}
            </p>
            <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-[var(--pj-text)]">
              {pub.title}
            </h3>
            <p className="mt-1 text-sm text-[var(--pj-text-muted)]">
              {pub.institution}
            </p>
            <p className="pj-body mt-6 text-[0.9375rem] leading-[1.8]">
              {pub.abstract}
            </p>
            <a
              href={pub.documentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 gap-2 px-5 py-2.5 text-sm"
            >
              <FileText className="h-4 w-4" aria-hidden />
              Read full document
              <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden />
            </a>
          </article>
        </JourneyReveal>
      </div>
    </section>
  );
}
