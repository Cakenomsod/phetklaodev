import PortfolioSection from "@/src/components/portfolio/PortfolioSection";

type PortfolioBioProps = {
  paragraphs: string[];
};

export default function PortfolioBio({ paragraphs }: PortfolioBioProps) {
  return (
    <PortfolioSection id="bio" label="About" title="Biography">
      <div className="space-y-5 text-base leading-relaxed text-[var(--portfolio-muted)] sm:text-lg sm:leading-[1.75]">
        {paragraphs.map((paragraph, index) => (
          <p key={`bio-${index}`}>{paragraph}</p>
        ))}
      </div>
    </PortfolioSection>
  );
}
