"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/src/lib/utils";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#contact", label: "Contact" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function isActive(href: string) {
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,backdrop-filter,border-color] duration-300",
        scrolled
          ? "border-white/10 bg-bg-secondary/90 backdrop-blur-lg"
          : "border-white/5 bg-bg-secondary/70 backdrop-blur-md",
      )}
    >
      <div className="container-narrow flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-widest text-text-primary uppercase glow-ring rounded-sm"
        >
          phetklao<span className="text-accent-primary">.dev</span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-mono text-xs tracking-widest uppercase transition-colors glow-ring rounded-sm",
                isActive(link.href)
                  ? "border-b-2 border-accent-primary text-accent-primary pb-0.5"
                  : "text-text-muted hover:text-text-primary",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-text-primary md:hidden glow-ring"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-white/5 bg-bg-secondary/95 px-4 py-4 backdrop-blur-lg md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block rounded-md px-3 py-3 font-mono text-xs tracking-widest uppercase glow-ring",
                    isActive(link.href)
                      ? "bg-bg-tertiary text-accent-primary"
                      : "text-text-muted hover:bg-bg-tertiary hover:text-text-primary",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
