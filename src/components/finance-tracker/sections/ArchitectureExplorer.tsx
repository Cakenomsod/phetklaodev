"use client";

import ArchitectureGraph from "@/src/components/finance-tracker/graph/ArchitectureGraph";
import ScrollReveal from "@/src/components/finance-tracker/motion/ScrollReveal";

export default function ArchitectureExplorer() {
  return (
    <section
      id="architecture"
      className="section-pad relative border-t border-border-subtle"
      aria-labelledby="ft-arch-title"
    >
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-kicker">Architecture</p>
          <h2
            id="ft-arch-title"
            className="text-headline mt-4 max-w-3xl text-balance"
          >
            Hybrid cloud by design, not accident
          </h2>
          <p className="text-body mt-6 max-w-2xl">
            Each layer handles what it does best—real-time sync in Firestore,
            private media on Immich, AI compute in the cloud with a local fallback.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-14" delay={0.1}>
          <ArchitectureGraph />
        </ScrollReveal>
      </div>
    </section>
  );
}
