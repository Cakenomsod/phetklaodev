"use client";

import { portfolioData } from "@/src/data/portfolioData";

export default function PortfolioFooter() {
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-[var(--portfolio-border)] px-4 py-10 text-center text-sm text-[var(--portfolio-muted)] sm:px-6 lg:px-8">
      <p>
        {personal.name} · {personal.program} · Yuan Ze University application
        portfolio
      </p>
      <p className="mt-2 portfolio-no-print">
      </p>
    </footer>
  );
}
