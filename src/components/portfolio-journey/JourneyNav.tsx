"use client";

import { useEffect, useState } from "react";
import { JOURNEY_NAV } from "@/src/data/portfolioJourneyData";
import SiteNav from "@/src/components/layout/SiteNav";
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
    <SiteNav backHref="/" backLabel="Home" className="pj-no-print">
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
              "nav-section-link glow-ring",
              activeId === item.id && "text-text-primary",
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </SiteNav>
  );
}
