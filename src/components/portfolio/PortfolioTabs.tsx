"use client";

import { cn } from "@/src/lib/utils";

export type TabId = "bio" | "achievements" | "education" | "projects" | "freelance" | "research" | "bootcamps" | "leadership";

export const TABS: { id: TabId; label: string }[] = [
  { id: "bio", label: "About Me" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "projects", label: "Projects" },
  { id: "freelance", label: "Freelance" },
  { id: "research", label: "Research" },
  { id: "bootcamps", label: "Bootcamps" },
  { id: "leadership", label: "Leadership" },
];

type PortfolioTabsProps = {
  activeTab: TabId;
  onTabChange: (tabId: TabId) => void;
};

export default function PortfolioTabs({ activeTab, onTabChange }: PortfolioTabsProps) {
  return (
    <nav className="flex items-center gap-1 overflow-x-auto" role="tablist" aria-label="Portfolio sections">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "flex-shrink-0 px-3 py-2 text-xs font-semibold tracking-wide uppercase transition-all duration-200",
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
