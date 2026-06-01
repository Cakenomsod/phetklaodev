import PortfolioSection from "@/src/components/portfolio/PortfolioSection";
import type { BootcampEntry } from "@/src/data/portfolioData";

type PortfolioBootcampsProps = {
  items: BootcampEntry[];
};

export default function PortfolioBootcamps({ items }: PortfolioBootcampsProps) {
  return (
    <PortfolioSection
      id="bootcamps"
      label="Learning"
      title="Bootcamps & courses"
    >
      <ul className="space-y-8">
        {items.map((item) => (
          <li key={item.id}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-[var(--portfolio-text)]">
                {item.name}
              </h3>
              <span className="text-sm font-medium text-[var(--portfolio-muted)]">
                {item.period}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-[var(--portfolio-blue)]">
              {item.provider}
            </p>
            <p className="mt-2 text-base leading-relaxed text-[var(--portfolio-muted)]">
              {item.summary}
            </p>
            {item.certificateUrl &&
              !item.certificateUrl.includes("example.com") && (
                <p className="mt-2 text-sm">
                  <a
                    href={item.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium"
                  >
                    View certificate ↗
                  </a>
                </p>
              )}
          </li>
        ))}
      </ul>
    </PortfolioSection>
  );
}
