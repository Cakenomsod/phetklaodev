"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowRight, GitBranch, Layers } from "lucide-react";
import {
  DEBT_MEMBERS,
  NAIVE_TRANSFERS,
  OPTIMIZED_TRANSFERS,
  SETTLEMENT_ALGO,
} from "@/src/data/financeTrackerShowcase";
import ScrollReveal from "@/src/components/finance-tracker/motion/ScrollReveal";
import { cn } from "@/src/lib/utils";

const MEMBER_POSITIONS: Record<string, { x: number; y: number }> = {
  Phet: { x: 50, y: 12 },
  Nam: { x: 15, y: 55 },
  Beam: { x: 38, y: 78 },
  Fah: { x: 62, y: 78 },
  Tor: { x: 85, y: 55 },
};

type Mode = "naive" | "optimized";

function TransferLines({
  transfers,
  mode,
}: {
  transfers: typeof NAIVE_TRANSFERS;
  mode: Mode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <AnimatePresence>
        {transfers.map((transfer, i) => {
          const from = MEMBER_POSITIONS[transfer.from];
          const to = MEMBER_POSITIONS[transfer.to];
          if (!from || !to) return null;

          const midX = (from.x + to.x) / 2;
          const midY = (from.y + to.y) / 2 - 8;

          return (
            <motion.g
              key={`${mode}-${transfer.id}`}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: mode === "optimized" ? 0.9 : 0.55 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={{ delay: i * (mode === "optimized" ? 0.15 : 0.05), duration: 0.4 }}
            >
              <motion.path
                d={`M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`}
                fill="none"
                stroke={mode === "optimized" ? "var(--theme-accent-primary, #3b82f6)" : "var(--theme-graph-edge)"}
                strokeWidth={mode === "optimized" ? 0.6 : 0.35}
                strokeDasharray={mode === "naive" ? "1.5 1.5" : "none"}
                initial={reduceMotion ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: i * (mode === "optimized" ? 0.15 : 0.05), duration: 0.6 }}
              />
              <motion.text
                x={midX}
                y={midY}
                textAnchor="middle"
                className="fill-text-muted font-mono"
                style={{ fontSize: "2.5px" }}
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                ฿{transfer.amount}
              </motion.text>
            </motion.g>
          );
        })}
      </AnimatePresence>
    </svg>
  );
}

