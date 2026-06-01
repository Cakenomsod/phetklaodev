"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Printer, X } from "lucide-react";
import { cn } from "@/src/lib/utils";

const sectionLinks = [
  { href: "#bio", label: "Bio" },
  { href: "#achievements", label: "Achievements" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#freelance", label: "Freelance" },
  { href: "#research", label: "Research" },
  { href: "#bootcamps", label: "Bootcamps" },
  { href: "#leadership", label: "Leadership" },
  { href: "#research-document", label: "Paper" },
] as const;

export default function PortfolioNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "portfolio-no-print sticky top-0 z-50 border-b transition-[background-color,box-shadow] duration-300",
        scrolled
          ? "border-[var(--portfolio-border)] bg-white/95 shadow-sm backdrop-blur-md"
          : "border-transparent bg-white",
      )}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="portfolio-nav-brand text-sm font-semibold tracking-tight text-[var(--portfolio-text)] no-underline"
        >
          phetklao<span className="text-[var(--portfolio-blue)]">.dev</span>
        </Link>

        <nav
          className="hidden items-center gap-5 lg:flex"
          aria-label="Portfolio sections"
        >
          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-wide text-[var(--portfolio-muted)] uppercase no-underline transition-colors hover:text-[var(--portfolio-blue)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="hidden rounded-md px-3 py-2 text-sm font-medium text-[var(--portfolio-muted)] no-underline transition-colors hover:text-[var(--portfolio-blue)] sm:inline-block"
          >
            Home
          </Link>
          <button
            type="button"
            onClick={() => window.print()}
            className="hidden items-center gap-1.5 rounded-md border border-[var(--portfolio-border)] px-3 py-2 text-sm font-medium text-[var(--portfolio-text)] transition-colors hover:border-[var(--portfolio-blue)] hover:text-[var(--portfolio-blue)] sm:inline-flex"
          >
            <Printer className="h-4 w-4" aria-hidden />
            Print
          </button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[var(--portfolio-text)] lg:hidden"
            aria-expanded={open}
            aria-controls="portfolio-mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="portfolio-mobile-nav"
          className="border-t border-[var(--portfolio-border)] bg-white px-4 py-3 lg:hidden"
          aria-label="Portfolio sections mobile"
        >
          <ul className="flex flex-col gap-0.5">
            <li>
              <Link
                href="/"
                className="block rounded-md px-3 py-2.5 text-sm font-medium text-[var(--portfolio-muted)] no-underline"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            {sectionLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-[var(--portfolio-muted)] no-underline hover:bg-[var(--portfolio-surface)] hover:text-[var(--portfolio-blue)]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-left text-sm font-medium text-[var(--portfolio-text)]"
                onClick={() => {
                  setOpen(false);
                  window.print();
                }}
              >
                <Printer className="h-4 w-4" aria-hidden />
                Print / Save PDF
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
