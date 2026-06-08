"use client";

import { ACHIEVEMENT_TIMELINE } from "@/src/data/portfolioJourneyData";
import JourneyReveal from "@/src/components/portfolio-journey/motion/JourneyReveal";
import StaggerGroup, {
  staggerItem,
} from "@/src/components/portfolio-journey/motion/StaggerGroup";
import { motion } from "framer-motion";
import { Trophy, Shield, Terminal } from "lucide-react";

// ฟังก์ชันสำหรับเลือกไอคอนตามประเภทงานเพื่อความใส่ใจในดีเทล
function getEventIcon(id: string) {
  if (id.includes("cyber")) return <Shield className="h-4 w-4" />;
  if (id.includes("hackathon")) return <Terminal className="h-4 w-4" />;
  return <Trophy className="h-4 w-4" />;
}

export default function AchievementsTimeline() {
  return (
    <section
      id="achievements"
      className="pj-section scroll-mt-14 border-t border-[var(--pj-border)]"
      aria-labelledby="achievements-heading"
    >
      <div className="pj-container">
        <JourneyReveal>
          <p className="pj-kicker">01 — Track Record</p>
          <h2 id="achievements-heading" className="pj-headline mt-4">
            Validated Competence
          </h2>
          <p className="pj-body-muted mt-2 max-w-xl text-sm">
            Translating core computational logic into security investigations and rapid production architectures under national-level constraints.
          </p>
        </JourneyReveal>

        {/* 🛠️ ปรับเป็น md:grid-cols-2 เพื่อรองรับ 3 การ์ดอย่างลงตัว */}
        <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2">
          {ACHIEVEMENT_TIMELINE.map((event) => (
            <motion.article
              key={event.id}
              variants={staggerItem}
              className={`pj-card p-6 sm:p-7 flex flex-col justify-between ${
                event.featured 
                  ? "pj-card-featured md:col-span-2 border-[var(--pj-border-strong)]" 
                  : "bg-[var(--pj-bg-card-muted)]"
              }`}
            >
              <div>
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                  event.featured 
                    ? "bg-[var(--pj-accent-soft)] text-[var(--pj-accent)]" 
                    : "bg-[var(--pj-bg-icon-muted)] text-[var(--pj-text-muted)]"
                }`}>
                  {getEventIcon(event.id)}
                </div>
                
                <time className="mt-5 block font-mono text-xs font-medium text-[var(--pj-accent)]">
                  {event.year}{event.month ? ` · ${event.month}` : ""}
                </time>
                
                <h3 className={`mt-2 font-semibold text-[var(--pj-text)] ${
                  event.featured ? "text-lg sm:text-xl" : "text-base"
                }`}>
                  {event.title}
                </h3>
                
                <p className="mt-0.5 text-sm text-[var(--pj-accent)]">
                  {event.subtitle}
                </p>
                
                <p className="pj-body-muted mt-3 text-sm leading-relaxed text-balance">
                  {event.description}
                </p>
              </div>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}