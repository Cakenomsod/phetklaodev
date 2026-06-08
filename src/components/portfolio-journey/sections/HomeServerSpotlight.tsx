"use client";

import Link from "next/link";
import { ArrowRight, Shield, Layers, Zap } from "lucide-react";
import ArchitectureGraph from "@/src/components/home-server/graph/ArchitectureGraph";
import JourneyReveal from "@/src/components/portfolio-journey/motion/JourneyReveal";
import StaggerGroup, {
  staggerItem,
} from "@/src/components/portfolio-journey/motion/StaggerGroup";
import { motion } from "framer-motion";

const HIGHLIGHTS = [
  {
    icon: Shield,
    title: "Zero exposed ports",
    description: "Outbound-only Cloudflare Tunnels keep the home network closed.",
  },
  {
    icon: Layers,
    title: "Live registry",
    description: "Firestore publishes tunnel URLs—apps resolve endpoints at runtime.",
  },
  {
    icon: Zap,
    title: "Local AI path",
    description: "Gemma-2B runs offline for privacy-sensitive receipt parsing.",
  },
];

export default function HomeServerSpotlight() {
  return (
    <section
      id="home-server"
      className="pj-section scroll-mt-14 border-t border-[var(--pj-border)] bg-[var(--pj-bg-subtle)]"
      aria-labelledby="home-server-heading"
    >
      <div className="pj-container">
        <JourneyReveal>
          <p className="pj-kicker">01 — Centerpiece</p>
          <h2 id="home-server-heading" className="pj-headline mt-4 text-balance">
            Home Server Ecosystem
          </h2>
          <p className="pj-body mt-6 max-w-2xl">
            Self-hosted infrastructure bridging local microservices with public
            cloud—secure by default, event-driven, designed to survive reboots.
          </p>
        </JourneyReveal>

        <JourneyReveal className="mt-12" delay={0.1}>
          <div className="pj-inset-dark p-6 sm:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-kicker text-[0.625rem] text-text-muted">
                Interactive Architecture
              </p>
              <Link
                href="/projects/home-server"
                className="btn-secondary px-4 py-2 text-xs"
              >
                Full case study
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
            <ArchitectureGraph />
          </div>
        </JourneyReveal>

        <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              className="pj-card p-6"
            >
              <item.icon
                className="h-5 w-5 text-[var(--pj-accent)]"
                aria-hidden
              />
              <h3 className="mt-4 text-sm font-semibold text-[var(--pj-text)]">
                {item.title}
              </h3>
              <p className="pj-body-muted mt-2 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
