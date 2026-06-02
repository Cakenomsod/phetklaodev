import PortfolioLinks from "@/src/components/portfolio/PortfolioLinks";
import PortfolioSection from "@/src/components/portfolio/PortfolioSection";
import type { EducationEntry, ResearchEntry } from "@/src/data/portfolioData";

type PortfolioEducationProps = {
  items: EducationEntry[];
  research?: ResearchEntry[];
};

export default function PortfolioEducation({
  items,
  research = [],
}: PortfolioEducationProps) {
  return (
    <PortfolioSection id="education" label="Background" title="Education & Research">
      {items.length > 0 && (
        <div>
          <h3 className="mb-6 text-lg font-semibold text-[var(--portfolio-text)]">Education</h3>
          <ul className="space-y-10">
            {items.map((item) => (
              <li key={item.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="text-lg font-semibold text-[var(--portfolio-text)]">
                    {item.institution}
                  </h4>
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
        </div>
      )}

      {research.length > 0 && (
        <div className={items.length > 0 ? "mt-10 border-t border-[var(--portfolio-border)] pt-10" : ""}>
          <h3 className="mb-6 text-lg font-semibold text-[var(--portfolio-text)]">Research</h3>
          <ul className="space-y-10">
            {research.map((item) => (
              <li
                key={item.id}
                className="border-l-2 border-[var(--portfolio-blue)] pl-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="text-lg font-semibold text-[var(--portfolio-text)]">
                    {item.title}
                  </h4>
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
        </div>
      )}
    </PortfolioSection>
  );
}
