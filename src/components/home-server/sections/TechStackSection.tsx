"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { TECH_STACK_GROUPS } from "@/src/data/homeServerShowcase";
import ScrollReveal from "@/src/components/home-server/motion/ScrollReveal";

export default function TechStackSection() {
  const mapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(mapRef, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="section-pad border-t border-border-subtle"
      aria-labelledby="hs-stack-title"
    >
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-kicker">Technology Stack</p>
          <h2
            id="hs-stack-title"
            className="text-headline mt-4 max-w-2xl text-balance"
          >
            Technologies as a system map
          </h2>
          <p className="text-body-muted mt-5 max-w-xl">
            Grouped by responsibility—not a badge cloud. Each layer connects to
            the next in the data path from UI to edge.
          </p>
        </ScrollReveal>

        <div
          ref={mapRef}
          className="mt-16 flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-0"
        >
          {TECH_STACK_GROUPS.map((group, index) => (
            <div key={group.id} className="flex flex-1 flex-col lg:flex-row">
              <motion.article
                className="surface-card flex flex-1 flex-col p-6 lg:rounded-none lg:first:rounded-l-xl lg:last:rounded-r-xl"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={
                  inView || reduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <h3 className="text-kicker text-[0.625rem]">
                  {group.label}
                </h3>
                <ul className="mt-4 flex flex-1 flex-col gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border-subtle bg-bg-tertiary/60 px-3 py-2 text-sm text-text-primary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>

              {group.connectsTo && (
                <div
                  className="hidden items-center justify-center px-2 lg:flex"
                  aria-hidden
                >
                  <motion.span
                    className="font-mono text-accent-primary/40"
                    initial={reduceMotion ? false : { opacity: 0 }}
                    animate={
                      inView || reduceMotion ? { opacity: 1 } : { opacity: 0 }
                    }
                    transition={{ delay: reduceMotion ? 0 : index * 0.1 + 0.2 }}
                  >
                    →
                  </motion.span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
