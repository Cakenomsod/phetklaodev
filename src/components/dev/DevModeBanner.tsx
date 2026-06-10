"use client";

import { siteConfig } from "@/src/config/site";

export default function DevModeBanner() {
  if (!siteConfig.devMode) return null;

  const { webPortfolio } = siteConfig.features;

  return (
    <div
      className="pointer-events-none fixed bottom-3 left-3 z-[100] rounded-md border border-border-default bg-bg-secondary/95 px-3 py-2 font-mono text-[0.65rem] leading-relaxed tracking-wide text-text-muted shadow-[var(--shadow-surface-sm)] backdrop-blur-sm"
      aria-hidden
    >
      <span className="font-semibold text-accent-primary">DEV</span>
      <span className="mx-1.5 text-border-default">·</span>
      webPortfolio:{" "}
      <span className={webPortfolio ? "text-accent-primary" : "text-text-muted/70"}>
        {webPortfolio ? "on" : "off"}
      </span>
    </div>
  );
}
