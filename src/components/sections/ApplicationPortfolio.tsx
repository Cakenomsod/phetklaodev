"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import SectionReveal from "@/src/components/ui/SectionReveal";
import PortfolioGrid from "@/src/components/sections/PortfolioGrid";

const PORTFOLIO_PDF = "/portfolio.pdf";

export default function ApplicationPortfolio() {
  return (
    <section
      id="portfolio"
      className="section-pad scroll-mt-20 border-y border-white/5 bg-bg-secondary/30"
      aria-labelledby="portfolio-heading"
    >
      <div className="container-narrow">
        <SectionReveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-xs tracking-[0.2em] text-accent-primary uppercase">
                Portfolio
              </p>
              <h2
                id="portfolio-heading"
                className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Application Portfolio
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-text-muted">
                Project write-ups, stack details, and supporting work—browse
                below or download the full PDF for your records.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href={PORTFOLIO_PDF}
                download
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-sm font-semibold text-bg-primary transition-[background,box-shadow] hover:bg-[#33ddff] hover:shadow-[var(--shadow-glow)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
              >
                <Download className="h-4 w-4" aria-hidden />
                Download PDF
              </a>
              <Link
                href="/portfolio"
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/15 px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:border-accent-primary/35 hover:bg-accent-primary/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
              >
                Full page
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </SectionReveal>

        <PortfolioGrid embedded />
      </div>
    </section>
  );
}
