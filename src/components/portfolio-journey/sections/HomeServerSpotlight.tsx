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
    description: "Secure ingress via outbound-only Cloudflare Tunnels.",
  },
  {
    icon: Layers,
    title: "Dynamic registry",
    description: "Firestore resolves dynamic service endpoints at runtime.",
  },
  {
    icon: Zap,
    title: "Local AI pipeline",
    description: "Offline Gemma-2B instance for private text inference.",
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
          {/* 🌟 ปรับเป็นลำดับที่ 01 ให้สอดคล้องกับ Storytelling ใหม่ */}
          <p className="pj-kicker">02 — Systems Architecture</p>
          <h2 id="home-server-heading" className="pj-headline mt-4 text-balance">
            Hybrid-Cloud Infrastructure & Automated Ecosystem
          </h2>
          {/* 🚀 ยกระดับคำโปรยให้ดูมีมาตราฐานวิศวกรรมระบบมากขึ้น */}
          <p className="pj-body mt-4 max-w-2xl text-sm leading-relaxed text-[var(--pj-text-muted)]">
            A secure, self-hosted home server ecosystem built to solve real-world data isolation friction. 
            Integrating automated network tunneling, continuous runtime configuration discovery, and local open-source AI models under hardware I fully control.
          </p>
        </JourneyReveal>

        <JourneyReveal className="mt-12" delay={0.1}>
          <div className="pj-inset-dark p-6 sm:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-kicker text-[0.625rem] font-mono tracking-wider text-text-muted">
                Interactive Architecture Map
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
          {HIGHLIGHTS.map((item) => {
            // 🛠️ ดึงมาประกาศเป็นตัวแปรพิมพ์ใหญ่ตามกฎ JSX Best Practice
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="pj-card p-6 border border-[var(--pj-border)] bg-[var(--pj-bg-card)]"
              >
                <IconComponent
                  className="h-5 w-5 text-[var(--pj-accent)]"
                  aria-hidden
                />
                <h3 className="mt-4 text-sm font-semibold text-[var(--pj-text)]">
                  {item.title}
                </h3>
                <p className="pj-body-muted mt-2 text-xs leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}