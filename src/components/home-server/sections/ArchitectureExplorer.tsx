"use client";

import ArchitectureGraph from "@/src/components/home-server/graph/ArchitectureGraph";
import ScrollReveal from "@/src/components/home-server/motion/ScrollReveal";

export default function ArchitectureExplorer() {
  return (
    <section
      id="architecture"
      className="border-t border-white/5 py-28 sm:py-36"
      aria-labelledby="hs-arch-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="font-mono text-xs tracking-[0.2em] text-accent-primary uppercase">
            Interactive Explorer
          </p>
          <h2
            id="hs-arch-title"
            className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Live system topology
          </h2>
          <p className="mt-5 max-w-xl text-text-muted">
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
