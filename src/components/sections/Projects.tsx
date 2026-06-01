"use client";

import { useState } from "react";
import { projects } from "@/src/data/projects";
import ProjectCard from "@/src/components/ui/ProjectCard";
import ProjectModal from "@/src/components/ui/ProjectModal";
import SectionReveal from "@/src/components/ui/SectionReveal";
import { useServerConfig } from "@/src/hooks/useServerConfig";
import type { Project } from "@/src/types";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const { tunnelUrl } = useServerConfig();

  return (
    <section
      id="projects"
      className="section-pad scroll-mt-20 bg-bg-secondary/50"
      aria-labelledby="projects-heading"
    >
      <div className="container-narrow">
        <SectionReveal>
          <p className="font-mono text-xs tracking-[0.2em] text-accent-primary uppercase">
            Projects
          </p>
          <h2
            id="projects-heading"
            className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Things I&apos;ve built
          </h2>
          <p className="mt-4 max-w-2xl text-text-muted">
            Infrastructure, apps, freelance work, and academic projects—click a
            card for the full story. Homelab live URL resolves from Firestore at
            runtime.
          </p>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <li key={project.id}>
                <ProjectCard
                  project={project}
                  dynamicLiveUrl={tunnelUrl}
                  onSelect={setSelected}
                />
              </li>
            ))}
          </ul>
        </SectionReveal>
      </div>

      <ProjectModal
        project={selected}
        dynamicLiveUrl={tunnelUrl}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
