import type { PortfolioLink } from "@/src/data/portfolioData";

type PortfolioLinksProps = {
  links?: PortfolioLink[];
};

export default function PortfolioLinks({ links }: PortfolioLinksProps) {
  if (!links || links.length === 0) return null;

  return (
    <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
      {links.map((link) => (
        <a
          key={`${link.label}-${link.url}`}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium"
        >
          {link.label} ↗
        </a>
      ))}
    </p>
  );
}
