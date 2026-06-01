"use client";

import { cn } from "@/src/lib/utils";

export type TabId = "bio" | "education" | "achievements" | "experience" | "selective_programs" | "leadership";

export const TABS: { id: TabId; label: string }[] = [
  { id: "bio", label: "About Me" },
  { id: "education", label: "Education & Research" },
  { id: "achievements", label: "Achievements" },
  { id: "selective_programs", label: "Selective Programs" },
  { id: "experience", label: "Projects" },
  { id: "leadership", label: "Leadership & Activities" },
];

type PortfolioTabsProps = {
  activeTab: TabId;
  onTabChange: (tabId: TabId) => void;
};

export default function PortfolioTabs({ activeTab, onTabChange }: PortfolioTabsProps) {
  return (
    <nav className="flex w-full items-center gap-1 overflow-hidden" role="tablist" aria-label="Portfolio sections">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "flex-1 min-w-0 cursor-pointer px-2 py-2 text-[0.68rem] sm:text-xs font-semibold tracking-wide uppercase text-center transition-all duration-200",
            activeTab === tab.id
              ? "border-b-2 border-[var(--portfolio-blue)] text-[var(--portfolio-blue)]"
              : "border-b-2 border-transparent text-[var(--portfolio-muted)] hover:text-[var(--portfolio-text)]",
          )}
          data-active={activeTab === tab.id}
          role="tab"
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
