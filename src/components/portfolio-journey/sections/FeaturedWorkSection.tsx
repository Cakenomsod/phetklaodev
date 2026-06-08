"use client";

import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Server,
  FlaskConical,
  Wallet,
} from "lucide-react";
import { FEATURED_PROJECTS } from "@/src/data/portfolioJourneyData";
import JourneyReveal from "@/src/components/portfolio-journey/motion/JourneyReveal";
import StaggerGroup, {
  staggerItem,
} from "@/src/components/portfolio-journey/motion/StaggerGroup";
import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";

const tierAIcons = {
  "home-server": Server,
  research: FlaskConical,
  finance: Wallet,
} as const;

const accentStyles = {
  blue: "from-accent-primary/8 to-bg-secondary border-accent-primary/20",
  slate: "from-bg-tertiary/80 to-bg-secondary border-border-default",
  violet: "from-accent-secondary/10 to-bg-secondary border-accent-secondary/20",
} as const;

export default function FeaturedWorkSection() {
  const tierA = FEATURED_PROJECTS.filter((p) => p.tier === "a");
  const tierB = FEATURED_PROJECTS.filter((p) => p.tier === "b");

  return (
    <section
      id="work"
      className="pj-section scroll-mt-14 border-t border-[var(--pj-border)]"
      aria-labelledby="work-heading"
    >
      <div className="pj-container">
        <JourneyReveal>
          <p className="pj-kicker">04 — Featured Work</p>
          <h2 id="work-heading" className="pj-headline mt-4 text-balance">
            Projects that define my engineering
          </h2>
          <p className="pj-body mt-6">
            Three flagship builds with dedicated depth—plus supporting work that
            demonstrates range across healthcare, IoT, and production systems.
          </p>
        </JourneyReveal>

        <StaggerGroup className="mt-16 grid gap-8 lg:grid-cols-3">
          {tierA.map((project) => {
            const Icon =
              tierAIcons[project.id as keyof typeof tierAIcons] ?? Server;

            return (
              <motion.article
                key={project.id}
                variants={staggerItem}
                className={cn(
                  "pj-card pj-card-featured group relative flex flex-col overflow-hidden bg-gradient-to-b",
                  accentStyles[project.accent],
                )}
              >
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--pj-border)] bg-bg-tertiary shadow-sm">
                      <Icon className="h-5 w-5 text-[var(--pj-accent)]" aria-hidden />
                    </div>
                    <span className="rounded-full bg-[var(--pj-accent-soft)] px-3 py-1 font-mono text-[0.625rem] font-semibold tracking-wider text-[var(--pj-accent)] uppercase">
                      Tier A
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-[var(--pj-text)]">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[var(--pj-accent)]">
                    {project.tagline}
                  </p>
                  <p className="pj-body-muted mt-4 flex-1 text-sm leading-relaxed">
                    {project.summary}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech stack">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <li key={tech}>
                        <span className="rounded-md bg-bg-tertiary/80 px-2 py-0.5 font-mono text-[10px] text-[var(--pj-text-muted)] ring-1 ring-[var(--pj-border)]">
                          {tech}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 border-t border-[var(--pj-border)] bg-bg-tertiary/40 px-5 py-4">
                  {project.showcaseHref && (
                    <Link
                      href={project.showcaseHref}
                      className="btn-primary inline-flex flex-1 items-center justify-center gap-1.5 px-4 py-2.5 text-xs"
                    >
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                      Explore
                    </Link>
                  )}
                  {project.id === "research" && (
                    <a
                      href="#research"
                      className="btn-primary inline-flex flex-1 items-center justify-center gap-1.5 px-4 py-2.5 text-xs"
                    >
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                      Read Paper
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs text-[var(--pj-text-secondary)]"
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                      Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs text-[var(--pj-text-muted)] hover:text-[var(--pj-text)]"
                    >
                      <Github className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </StaggerGroup>

        <JourneyReveal className="mt-20">
          <h3 className="text-sm font-semibold tracking-wide text-[var(--pj-text-muted)] uppercase">
            Additional projects
          </h3>
          <ul className="mt-6 divide-y divide-[var(--pj-border)]">
            {tierB.map((project) => (
              <li key={project.id} className="group py-6 first:pt-0">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-2xl">
                    <h4 className="text-base font-semibold text-[var(--pj-text)] transition-colors group-hover:text-[var(--pj-accent)]">
                      {project.title}
                    </h4>
                    <p className="mt-1 text-sm text-[var(--pj-text-muted)]">
                      {project.tagline} · {project.period}
                    </p>
                    <p className="pj-body-muted mt-2 text-sm">{project.summary}</p>
                  </div>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-[var(--pj-accent)] transition-colors hover:text-[var(--pj-accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pj-accent)]"
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                      View
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </JourneyReveal>
      </div>
    </section>
  );
}
