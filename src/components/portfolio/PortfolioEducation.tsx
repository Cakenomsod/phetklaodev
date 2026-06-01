import PortfolioSection from "@/src/components/portfolio/PortfolioSection";
import type { EducationEntry } from "@/src/data/portfolioData";

type PortfolioEducationProps = {
  items: EducationEntry[];
};

export default function PortfolioEducation({
  items,
}: PortfolioEducationProps) {
  return (
    <PortfolioSection id="education" label="Background" title="Education">
      <ul className="space-y-10">
        {items.map((item) => (
          <li key={item.id}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-[var(--portfolio-text)]">
                {item.institution}
              </h3>
              <span className="text-sm font-medium text-[var(--portfolio-muted)]">
                {item.period}
              </span>
            </div>
            <p className="mt-1 text-base font-medium text-[var(--portfolio-blue)]">
              {item.degree}
            </p>
            {(item.location || item.gpax) && (
              <p className="mt-1 text-sm text-[var(--portfolio-muted)]">
                {[item.location, item.gpax && `GPAX ${item.gpax}`]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            )}
            {item.highlights.length > 0 && (
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-base leading-relaxed text-[var(--portfolio-muted)]">
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
