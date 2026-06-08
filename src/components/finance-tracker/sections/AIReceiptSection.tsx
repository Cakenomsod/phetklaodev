"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  ArrowDown,
  Check,
  FileImage,
  Sparkles,
} from "lucide-react";
import { AI_PIPELINE_STAGES } from "@/src/data/financeTrackerShowcase";
import ScrollReveal from "@/src/components/finance-tracker/motion/ScrollReveal";
import { cn } from "@/src/lib/utils";

function StageContent({ stageId }: { stageId: string }) {
  const stage = AI_PIPELINE_STAGES.find((s) => s.id === stageId);
  if (!stage) return null;

  switch (stage.id) {
    case "receipt":
      return (
        <div className="space-y-3">
          <div className="flex h-32 items-center justify-center rounded-lg border border-dashed border-border-default bg-bg-tertiary/50">
            <FileImage className="h-10 w-10 text-text-muted/40" aria-hidden />
          </div>
          <div className="space-y-1 font-mono text-xs text-text-muted">
            <p>{stage.content.merchant}</p>
            <p className="text-lg font-semibold text-text-primary">{stage.content.total}</p>
            <p>{stage.content.items.join(" · ")}</p>
          </div>
        </div>
      );

    case "regex":
      return (
        <div className="space-y-3 font-mono text-xs">
          <ul className="space-y-1.5">
            {stage.content.extracted.map((line) => (
              <li key={line} className="rounded bg-bg-tertiary px-2 py-1 text-accent-primary">
                {line}
              </li>
            ))}
          </ul>
          <p className="text-text-muted">
            Stripped: {stage.content.stripped.join(", ")}
          </p>
          <p className="text-accent-primary">
            Token savings: {stage.content.tokenSaved}
          </p>
        </div>
      );

    case "prompt":
      return (
        <div className="space-y-2 font-mono text-xs">
          <p className="rounded bg-bg-tertiary px-2 py-1.5 text-text-muted">
            <span className="text-accent-primary">system:</span> {stage.content.system}
          </p>
          <p className="rounded bg-bg-tertiary px-2 py-1.5 text-text-muted">
            <span className="text-accent-primary">schema:</span> {stage.content.schema}
          </p>
          <p className="text-text-muted">{stage.content.context}</p>
        </div>
      );

    case "gemini":
      return (
        <div className="space-y-2">
          <pre className="overflow-x-auto rounded-lg bg-bg-tertiary p-3 font-mono text-[11px] leading-relaxed text-text-primary">
            {JSON.stringify(stage.content.response, null, 2)}
          </pre>
          <p className="font-mono text-[10px] text-text-muted">
            {stage.content.model} · {stage.content.latency}
          </p>
        </div>
      );

    case "zod":
      return (
        <ul className="space-y-2">
          {stage.content.checks.map((check) => (
            <li
              key={check.field}
              className="flex items-center gap-2 rounded-lg bg-bg-tertiary px-3 py-2 text-sm"
            >
              <Check className="h-3.5 w-3.5 text-emerald-500" aria-hidden />
              <span className="font-mono text-xs text-text-primary">{check.field}</span>
              <span className="ml-auto text-[10px] text-text-muted">{check.note}</span>
            </li>
          ))}
          <p className="font-mono text-[10px] text-text-muted">
            Retries: {stage.content.retries}
          </p>
        </ul>
      );

    case "record":
      return (
        <div className="rounded-lg border border-accent-primary/20 bg-accent-primary/5 p-4">
          <div className="grid grid-cols-2 gap-3 font-mono text-xs">
            <div>
              <p className="text-text-muted">ID</p>
              <p className="text-text-primary">{stage.content.id}</p>
            </div>
            <div>
              <p className="text-text-muted">Trip</p>
              <p className="text-text-primary">{stage.content.trip}</p>
            </div>
            <div>
              <p className="text-text-muted">Payer</p>
              <p className="text-text-primary">{stage.content.payer}</p>
            </div>
            <div>
              <p className="text-text-muted">Per person</p>
              <p className="text-text-primary">฿{stage.content.perPerson}</p>
            </div>
          </div>
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] text-emerald-500 uppercase">
            <Check className="h-3 w-3" aria-hidden />
            {stage.content.status}
          </p>
        </div>
      );

    default:
      return null;
  }
}

export default function AIReceiptSection() {
  const [activeStage, setActiveStage] = useState(0);
  const reduceMotion = useReducedMotion();
  const current = AI_PIPELINE_STAGES[activeStage];

  return (
    <section
      className="section-pad relative border-t border-border-subtle bg-bg-secondary/30"
      aria-labelledby="ft-ai-title"
    >
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-kicker">AI Receipt Processing</p>
          <h2
            id="ft-ai-title"
            className="text-headline mt-4 max-w-3xl text-balance"
          >
            From photo to ledger in six stages
          </h2>
          <p className="text-body mt-6 max-w-2xl">
            Every receipt passes through preprocessing, structured prompting,
            model inference, and schema validation before touching the ledger.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-14" delay={0.08}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
            <div className="flex flex-col gap-1">
              {AI_PIPELINE_STAGES.map((stage, index) => (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStage(index)}
                  className={cn(
                    "group flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors",
                    activeStage === index
                      ? "border-accent-primary/40 bg-bg-tertiary"
                      : "border-transparent hover:border-border-default hover:bg-bg-secondary/50",
                  )}
                  aria-pressed={activeStage === index}
                >
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-[10px]",
                      activeStage === index
                        ? "bg-accent-primary text-white"
                        : "bg-bg-tertiary text-text-muted",
                    )}
                  >
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-mono text-[9px] tracking-wider text-text-muted uppercase">
                      {stage.kicker}
                    </p>
                    <p className="text-sm font-medium text-text-primary">
                      {stage.label}
                    </p>
                  </div>
                  {index < AI_PIPELINE_STAGES.length - 1 && (
                    <ArrowDown
                      className="ml-auto h-3.5 w-3.5 text-text-muted/30 lg:hidden"
                      aria-hidden
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="relative min-h-[320px] rounded-2xl border border-border-default bg-bg-secondary/50 p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent-primary" aria-hidden />
                <p className="font-mono text-[10px] tracking-[0.16em] text-accent-primary uppercase">
                  Stage {activeStage + 1} · {current.kicker}
                </p>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="mt-6"
                >
                  <h3 className="text-lg font-semibold text-text-primary">
                    {current.label}
                  </h3>
                  <div className="mt-5">
                    <StageContent stageId={current.id} />
                  </div>
                </motion.div>
              </AnimatePresence>

              {!reduceMotion && (
                <motion.div
                  className="absolute right-6 bottom-6 flex gap-1"
                  aria-hidden
                >
                  {AI_PIPELINE_STAGES.map((_, i) => (
                    <motion.span
                      key={i}
                      className={cn(
                        "h-1 rounded-full",
                        i === activeStage
                          ? "w-6 bg-accent-primary"
                          : "w-1 bg-border-default",
                      )}
                      animate={i === activeStage ? { opacity: [0.5, 1, 0.5] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
