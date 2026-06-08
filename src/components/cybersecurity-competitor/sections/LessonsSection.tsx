"use client";

import { LESSONS_LEARNED } from "@/src/data/cybersecurityCompetitorShowcase";
import ScrollReveal from "@/src/components/cybersecurity-competitor/motion/ScrollReveal";

export default function LessonsSection() {
  return (
    <section
      className="section-pad border-t border-border-subtle"
      aria-labelledby="cyber-lessons-title"
    >
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-kicker">What Stuck</p>
          <h2
            id="cyber-lessons-title"
            className="text-headline mt-4 max-w-3xl text-balance"
          >
            Rankings fade. The method stays.
          </h2>
        </ScrollReveal>

        <div className="mt-14 space-y-0 divide-y divide-border-subtle border-y border-border-subtle">
          {LESSONS_LEARNED.map((lesson, i) => (
            <ScrollReveal key={lesson.id} delay={i * 0.06}>
              <article className="grid gap-4 py-8 sm:grid-cols-[140px_1fr] sm:gap-10">
                <p className="font-mono text-[10px] tracking-[0.18em] text-accent-primary/80 uppercase">
                  {lesson.kicker}
                </p>
                <div>
                  <h3 className="text-base font-semibold text-text-primary">
                    {lesson.headline}
                  </h3>
                  <p className="text-body mt-3 text-sm leading-relaxed">
                    {lesson.body}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