export default function DebtSettlementSection() {
  const [mode, setMode] = useState<Mode>("naive");
  const reduceMotion = useReducedMotion();

  const transfers = mode === "naive" ? NAIVE_TRANSFERS : OPTIMIZED_TRANSFERS;
  const transferCount = transfers.length;

  const memberBalances = useMemo(() => DEBT_MEMBERS, []);

  return (
    <section
      id="settlement"
      className="section-pad relative border-t border-border-subtle"
      aria-labelledby="ft-settlement-title"
    >
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-kicker">Debt Settlement Algorithm</p>
          <h2
            id="ft-settlement-title"
            className="text-headline mt-4 max-w-3xl text-balance"
          >
            12 transfers become 4
          </h2>
          <p className="text-body mt-6 max-w-2xl">
            Net-balance greedy matching minimizes peer-to-peer friction.
            Watch the same trip settle with and without optimization.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-10" delay={0.06}>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setMode("naive")}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-mono text-[10px] tracking-wider uppercase transition-colors",
                mode === "naive"
                  ? "border-accent-primary/50 bg-accent-primary/10 text-accent-primary"
                  : "border-border-default text-text-muted hover:border-accent-primary/25",
              )}
              aria-pressed={mode === "naive"}
            >
              <GitBranch className="h-3.5 w-3.5" aria-hidden />
              Before · {NAIVE_TRANSFERS.length} transfers
            </button>
            <button
              type="button"
              onClick={() => setMode("optimized")}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-mono text-[10px] tracking-wider uppercase transition-colors",
                mode === "optimized"
                  ? "border-accent-primary/50 bg-accent-primary/10 text-accent-primary"
                  : "border-border-default text-text-muted hover:border-accent-primary/25",
              )}
              aria-pressed={mode === "optimized"}
            >
              <Layers className="h-3.5 w-3.5" aria-hidden />
              After · {OPTIMIZED_TRANSFERS.length} transfers
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-10" delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl border border-border-default bg-bg-secondary/50">
            <div className="flex items-center justify-between border-b border-border-default px-6 py-4">
              <p className="font-mono text-[10px] tracking-[0.16em] text-text-muted uppercase">
                Krabi Beach · Net balances
              </p>
              <motion.p
                key={transferCount}
                className="font-mono text-sm font-semibold text-accent-primary"
                initial={reduceMotion ? false : { scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {transferCount} transfer{transferCount !== 1 ? "s" : ""}
              </motion.p>
            </div>

            <div className="relative aspect-[16/10] min-h-[320px] p-6 sm:p-10">
              <TransferLines transfers={transfers} mode={mode} />

              {memberBalances.map((member) => {
                const pos = MEMBER_POSITIONS[member.name];
                const isCreditor = member.balance > 0;

                return (
                  <div
                    key={member.id}
                    className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                  >
                    <div
                      className={cn(
                        "flex flex-col items-center rounded-xl border px-4 py-3 backdrop-blur-sm transition-shadow",
                        isCreditor
                          ? "border-accent-primary/40 bg-bg-tertiary shadow-[var(--shadow-glow)]"
                          : "border-border-default bg-bg-secondary/90",
                      )}
                    >
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: member.color }}
                        aria-hidden
                      />
                      <span className="mt-2 text-sm font-semibold text-text-primary">
                        {member.name}
                      </span>
                      <span
                        className={cn(
                          "mt-0.5 font-mono text-xs",
                          isCreditor ? "text-accent-primary" : "text-text-muted",
                        )}
                      >
                        {member.balance > 0 ? "+" : ""}
                        ฿{Math.abs(member.balance)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-border-default px-6 py-4">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {transfers.map((t) => (
                  <motion.li
                    key={`${mode}-list-${t.id}`}
                    className="flex items-center gap-1.5 font-mono text-[11px] text-text-muted"
                    initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <span className="text-text-primary">{t.from}</span>
                    <ArrowRight className="h-3 w-3 text-accent-primary/60" aria-hidden />
                    <span className="text-text-primary">{t.to}</span>
                    <span className="text-accent-primary">฿{t.amount}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-12" delay={0.12}>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border-default bg-bg-secondary/40 p-6">
              <p className="font-mono text-[10px] tracking-[0.16em] text-accent-primary uppercase">
                {SETTLEMENT_ALGO.name}
              </p>
              <p className="mt-2 font-mono text-sm text-text-muted">
                Complexity: {SETTLEMENT_ALGO.complexity}
              </p>
              <ol className="mt-5 space-y-2.5">
                {SETTLEMENT_ALGO.steps.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm text-text-muted">
                    <span className="font-mono text-[10px] text-accent-primary/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border border-border-default bg-bg-secondary/40 p-6">
              <p className="font-mono text-[10px] tracking-[0.16em] text-text-muted uppercase">
                Why this approach
              </p>
              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                {SETTLEMENT_ALGO.rationale}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-bg-tertiary/80 p-4 text-center">
                  <p className="text-3xl font-semibold text-text-primary">12</p>
                  <p className="mt-1 font-mono text-[10px] text-text-muted uppercase">
                    Naive transfers
                  </p>
                </div>
                <div className="rounded-xl border border-accent-primary/25 bg-accent-primary/5 p-4 text-center">
                  <p className="text-3xl font-semibold text-accent-primary">4</p>
                  <p className="mt-1 font-mono text-[10px] text-text-muted uppercase">
                    Optimized transfers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
