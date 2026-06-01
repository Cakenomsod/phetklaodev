import Link from "next/link";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#contact", label: "Contact" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/5 bg-bg-secondary">
      <div className="container-narrow flex flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="font-mono text-xs tracking-wide text-text-muted uppercase">
          © {year} Phetklao · YZU Application Portfolio
        </p>
        <nav className="flex flex-wrap gap-6" aria-label="Footer">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-widest text-text-muted uppercase transition-colors hover:text-accent-primary glow-ring rounded-sm"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/portfolio"
            className="font-mono text-xs tracking-widest text-text-muted uppercase transition-colors hover:text-accent-primary glow-ring rounded-sm"
          >
            Full grid
          </Link>
        </nav>
      </div>
    </footer>
  );
}
