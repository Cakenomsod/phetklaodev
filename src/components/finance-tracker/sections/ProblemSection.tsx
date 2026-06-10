"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, MessageSquare, Receipt } from "lucide-react";
import { PROBLEM_SCENARIO } from "@/src/data/financeTrackerShowcase";
import ScrollReveal from "@/src/components/finance-tracker/motion/ScrollReveal";
import { cn } from "@/src/lib/utils";

const EXPENSE_ROTATIONS = [-4, 3, -2, 5, -3, 2, -5, 4];

export default function ProblemSection() {
  const pileRef = useRef<HTMLDivElement>(null);
  const inView = useInView(pileRef, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="section-pad relative border-t border-border-subtle"
      aria-labelledby="ft-problem-title"
    >
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-kicker">The Problem</p>
          <h2
            id="ft-problem-title"
            className="text-headline mt-4 max-w-3xl text-balance"
          >
            Five friends. One trip. Zero clarity.
          </h2>
          <p className="text-body mt-6 max-w-2xl">
            {PROBLEM_SCENARIO.tripName}. By day four, nobody trusted the numbers.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal delay={0.08}>
            <div
              ref={pileRef}
              className="relative min-h-[380px] rounded-2xl border border-border-default bg-bg-secondary/40 p-6 sm:p-8"
            >
              <p className="font-mono text-[10px] tracking-[0.18em] text-text-muted uppercase">
                Expense pile · Day 4
              </p>

              <div className="relative mt-8 h-[300px]">
                {PROBLEM_SCENARIO.expenses.map((expense, i) => (
                  <motion.div
                    key={expense.id}
                    className={cn(
                      "absolute w-[min(100%,220px)] rounded-lg border border-border-default bg-bg-tertiary/90 p-3 shadow-sm backdrop-blur-sm",
                      i % 2 === 0 ? "left-[4%]" : "right-[4%]",
                    )}
                    style={{
                      top: `${i * 28}px`,
                      zIndex: i,
                    }}
                    initial={reduceMotion ? false : { opacity: 0, y: 20, rotate: 0 }}
                    animate={
                      inView
                        ? {
                            opacity: 1,
                            y: 0,
                            rotate: EXPENSE_ROTATIONS[i] ?? 0,
                          }
                        : {}
                    }
                    transition={{
                      delay: i * 0.07,
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <Receipt className="h-3.5 w-3.5 shrink-0 text-accent-primary/60" aria-hidden />
                      <span className="font-mono text-[10px] text-text-muted">
                        ฿{expense.amount.toLocaleString()}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs font-medium text-text-primary">
                      {expense.item}
                    </p>
                    <p className="mt-0.5 text-[10px] text-text-muted">
                      {expense.payer} paid · split {expense.split}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-amber-500/80" aria-hidden />
                  <p className="font-mono text-[10px] tracking-[0.16em] text-amber-500/80 uppercase">
                    Group chat · 11:47 PM
                  </p>
                </div>
                <div className="mt-4 space-y-3 text-sm">
                  <p className="rounded-lg bg-bg-secondary/80 px-3 py-2 text-text-muted">
                    <span className="font-medium text-text-primary">Nam:</span>{" "}
                    wait who owes me for the van??
                  </p>
                  <p className="rounded-lg bg-bg-secondary/80 px-3 py-2 text-text-muted">
                    <span className="font-medium text-text-primary">Beam:</span>{" "}
                    I thought Phet already paid Fah back
                  </p>
                  <p className="rounded-lg bg-bg-secondary/80 px-3 py-2 text-text-muted">
                    <span className="font-medium text-text-primary">Fah:</span>{" "}
                    can someone check the spreadsheet again 😭
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {PROBLEM_SCENARIO.chaosPoints.map((point, i) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-xl border border-border-default bg-bg-secondary/50 px-5 py-4"
                  >
                    <AlertTriangle
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent-primary/60"
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed text-text-muted">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
