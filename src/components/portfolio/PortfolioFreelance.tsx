import PortfolioLinks from "@/src/components/portfolio/PortfolioLinks";
import PortfolioSection from "@/src/components/portfolio/PortfolioSection";
import PortfolioTechChips from "@/src/components/portfolio/PortfolioTechChips";
import type { FreelanceEntry } from "@/src/data/portfolioData";

type PortfolioFreelanceProps = {
  items: FreelanceEntry[];
};

export default function PortfolioFreelance({ items }: PortfolioFreelanceProps) {
  return (
    <PortfolioSection
      id="freelance"
      label="Work"
      title="Freelance & client work"
      printBreakBefore
    >
      <ul className="space-y-12">
        {items.map((item) => (
          <li
            key={item.id}
            className="rounded-lg border border-[var(--portfolio-border)] bg-[var(--portfolio-surface)] p-5 sm:p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-[var(--portfolio-text)]">
                {item.title}
              </h3>
              <span className="text-sm font-medium text-[var(--portfolio-muted)]">
                {item.period}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-[var(--portfolio-red)]">
              {item.client}
            </p>
            <p className="mt-3 text-base leading-relaxed text-[var(--portfolio-muted)]">
              {item.summary}
            </p>
            <PortfolioTechChips items={item.techStack} />
            {item.highlights.length > 0 && (
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[var(--portfolio-text)]">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
            <PortfolioLinks links={item.links} />
          </li>
        ))}
      </ul>
    </PortfolioSection>
  );
}
