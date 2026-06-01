import PortfolioSection from "@/src/components/portfolio/PortfolioSection";
import type { PortfolioPdf } from "@/src/data/portfolioData";

type PortfolioPdfEmbedProps = {
  pdf: PortfolioPdf;
};

export default function PortfolioPdfEmbed({ pdf }: PortfolioPdfEmbedProps) {
  const src = encodeURI(pdf.filePath);

  return (
    <PortfolioSection
      id="research-document"
      label="Appendix"
      title={pdf.title}
      printBreakBefore
    >
      {pdf.description && (
        <p className="mb-6 text-base leading-relaxed text-[var(--portfolio-muted)]">
          {pdf.description}
        </p>
      )}
      <div className="portfolio-pdf-embed overflow-hidden rounded-lg border border-[var(--portfolio-border)] bg-[var(--portfolio-surface)]">
        <iframe
          src={`${src}#view=FitH`}
          title={pdf.title}
          className="h-[min(80vh,900px)] w-full bg-white"
        />
      </div>
      <p className="mt-4 text-sm text-[var(--portfolio-muted)]">
        <a href={src} download className="font-medium">
          Download PDF
        </a>
        <span aria-hidden className="mx-2">
          ·
        </span>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium"
        >
          Open in new tab
        </a>
      </p>
      <p className="portfolio-no-print mt-3 text-xs text-[var(--portfolio-muted)]">
        If the preview does not load, use the links above (some mobile browsers
        require opening the file externally).
      </p>
    </PortfolioSection>
  );
}
