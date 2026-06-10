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
      className="section-pad scroll-mt-20 border-y border-border-subtle bg-bg-secondary/30"
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
                className="btn-primary min-h-11"
              >
                <Download className="h-4 w-4" aria-hidden />
                Download PDF
              </a>
              <Link
                href="/portfolio"
                className="btn-secondary min-h-11"
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
