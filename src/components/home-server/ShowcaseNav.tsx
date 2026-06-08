"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ShowcaseNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bg-primary/85 backdrop-blur-lg">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/portfolio"
          className="inline-flex min-h-10 items-center gap-2 font-mono text-xs tracking-widest text-text-muted uppercase transition-colors hover:text-accent-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
          Portfolio
        </Link>
        <span className="font-mono text-[10px] tracking-[0.2em] text-accent-primary/80 uppercase">
          Infrastructure · Case Study
        </span>
      </div>
    </header>
  );
}
