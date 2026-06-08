import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** Teaser block linking to full portfolio route — used if embedded on home. */
export default function PortfolioTeaser() {
  return (
    <section className="section-pad border-y border-border-subtle" aria-labelledby="portfolio-teaser-heading">
      <div className="container-narrow flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 id="portfolio-teaser-heading" className="text-2xl font-semibold">
            More projects & categories
          </h2>
          <p className="mt-2 max-w-xl text-text-muted">
            Academic work, Fastwork profile, and the full project grid live on
            the portfolio page.
          </p>
        </div>
        <Link
          href="/portfolio"
          className="btn-primary min-h-11"
        >
          Open portfolio
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
