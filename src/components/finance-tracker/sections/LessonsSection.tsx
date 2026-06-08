"use client";

import { LESSONS_LEARNED } from "@/src/data/financeTrackerShowcase";
import ScrollReveal from "@/src/components/finance-tracker/motion/ScrollReveal";

export default function LessonsSection() {
  return (
    <section
      className="section-pad relative border-t border-border-subtle bg-bg-secondary/30"
      aria-labelledby="ft-lessons-title"
    >
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-kicker">Lessons Learned</p>
          <h2
            id="ft-lessons-title"
            className="text-headline mt-4 max-w-3xl text-balance"
          >
            What I would tell my past self
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {LESSONS_LEARNED.map((lesson, index) => (
            <ScrollReveal key={lesson.id} delay={index * 0.06}>
              <article className="h-full rounded-2xl border border-border-default bg-bg-secondary/50 p-6 sm:p-7">
                <p className="font-mono text-[10px] tracking-[0.18em] text-accent-primary/80 uppercase">
                  {lesson.kicker}
                </p>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-text-primary">
                  {lesson.headline}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-text-muted">
                  {lesson.body}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
