"use client";

import {
  Mail,
  Github,
  FileText,
  ExternalLink,
  GraduationCap,
  Languages,
} from "lucide-react";
import { CONTACT_LINKS, HERO_CONTENT } from "@/src/data/portfolioJourneyData";
import JourneyReveal from "@/src/components/portfolio-journey/motion/JourneyReveal";
import StaggerGroup, {
  staggerItem,
} from "@/src/components/portfolio-journey/motion/StaggerGroup";
import { motion } from "framer-motion";

const links = [
  {
    label: "Email",
    value: CONTACT_LINKS.email,
    href: `mailto:${CONTACT_LINKS.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "Cakepuarknomsod",
    href: CONTACT_LINKS.github,
    icon: Github,
    external: true,
  },
  {
    label: "Portfolio PDF",
    value: "Download full document",
    href: CONTACT_LINKS.pdfUrl,
    icon: FileText,
    external: true,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="pj-section scroll-mt-14 border-t border-[var(--pj-border)]"
      aria-labelledby="contact-heading"
    >
      <div className="pj-container">
        <JourneyReveal>
          <p className="pj-kicker">05 — Connection</p>
          <h2 id="contact-heading" className="pj-headline mt-4">
            Contact & Credentials
          </h2>
        </JourneyReveal>

        <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-3">
          {links.map((link) => {
            // 🛠️ ดึงมาประกาศเป็นตัวแปรพิมพ์ใหญ่ตามกฎ JSX Best Practice
            const IconComponent = link.icon;
            return (
              <motion.a
                key={link.label}
                variants={staggerItem}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="pj-card group flex flex-col justify-between p-6 border border-[var(--pj-border)] bg-[var(--pj-bg-card)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pj-accent)]"
              >
                <div>
                  {/* 🛠️ ย้ายไอคอนภายนอกขึ้นมาจัด Layout คู่กับไอคอนหลักแบบกระจายซ้าย-ขวา */}
                  <div className="flex items-center justify-between w-full">
                    <IconComponent
                      className="h-5 w-5 text-[var(--pj-accent)]"
                      aria-hidden
                    />
                    {link.external && (
                      <ExternalLink
                        className="h-3.5 w-3.5 text-[var(--pj-text-muted)] transition-colors group-hover:text-[var(--pj-accent)]"
                        aria-hidden
                      />
                    )}
                  </div>
                  <span className="mt-5 block text-xs font-semibold tracking-wider text-[var(--pj-text-muted)] uppercase">
                    {link.label}
                  </span>
                  <span className="mt-1 block text-sm font-medium text-[var(--pj-text)] group-hover:text-[var(--pj-accent)] break-all">
                    {link.value}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </StaggerGroup>

        <JourneyReveal className="mt-12" delay={0.1}>
          <div className="flex flex-wrap gap-6 rounded-xl border border-[var(--pj-border)] bg-[var(--pj-bg-subtle)] px-6 py-5">
            <div className="flex items-center gap-3">
              <GraduationCap
                className="h-4 w-4 text-[var(--pj-text-muted)]"
                aria-hidden
              />
              <span className="text-sm text-[var(--pj-text-secondary)]">
                GPAX <strong className="text-[var(--pj-text)]">{CONTACT_LINKS.gpax}</strong>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Languages
                className="h-4 w-4 text-[var(--pj-text-muted)]"
                aria-hidden
              />
              <span className="text-sm text-[var(--pj-text-secondary)]">
                IELTS <strong className="text-[var(--pj-text)]">{CONTACT_LINKS.ielts}</strong>
              </span>
            </div>
          </div>
        </JourneyReveal>

        <footer className="mt-20 border-t border-[var(--pj-border)] pt-10 text-center">
          <p className="text-sm text-[var(--pj-text-muted)]">
            {HERO_CONTENT.name} · Application Portfolio {new Date().getFullYear()}
          </p>
          <p className="mt-2 text-xs text-[var(--pj-text-muted)]">
            Yuan Ze University · International Bachelor Program in Informatics
          </p>
        </footer>
      </div>
    </section>
  );
}