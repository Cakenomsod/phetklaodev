"use client";

import { useEffect, useRef } from "react";
import { X, ExternalLink, FileText } from "lucide-react";
import type { Project } from "@/src/types";
import { cn } from "@/src/lib/utils";

type ProjectModalProps = {
  project: Project | null;
  dynamicLiveUrl?: string | null;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  dynamicLiveUrl,
  onClose,
}: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

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

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label="Close dialog"
        onClick={onClose}
      />

      <div className="relative z-10 max-h-[min(90vh,720px)] w-full max-w-2xl overflow-y-auto rounded-xl border border-white/10 bg-bg-secondary shadow-2xl">
        <div className="sticky top-0 flex items-start justify-between gap-4 border-b border-white/5 bg-bg-secondary px-6 py-4">
          <div>
            <p className="font-mono text-[10px] tracking-widest text-accent-primary uppercase">
              {project.category}
            </p>
            <h2
              id="project-modal-title"
              className="mt-1 text-xl font-semibold text-text-primary"
            >
              {project.title}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-text-muted transition-colors hover:bg-bg-tertiary hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-6 py-6">
          <p className="text-sm leading-relaxed text-text-muted">
            {project.fullDescription}
          </p>

          {project.highlights.length > 0 && (
            <div className="mt-6">
              <h3 className="font-mono text-xs tracking-widest text-text-muted uppercase">
                Highlights
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-text-primary">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {project.techStack.length > 0 && (
            <div className="mt-6">
              <h3 className="font-mono text-xs tracking-widest text-text-muted uppercase">
                Tech stack
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <li key={tech}>
                    <span className="rounded bg-bg-tertiary px-2.5 py-1 font-mono text-xs text-text-muted">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            {resolvedLiveUrl && (
              <a
                href={resolvedLiveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-accent-primary px-5 py-2.5 text-sm font-semibold text-bg-primary hover:bg-[#33ddff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
              >
                <ExternalLink className="h-4 w-4" aria-hidden />
                Open live
              </a>
            )}
            {pdfUrl && (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex min-h-11 items-center gap-2 rounded-md border border-white/10 px-5 py-2.5 text-sm font-medium text-accent-primary hover:bg-accent-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary",
                )}
              >
                <FileText className="h-4 w-4" aria-hidden />
                View PDF
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="inline-flex min-h-11 items-center rounded-md px-5 py-2.5 text-sm font-medium text-text-muted hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
