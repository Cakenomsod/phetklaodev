"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { useTypingCycle } from "@/src/hooks/useTypingCycle";

const TYPING_PHRASES = [
  "Web Developer",
  "Systems Builder",
  "Informatics Applicant",
] as const;

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const typedRole = useTypingCycle(TYPING_PHRASES);
  const roleText = reduceMotion ? TYPING_PHRASES[0] : typedRole;
  const showCursor = !reduceMotion;

  return (
    <section
      className="relative overflow-hidden section-pad bg-dot-grid"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-bg-primary/85" />
        <div className="ambient-blob-primary absolute top-1/3 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full blur-[100px]" />
      </div>

      <div className="container-narrow">
        <div
          className={cn("max-w-3xl", !reduceMotion && "animate-fade-up")}
        >
          <h1
            id="hero-heading"
            className="text-balance text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m Phetklao
          </h1>

          <p
            className="mt-5 min-h-[1.75rem] text-lg text-text-muted sm:text-xl"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="text-text-primary">{roleText}</span>
            {showCursor && (
              <span
                className="ml-0.5 inline-block h-[1.1em] w-0.5 translate-y-0.5 animate-blink bg-accent-primary align-middle"
                aria-hidden
              />
            )}
          </p>

          <p className="mt-5 inline-flex max-w-2xl rounded-full border border-accent-primary/35 bg-accent-primary/5 px-3 py-1.5 font-mono text-[0.65rem] leading-snug tracking-wide text-accent-primary sm:text-xs">
            Applying to YZU — International Bachelor Program in Informatics
          </p>

          <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="/#projects"
              className="btn-primary min-h-11"
            >
              View My Projects
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/portfolio"
              className="btn-secondary min-h-11"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
