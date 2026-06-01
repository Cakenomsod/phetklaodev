import SectionReveal from "@/src/components/ui/SectionReveal";
import type { PersonalInfo } from "@/src/data/portfolioData";
import { Github, Instagram, Mail, Phone } from "lucide-react";

type PortfolioHeaderProps = {
  personal: PersonalInfo;
};

function contactHref(type: "email" | "phone" | "url", value: string) {
  const trimmed = value.trim();
  if (!trimmed || trimmed.startsWith("[")) return null;
  if (type === "email") return `mailto:${trimmed}`;
  if (type === "phone") return `tel:${trimmed.replace(/\s/g, "")}`;
  return trimmed;
}

export default function PortfolioHeader({ personal }: PortfolioHeaderProps) {
  const emailHref = contactHref("email", personal.email);
  const phoneHref = contactHref("phone", personal.phone);
  const githubHref = contactHref("url", personal.github);
  const instagramHref = contactHref("url", personal.instagram);

  return (
    <header className="border-b border-[var(--portfolio-border)] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-[0.18em] text-[var(--portfolio-blue)] uppercase">
            Application Portfolio
          </p>
          <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[var(--portfolio-text)] sm:text-4xl">
            {personal.name}
            {personal.nickname && !personal.nickname.startsWith("[") && (
              <span className="font-semibold text-[var(--portfolio-muted)]">
                {" "}
                ({personal.nickname})
              </span>
            )}
          </h1>
          <p className="mt-2 text-lg text-[var(--portfolio-muted)]">
            {personal.program}
          </p>
          <p className="mt-1 text-base text-[var(--portfolio-muted)]">
            {personal.school}
          </p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-[var(--portfolio-border)] bg-[var(--portfolio-surface)] px-4 py-3">
              <dt className="text-xs font-semibold tracking-wide text-[var(--portfolio-muted)] uppercase">
                GPAX
              </dt>
              <dd className="mt-1 text-lg font-semibold text-[var(--portfolio-blue)]">
                {personal.gpax}
              </dd>
            </div>
            <div className="rounded-lg border border-[var(--portfolio-border)] bg-[var(--portfolio-surface)] px-4 py-3">
              <dt className="text-xs font-semibold tracking-wide text-[var(--portfolio-muted)] uppercase">
                IELTS
              </dt>
              <dd className="mt-1 text-lg font-semibold text-[var(--portfolio-blue)]">
                {personal.ielts}
              </dd>
            </div>
          </dl>

          <ul className="mt-8 flex flex-col gap-3 text-sm sm:text-base">
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
        </SectionReveal>
      </div>
    </header>
  );
}
