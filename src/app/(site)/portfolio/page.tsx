import type { Metadata } from "next";
import PortfolioGrid from "@/src/components/sections/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "All projects — infrastructure, web apps, freelance, and academic work.",
};

export default function PortfolioPage() {
  return (
    <main className="flex-1">
      <header className="section-pad pb-0">
        <div className="container-narrow">
          <p className="font-mono text-xs tracking-[0.2em] text-accent-primary uppercase">
            Portfolio
          </p>
          <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            All projects
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">
            Full grid across infrastructure, apps, freelance, and academic work.
          </p>
        </div>
      </header>
      <PortfolioGrid />
    </main>
  );
}
