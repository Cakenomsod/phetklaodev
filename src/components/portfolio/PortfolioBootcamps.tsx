import PortfolioSection from "@/src/components/portfolio/PortfolioSection";
import type { SelectiveProgramEntry } from "@/src/data/portfolioData";

type PortfolioBootcampsProps = {
  items: SelectiveProgramEntry[];
};

export default function PortfolioBootcamps({ items }: PortfolioBootcampsProps) {
  return (
    <PortfolioSection
      id="selective-programs"
      label="Excellence"
      title="Selective Programs & Training"
    >
      <ul className="space-y-8">
        {items.map((item) => (
          <li key={item.id}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-[var(--portfolio-text)]">
                  {item.name}
                </h3>
                {item.badge && (
                  <span className="mt-1 inline-block w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-sm font-medium text-[var(--portfolio-muted)]">
                {item.period}
              </span>
            </div>
            <p className="mt-2 text-sm font-medium text-[var(--portfolio-blue)]">
              {item.provider}
            </p>
            <p className="mt-2 text-base leading-relaxed text-[var(--portfolio-muted)]">
              {item.summary}
            </p>
            {item.highlights && item.highlights.length > 0 && (
              <ul className="mt-3 space-y-1">
                {item.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-sm text-[var(--portfolio-text)]">
                    • {highlight}
                  </li>
                ))}
              </ul>
            )}
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
