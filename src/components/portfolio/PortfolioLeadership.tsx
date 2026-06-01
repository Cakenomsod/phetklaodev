import PortfolioSection from "@/src/components/portfolio/PortfolioSection";
import type { LeadershipEntry } from "@/src/data/portfolioData";

type PortfolioLeadershipProps = {
  items: LeadershipEntry[];
};

export default function PortfolioLeadership({
  items,
}: PortfolioLeadershipProps) {
  return (
    <PortfolioSection
      id="leadership"
      label="Community"
      title="Leadership & activities"
    >
      <ul className="space-y-10">
        {items.map((item) => (
          <li key={item.id}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-[var(--portfolio-text)]">
                {item.role}
              </h3>
              <span className="text-sm font-medium text-[var(--portfolio-muted)]">
                {item.period}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-[var(--portfolio-blue)]">
              {item.organization}
            </p>
            <p className="mt-3 text-base leading-relaxed text-[var(--portfolio-muted)]">
              {item.summary}
            </p>
            {item.highlights.length > 0 && (
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[var(--portfolio-text)]">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </PortfolioSection>
  );
}
