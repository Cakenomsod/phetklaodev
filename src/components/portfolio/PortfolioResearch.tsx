import PortfolioLinks from "@/src/components/portfolio/PortfolioLinks";
import PortfolioSection from "@/src/components/portfolio/PortfolioSection";
import type { ResearchEntry } from "@/src/data/portfolioData";

type PortfolioResearchProps = {
  items: ResearchEntry[];
};

export default function PortfolioResearch({ items }: PortfolioResearchProps) {
  return (
    <PortfolioSection id="research" label="Academic" title="Research">
      <ul className="space-y-10">
        {items.map((item) => (
          <li
            key={item.id}
            className="border-l-2 border-[var(--portfolio-blue)] pl-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-[var(--portfolio-text)]">
                {item.title}
              </h3>
              <span className="text-sm font-medium text-[var(--portfolio-muted)]">
                {item.period}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-[var(--portfolio-blue)]">
              {item.institution}
            </p>
            {item.language && (
              <p className="mt-1 text-xs font-semibold tracking-wide text-[var(--portfolio-red)] uppercase">
                Language: {item.language}
              </p>
            )}
            <p className="mt-3 text-base leading-relaxed text-[var(--portfolio-muted)]">
              {item.summary}
            </p>
            <PortfolioLinks links={item.links} />
          </li>
        ))}
      </ul>
    </PortfolioSection>
  );
}
