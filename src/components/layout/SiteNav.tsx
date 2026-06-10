"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import ThemeSwitcher from "@/src/components/theme/ThemeSwitcher";
import { cn } from "@/src/lib/utils";

type SiteNavProps = {
  backHref: string;
  backLabel: string;
  children?: React.ReactNode;
  className?: string;
};

export default function SiteNav({
  backHref,
  backLabel,
  children,
  className,
}: SiteNavProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border-default bg-surface-overlay backdrop-blur-xl",
        className,
      )}
    >
      <div className="container-narrow flex h-14 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href={backHref}
          className="inline-flex shrink-0 items-center gap-2 font-mono text-xs tracking-[0.14em] text-text-muted uppercase transition-colors hover:text-accent-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
          <span className="hidden sm:inline">{backLabel}</span>
        </Link>
        <div className="flex min-w-0 flex-1 items-center justify-end gap-3 sm:gap-4">
          {children}
          <ThemeSwitcher compact />
        </div>
      </div>
    </header>
  );
}
