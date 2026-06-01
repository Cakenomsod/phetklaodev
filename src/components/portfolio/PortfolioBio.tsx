"use client";

import { useState } from "react";
import PortfolioSection from "@/src/components/portfolio/PortfolioSection";
import type { PersonalInfo } from "@/src/data/portfolioData";
import { Github, Instagram, Mail, Phone } from "lucide-react";
import A4PreviewModal from "@/src/components/portfolio/A4PreviewModal";

type PortfolioBioProps = {
  paragraphs: string[];
  personal?: PersonalInfo;
};

function contactHref(type: "email" | "phone" | "url", value: string) {
  const trimmed = value.trim();
  if (!trimmed || trimmed.startsWith("[")) return null;
  if (type === "email") return `mailto:${trimmed}`;
  if (type === "phone") return `tel:${trimmed.replace(/\s/g, "")}`;
  return trimmed;
}

export default function PortfolioBio({ paragraphs, personal }: PortfolioBioProps) {
  // 🛠️ ปรับสเตตัสเก็บข้อมูลลิงก์ที่จะพรีวิว (null = ปิดโมดอล)
  const [activePreview, setActivePreview] = useState<string | string[] | null>(null);

  // 🛠️ ประกาศ Asset ID จาก Immich (ใส่ ID จริงลงไปได้เลยครับ)
  const ieltsAssetId = "1fc71782-651f-42cb-9553-46a6b60b4faf";
  
  // สมมติกรณี GPAX มี 2 หน้า ให้จับใส่ Array ไว้แบบนี้ครับ
  const gpaxAssetIds = [
    "c0ab3469-3dda-4fcb-88ac-cb510fac8882",
    "deb62a64-1eb7-48dd-993d-a813844419f5"
  ];

  const emailHref = personal ? contactHref("email", personal.email) : null;
  const phoneHref = personal ? contactHref("phone", personal.phone) : null;
  const githubHref = personal ? contactHref("url", personal.github) : null;
  const instagramHref = personal ? contactHref("url", personal.instagram) : null;

  return (
    <PortfolioSection id="bio" label="About" title="Biography">
      {personal && (
        <>
          <h2 className="text-balance text-2xl font-bold tracking-tight text-[var(--portfolio-text)]">
            {personal.name}
            {personal.nickname && !personal.nickname.startsWith("[") && (
              <span className="font-semibold text-[var(--portfolio-muted)]">
                {" "}
                ({personal.nickname})
              </span>
            )}
          </h2>

          <p className="mt-4 text-lg font-semibold text-[var(--portfolio-text)]">{personal.program}</p>
          <p className="mt-1 text-base text-[var(--portfolio-muted)]">{personal.school}</p>

          <ul className="mt-6 flex flex-col gap-3 text-sm sm:text-base">
            {emailHref && (
              <li className="flex items-center gap-3">
                <Mail
                  className="h-4 w-4 shrink-0 text-[var(--portfolio-blue)]"
                  aria-hidden
                />
                <a href={emailHref} className="font-medium no-underline">
                  {personal.email}
                </a>
              </li>
            )}
            {phoneHref && (
              <li className="flex items-center gap-3">
                <Phone
                  className="h-4 w-4 shrink-0 text-[var(--portfolio-blue)]"
                  aria-hidden
                />
                <a href={phoneHref} className="font-medium no-underline">
                  {personal.phone}
                </a>
              </li>
            )}
            {githubHref && (
              <li className="flex items-center gap-3">
                <Github
                  className="h-4 w-4 shrink-0 text-[var(--portfolio-blue)]"
                  aria-hidden
                />
                <a
                  href={githubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium no-underline"
                >
                  GitHub
                </a>
              </li>
            )}
            {instagramHref && (
              <li className="flex items-center gap-3">
                <Instagram
                  className="h-4 w-4 shrink-0 text-[var(--portfolio-blue)]"
                  aria-hidden
                />
                <a
                  href={instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium no-underline"
                >
                  Instagram
                </a>
              </li>
            )}
          </ul>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div 
              className="rounded-lg border border-[var(--portfolio-border)] bg-[var(--portfolio-surface)] px-4 py-3 cursor-pointer transition-colors hover:bg-[var(--portfolio-tertiary)]"
              role="button"
              tabIndex={0}
              onClick={() => {
                const urls = gpaxAssetIds.map(id => `/api/proxy-image?assetId=${id}`);
                setActivePreview(urls);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  const urls = gpaxAssetIds.map(id => `/api/proxy-image?assetId=${id}`);
                  setActivePreview(urls);
                }
              }}
            >
              <dt className="text-xs font-semibold tracking-wide text-[var(--portfolio-muted)] uppercase">
                GPAX
              </dt>
              <dd className="mt-1 text-lg font-semibold text-[var(--portfolio-blue)]">
                {personal.gpax}

                <p className="mt-1 text-xs text-[var(--portfolio-muted)]">
                  Click to view certificate
                </p>
              </dd>
            </div>

            <div
              className="rounded-lg border border-[var(--portfolio-border)] bg-[var(--portfolio-surface)] px-4 py-3 cursor-pointer transition-colors hover:bg-[var(--portfolio-tertiary)]"
              role="button"
              tabIndex={0}
              onClick={() => setActivePreview(`/api/proxy-image?assetId=${ieltsAssetId}`)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActivePreview(`/api/proxy-image?assetId=${ieltsAssetId}`);
                }
              }}
            >
              <dt className="text-xs font-semibold tracking-wide text-[var(--portfolio-muted)] uppercase">
                IELTS
              </dt>
              <dd className="mt-1 text-lg font-semibold text-[var(--portfolio-blue)]">
                {personal.ielts}

                <p className="mt-1 text-xs text-[var(--portfolio-muted)]">
                  Click to view certificate
                </p>
              </dd>
            </div>

            <A4PreviewModal 
              open={activePreview !== null} 
              initialLink={activePreview} 
              onClose={() => setActivePreview(null)} 
            />
          </dl>
        </>
      )}
      <div className="mt-8 space-y-5 text-base leading-relaxed text-[var(--portfolio-muted)] sm:text-lg sm:leading-[1.75]">
        {paragraphs.map((paragraph, index) => (
          <p key={`bio-${index}`}>{paragraph}</p>
        ))}
      </div>
    </PortfolioSection>
  );
}