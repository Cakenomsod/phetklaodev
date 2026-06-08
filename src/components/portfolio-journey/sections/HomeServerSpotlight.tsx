"use client";

import Link from "next/link";
import { ArrowRight, Shield, Layers, Zap } from "lucide-react";
import ArchitectureGraph from "@/src/components/home-server/graph/ArchitectureGraph";
import AnimatedCounter from "@/src/components/home-server/motion/AnimatedCounter";
import { SYSTEM_IMPACT } from "@/src/data/homeServerShowcase";
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
      className="pj-section border-t border-[var(--pj-border)] bg-[var(--pj-bg-subtle)]"
      aria-labelledby="home-server-heading"
    >
      <div className="pj-container">
        <JourneyReveal>
          <p className="pj-kicker">Centerpiece</p>
          <h2 id="home-server-heading" className="pj-headline mt-4 text-balance">
            Home Server Ecosystem
          </h2>
          <p className="pj-body mt-6 max-w-2xl">
            A self-hosted infrastructure that bridges local microservices with
            public cloud—secure by default, event-driven, and designed to survive
            reboots. This is systems thinking made tangible.
          </p>
        </JourneyReveal>

        <JourneyReveal className="mt-12" delay={0.1}>
          <div className="pj-inset-dark p-6 sm:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <p className="font-mono text-xs tracking-[0.15em] text-slate-400 uppercase">
                Interactive Architecture
              </p>
              <Link
                href="/projects/home-server"
                className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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

        <StaggerGroup className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {SYSTEM_IMPACT.map((metric) => (
            <motion.div
              key={metric.id}
              variants={staggerItem}
              className="rounded-xl border border-[var(--pj-border)] bg-white p-5 text-center"
            >
              <p className="text-2xl font-semibold tracking-tight text-[var(--pj-text)]">
                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix}
                />
              </p>
              <p className="mt-2 text-xs font-medium text-[var(--pj-text-secondary)]">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
