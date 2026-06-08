"use client";

import { WHY_YZU_CONTENT } from "@/src/data/portfolioJourneyData";
import JourneyReveal from "@/src/components/portfolio-journey/motion/JourneyReveal";

export default function WhyYZUSection() {
  return (
    <section
      id="why-yzu"
      className="pj-section scroll-mt-14 border-t border-[var(--pj-border)] bg-[var(--pj-bg-subtle)]"
      aria-labelledby="why-yzu-heading"
    >
      <div className="pj-container">
        <JourneyReveal className="relative mx-auto max-w-3xl">
          {/* 🎨 เปลี่ยนมาใช้ตัวแปร CSS เพื่อรองรับการสลับ Theme ที่สมบูรณ์แบบ */}
          <span
            className="pointer-events-none absolute -top-8 -left-3 font-serif text-[6.5rem] leading-none select-none opacity-20 sm:-left-4 sm:text-[8rem]"
            style={{ color: "var(--pj-accent)" }}
            aria-hidden
          >
            &ldquo;
          </span>

          {/* 🌟 ปรับเป็น Purpose เพื่อให้ดูมีความมุ่งมั่นเชิงเป้าหมายการเรียน */}
          <p className="pj-kicker">04 — Purpose & Vision</p>
          <h2 id="why-yzu-heading" className="pj-headline mt-4 text-balance">
            {WHY_YZU_CONTENT.headline}
          </h2>

          <div className="relative mt-10 space-y-7 pl-6 sm:pl-8">
            {/* 🛠️ ปรับสีเส้นคั่นแนวตั้งให้ผูกกับสี Accent ของระบบ */}
            <div
              className="absolute top-0 bottom-0 left-0 w-px opacity-30"
              style={{ backgroundColor: "var(--pj-accent)" }}
              aria-hidden
            />

            {WHY_YZU_CONTENT.paragraphs.map((paragraph, index) => (
              <p
                // 🛠️ ผสม Index เข้าไปเล็กน้อยเพื่อป้องกัน Key ชนกัน 100%
                key={`${index}-${paragraph.slice(0, 20)}`}
                className="text-base sm:text-lg leading-[1.8] text-[var(--pj-text-muted)] text-pretty"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </JourneyReveal>
      </div>
    </section>
  );
}