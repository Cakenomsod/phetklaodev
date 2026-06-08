"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  FileText,
  Github,
  Server,
  Globe,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import type { Project } from "@/src/types";
import { cn } from "@/src/lib/utils";

const SHOWCASE_ROUTES: Partial<Record<string, string>> = {
  "home-server": "/projects/home-server",
  "finance-tracker": "/projects/finance-tracker",
};

const categoryIcons = {
  infrastructure: Server,
  webapp: Globe,
  freelance: Briefcase,
  academic: GraduationCap,
} as const;

const categoryLabels: Record<string, string> = {
  infrastructure: "Infrastructure",
  webapp: "Web app",
  freelance: "Freelance",
  academic: "Academic",
};

type ProjectCardProps = {
  project: Project;
  dynamicLiveUrl?: string | null;
  onSelect: (project: Project) => void;
};

export default function ProjectCard({
  project,
  dynamicLiveUrl,
  onSelect,
}: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  const Icon =
    categoryIcons[project.category as keyof typeof categoryIcons] ?? Globe;
  const thumbnailSrc = project.thumbnail?.trim() ?? "";
  const showImage = thumbnailSrc.length > 0 && !imgError;

  const resolvedLiveUrl =
    project.id === "home-server" && dynamicLiveUrl
      ? dynamicLiveUrl
      : project.liveUrl && project.liveUrl.length > 0
        ? project.liveUrl
        : null;

  const pdfUrl =
    project.category === "academic" &&
    project.githubUrl &&
    project.githubUrl.length > 0
      ? project.githubUrl
      : null;

  const showcaseHref = SHOWCASE_ROUTES[project.id];

  const cardBody = (
    <>
        <div className="relative aspect-video w-full overflow-hidden bg-bg-tertiary">
          {showImage ? (
            <Image
              src={thumbnailSrc}
              alt=""
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImgError(true)}
              unoptimized
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center bg-gradient-to-br from-bg-tertiary to-bg-primary"
              aria-hidden
            >
              <Icon className="h-12 w-12 text-accent-primary/40" />
            </div>
          )}
          <span className="absolute top-3 left-3 rounded bg-bg-primary/80 px-2 py-1 font-mono text-[10px] tracking-wider text-text-muted uppercase backdrop-blur-sm">
            {showcaseHref ? "Case Study" : categoryLabels[project.category] ?? project.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-semibold text-text-primary">
            {project.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted line-clamp-3">
            {project.shortDesc}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
            {project.techStack.slice(0, 4).map((tech) => (
              <li key={tech}>
                <span className="rounded bg-bg-tertiary px-2 py-0.5 font-mono text-[10px] text-text-muted">
                  {tech}
                </span>
              </li>
            ))}
            {project.techStack.length > 4 && (
              <li>
                <span className="font-mono text-[10px] text-text-muted">
                  +{project.techStack.length - 4}
                </span>
              </li>
            )}
          </ul>
        </div>
    </>
  );

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border-default bg-bg-secondary transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)] focus-within:shadow-[var(--shadow-glow)]">
      {showcaseHref ? (
        <Link
          href={showcaseHref}
          className="flex flex-1 flex-col text-left glow-ring rounded-xl"
          aria-label={`Explore ${project.title} case study`}
        >
          {cardBody}
        </Link>
      ) : (
        <button
          type="button"
          className="flex flex-1 flex-col text-left glow-ring rounded-xl"
          onClick={() => onSelect(project)}
          aria-label={`Open details for ${project.title}`}
        >
          {cardBody}
        </button>
      )}

      <div className="flex gap-2 border-t border-border-default px-4 py-3">
        {resolvedLiveUrl && (
          <a
            href={resolvedLiveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-md text-xs font-medium text-accent-primary transition-colors hover:bg-accent-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            Live
          </a>
        )}
        {pdfUrl && (
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex min-h-10 items-center justify-center gap-1.5 rounded-md px-3 text-xs font-medium text-accent-primary transition-colors hover:bg-accent-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary",
              !resolvedLiveUrl && "flex-1",
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <FileText className="h-3.5 w-3.5" aria-hidden />
            PDF
          </a>
        )}
        {project.githubUrl && project.githubUrl.length > 0 && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-md px-3 text-xs font-medium text-text-muted transition-colors hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="h-3.5 w-3.5" aria-hidden />
            Code
          </a>
        )}
        {showcaseHref && (
          <Link
            href={showcaseHref}
            className="inline-flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-md text-xs font-medium text-accent-primary transition-colors hover:bg-accent-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
          >
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            Explore
          </Link>
        )}
      </div>
    </article>
  );
}
