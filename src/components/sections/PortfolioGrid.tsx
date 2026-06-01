"use client";

import { useState } from "react";
import { projects } from "@/src/data/projects";
import ProjectCard from "@/src/components/ui/ProjectCard";
import ProjectModal from "@/src/components/ui/ProjectModal";
import { useServerConfig } from "@/src/hooks/useServerConfig";
import type { Project } from "@/src/types";

type PortfolioGridProps = {
  /** When true, renders inside a parent section (e.g. home portfolio block). */
  embedded?: boolean;
};

export default function PortfolioGrid({ embedded = false }: PortfolioGridProps) {
  const [selected, setSelected] = useState<Project | null>(null);
  const { tunnelUrl } = useServerConfig();

  const grid = (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
  );

  const modal = (
    <ProjectModal
      project={selected}
      dynamicLiveUrl={tunnelUrl}
      onClose={() => setSelected(null)}
    />
  );

  if (embedded) {
    return (
      <div className="mt-12" aria-label="Project grid">
        {grid}
        {modal}
      </div>
    );
  }

  return (
    <section className="section-pad pt-12" aria-label="Project grid">
      <div className="container-narrow">
        {grid}
      </div>
      {modal}
    </section>
  );
}
