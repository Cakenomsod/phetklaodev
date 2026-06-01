"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/src/lib/utils";
import PortfolioTabs, { type TabId } from "./PortfolioTabs";

type PortfolioNavbarProps = {
  activeTab?: TabId;
  onTabChange?: (tabId: TabId) => void;
};

export default function PortfolioNavbar({ activeTab = "bio", onTabChange }: PortfolioNavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleTabChange = (tabId: TabId) => {
    onTabChange?.(tabId);
  };

  return (
    <header
      className={cn(
        "portfolio-no-print sticky top-0 z-50 border-b transition-[background-color,box-shadow] duration-300",
        scrolled
          ? "border-[var(--portfolio-border)] bg-white/95 shadow-sm backdrop-blur-md"
          : "border-transparent bg-white",
      )}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="portfolio-nav-brand shrink-0 text-lg font-semibold tracking-tight text-[var(--portfolio-text)] no-underline"
        >
          phetklao<span className="text-[var(--portfolio-blue)]">.dev</span>
        </Link>

        {onTabChange && (
          <PortfolioTabs activeTab={activeTab} onTabChange={handleTabChange} />
        )}
      </div>
    </header>
  );
}
