"use client";

import { FileText, ExternalLink } from "lucide-react";
import { RESEARCH_PUBLICATION } from "@/src/data/portfolioJourneyData";
import JourneyReveal from "@/src/components/portfolio-journey/motion/JourneyReveal";

export default function ResearchPublication() {
  const pub = RESEARCH_PUBLICATION;

  return (
    <section
      id="research"
      className="pj-section scroll-mt-14 border-t border-[var(--pj-border)]"
      aria-labelledby="research-heading"
    >
      <div className="pj-container">
        <JourneyReveal>
          <p className="pj-kicker">03 — Research Foundation</p>
          {/* 🌟 ปรับพาดหัวให้ดูสะท้อนกระบวนการคิดเชิงวิทยาศาสตร์และการประยุกต์ใช้ข้อมูลมากขึ้น */}
          <h2 id="research-heading" className="pj-headline mt-4 text-balance">
            Scientific Methodology & Data-Driven Investigation
          </h2>
        </JourneyReveal>

        <JourneyReveal className="mt-12" delay={0.05}>
          <article className="pj-card p-8 sm:p-10 border border-[var(--pj-border)] bg-[var(--pj-bg-card)]">
            <p className="font-mono text-xs tracking-wider text-[var(--pj-text-muted)] uppercase">
              Graduation Thesis · {pub.period}
            </p>
            <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-[var(--pj-text)] text-balance">
              {pub.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-[var(--pj-accent)]">
              {pub.institution}
            </p>
            <p className="pj-body mt-6 text-sm leading-[1.8] text-[var(--pj-text-muted)] text-pretty">
              {pub.abstract}
            </p>
            
            {/* 🛠️ เช็คเงื่อนไขว่ามี URL ก่อนแสดงปุ่ม เพื่อความปลอดภัยของระบบ */}
            {pub.documentUrl && (
              <div className="mt-8 pt-2">
                <a
                  href={pub.documentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm transition-all hover:opacity-90"
                >
                  <FileText className="h-4 w-4" aria-hidden />
                  Read full document
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden />
                </a>
              </div>
            )}
          </article>
        </JourneyReveal>
      </div>
    </section>
  );
}