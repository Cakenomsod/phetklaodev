"use client";

import ArchitectureGraph from "@/src/components/home-server/graph/ArchitectureGraph";
import ScrollReveal from "@/src/components/home-server/motion/ScrollReveal";

export default function ArchitectureExplorer() {
  return (
    <section
      id="architecture"
      className="section-pad border-t border-border-subtle"
      aria-labelledby="hs-arch-title"
    >
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-kicker">Interactive Explorer</p>
          <h2
            id="hs-arch-title"
            className="text-headline mt-4 max-w-2xl text-balance"
          >
            Live system topology
          </h2>
          <p className="text-body-muted mt-5 max-w-xl">
            Seven nodes, ten data paths—hover to see how traffic and configuration
            move through the ecosystem. Click any node to inspect its role.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-16" delay={0.1}>
          <ArchitectureGraph />
        </ScrollReveal>
      </div>
    </section>
  );
}
