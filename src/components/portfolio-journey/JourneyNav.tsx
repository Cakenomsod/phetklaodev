"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { JOURNEY_NAV } from "@/src/data/portfolioJourneyData";
import { cn } from "@/src/lib/utils";

export default function JourneyNav() {
  const [activeId, setActiveId] = useState<string>(JOURNEY_NAV[0].id);

  useEffect(() => {
    const sections = JOURNEY_NAV.map((item) =>
      document.getElementById(item.id),
    ).filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] },
    );

    for (const section of sections) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <header className="pj-no-print sticky top-0 z-50 border-b border-[var(--pj-border)] bg-[var(--pj-bg)]/90 backdrop-blur-xl">
      <div className="pj-container flex h-14 items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-[var(--pj-text-muted)] transition-colors hover:text-[var(--pj-text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pj-accent)]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          <span className="hidden sm:inline">Home</span>
        </Link>

        <nav
          className="scrollbar-hidden flex flex-1 items-center justify-end gap-1 overflow-x-auto sm:gap-2"
          aria-label="Portfolio sections"
        >
          {JOURNEY_NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              data-active={activeId === item.id}
              className={cn(
                "pj-nav-link relative px-2 py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pj-accent)]",
                activeId === item.id && "text-[var(--pj-text)]",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
