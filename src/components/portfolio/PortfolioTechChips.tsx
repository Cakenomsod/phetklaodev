type PortfolioTechChipsProps = {
  items: string[];
};

export default function PortfolioTechChips({ items }: PortfolioTechChipsProps) {
  if (items.length === 0) return null;

  return (
    <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
      {items.map((tech) => (
        <li
          key={tech}
          className="rounded border border-[var(--portfolio-border)] bg-[var(--portfolio-surface)] px-2.5 py-1 text-xs font-medium text-[var(--portfolio-muted)]"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}
