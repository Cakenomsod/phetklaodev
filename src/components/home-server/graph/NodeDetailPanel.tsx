"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import type { InfraNode } from "@/src/data/homeServerShowcase";

type NodeDetailPanelProps = {
  node: InfraNode | null;
  onClose: () => void;
};

export default function NodeDetailPanel({ node, onClose }: NodeDetailPanelProps) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {node && (
        <motion.aside
          key={node.id}
          className="absolute inset-x-0 bottom-0 z-20 rounded-t-2xl border border-border-default bg-surface-overlay p-6 backdrop-blur-xl sm:inset-x-auto sm:right-4 sm:bottom-4 sm:w-[min(100%,360px)] sm:rounded-2xl"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          role="region"
          aria-label={`Details for ${node.label}`}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] tracking-[0.16em] text-accent-primary uppercase">
                {node.layer}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-text-primary">
                {node.label}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-text-muted transition-colors hover:bg-bg-tertiary hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
              aria-label="Close details"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-text-muted">
            {node.purpose}
          </p>

          <div className="mt-5">
            <h4 className="font-mono text-[10px] tracking-[0.14em] text-text-muted uppercase">
              Technologies
            </h4>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {node.technologies.map((tech) => (
                <li key={tech}>
                  <span className="rounded bg-bg-tertiary px-2 py-0.5 font-mono text-[10px] text-text-muted">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <h4 className="font-mono text-[10px] tracking-[0.14em] text-text-muted uppercase">
              Responsibilities
            </h4>
            <ul className="mt-2 space-y-1.5 text-sm text-text-primary">
              {node.responsibilities.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent-primary" aria-hidden>
                    ·
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
