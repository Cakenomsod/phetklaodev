import SectionReveal from "@/src/components/ui/SectionReveal";
import { cn } from "@/src/lib/utils";

type PortfolioSectionProps = {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  printBreakBefore?: boolean;
};

export default function PortfolioSection({
  id,
  label,
  title,
  children,
  className,
  printBreakBefore = false,
}: PortfolioSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "portfolio-section scroll-mt-24 border-t border-[var(--portfolio-border)] px-4 py-14 sm:px-6 lg:px-8",
        printBreakBefore && "portfolio-print-break",
        className,
      )}
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto w-full max-w-3xl">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-[0.18em] text-[var(--portfolio-blue)] uppercase">
            {label}
          </p>
          <h2
            id={`${id}-heading`}
            className="mt-2 text-balance text-2xl font-semibold tracking-tight text-[var(--portfolio-text)] sm:text-3xl"
          >
            {title}
          </h2>
          <div className="mt-8">{children}</div>
        </SectionReveal>
      </div>
    </section>
  );
}
