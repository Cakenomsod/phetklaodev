"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useCallback } from "react";

import { cn } from "@/src/lib/utils";

const ROLES = [
  "Student Developer",
  "Researcher",
  "Cybersecurity Competitor",
] as const;

const PDF_HREF = "/Portfolio.pdf";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const fadeOnlyItem = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

type LandingIntroProps = {
  onPdfClick?: () => void;
  onWebClick?: () => void;
};

export default function LandingIntro({ onPdfClick, onWebClick }: LandingIntroProps) {
  const reduceMotion = useReducedMotion();
  const itemVariant = reduceMotion ? fadeOnlyItem : staggerItem;

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const glowX = useSpring(pointerX, { stiffness: 64, damping: 22, mass: 0.6 });
  const glowY = useSpring(pointerY, { stiffness: 64, damping: 22, mass: 0.6 });
  const glowBackground = useMotionTemplate`radial-gradient(520px circle at ${glowX}px ${glowY}px, rgb(0 212 255 / 0.07), transparent 72%)`;

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      if (reduceMotion) return;
      const rect = event.currentTarget.getBoundingClientRect();
      pointerX.set(event.clientX - rect.left);
      pointerY.set(event.clientY - rect.top);
    },
    [pointerX, pointerY, reduceMotion],
  );

  return (
    <main
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 py-16 sm:px-10"
      onPointerMove={handlePointerMove}
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-bg-primary" />
        <div className="absolute inset-0 bg-dot-grid opacity-40" />
        <div className="absolute top-[18%] left-1/2 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-accent-secondary/10 blur-[120px]" />
        <div className="absolute bottom-[12%] right-[8%] h-[280px] w-[280px] rounded-full bg-accent-primary/6 blur-[100px]" />
        {!reduceMotion && (
          <motion.div
            className="absolute inset-0"
            style={{ background: glowBackground }}
          />
        )}
      </div>

      <motion.div
        className="mx-auto flex w-full max-w-3xl flex-col items-center text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariant}
          className="font-mono text-[0.7rem] tracking-[0.18em] text-text-muted uppercase sm:text-xs"
        >
          YZU Application · International Bachelor Program in Informatics
        </motion.p>

        <motion.h1
          id="landing-heading"
          variants={itemVariant}
          className="mt-8 text-balance text-[clamp(2.25rem,6vw,3.75rem)] leading-[1.1] font-bold tracking-[-0.02em] text-text-primary"
        >
          Phetklao Champarath
        </motion.h1>

        <motion.ul
          variants={itemVariant}
          className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
          aria-label="Areas of focus"
        >
          {ROLES.map((role) => (
            <li key={role}>
              <span className="inline-block rounded-sm border border-white/8 bg-bg-tertiary px-3 py-1.5 font-mono text-[0.7rem] tracking-wide text-text-muted sm:text-xs">
                {role}
              </span>
            </li>
          ))}
        </motion.ul>

        <motion.p
          variants={itemVariant}
          className="mt-8 max-w-[68ch] text-pretty text-base leading-relaxed text-text-primary sm:text-lg"
        >
          Building software, conducting research, and creating real-world impact
          through technology.
        </motion.p>

        <motion.p
          variants={itemVariant}
          className="mt-5 max-w-[62ch] text-pretty text-sm leading-relaxed text-text-muted sm:text-base"
        >
          Thank you for reviewing my application. For admissions review, please
          begin with the official portfolio document.
        </motion.p>

        <motion.div
          variants={itemVariant}
          className="mt-12 w-full max-w-md"
          role="group"
          aria-label="Portfolio access"
        >
          <div className="flex flex-col gap-3 sm:gap-4">
            <motion.a
              href={PDF_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onPdfClick}
              className={cn(
                "group inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-md",
                "bg-accent-primary px-8 py-4 text-base font-semibold text-bg-primary",
                "shadow-[var(--shadow-glow-lg)] transition-[background,box-shadow,transform]",
                "hover:bg-[#33ddff] hover:shadow-[var(--shadow-glow)]",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary",
                "active:translate-y-px",
              )}
              whileHover={reduceMotion ? undefined : { scale: 1.01 }}
              whileTap={reduceMotion ? undefined : { scale: 0.995 }}
            >
              View Portfolio PDF
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </motion.a>

            {onWebClick ? (
              <motion.button
                type="button"
                onClick={onWebClick}
                className={cn(
                  "inline-flex min-h-12 w-full flex-col items-center justify-center gap-1 rounded-md",
                  "border border-white/10 bg-bg-secondary/60 px-6 py-3.5",
                  "text-sm font-medium text-text-primary",
                  "transition-[background,border-color,transform]",
                  "hover:border-accent-primary/30 hover:bg-bg-secondary",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary",
                  "active:translate-y-px",
                )}
                whileHover={reduceMotion ? undefined : { scale: 1.01 }}
                whileTap={reduceMotion ? undefined : { scale: 0.995 }}
              >
                <span>Interactive Web Portfolio</span>
                <span className="font-mono text-[0.65rem] tracking-[0.14em] text-text-muted uppercase">
                  Explore online
                </span>
              </motion.button>
            ) : (
              <button
                type="button"
                disabled
                aria-disabled="true"
                className={cn(
                  "inline-flex min-h-12 w-full cursor-not-allowed flex-col items-center justify-center gap-1 rounded-md",
                  "border border-white/10 bg-bg-secondary/60 px-6 py-3.5",
                  "text-sm font-medium text-text-muted/70",
                )}
              >
                <span>Interactive Web Portfolio</span>
                <span className="font-mono text-[0.65rem] tracking-[0.14em] text-text-muted/60 uppercase">
                  Coming Soon
                </span>
              </button>
            )}
          </div>
        </motion.div>

        <motion.p
          variants={itemVariant}
          className="mt-10 font-mono text-[0.65rem] tracking-[0.12em] text-text-muted/70 uppercase"
        >
          Official document · Recommended starting point
        </motion.p>
      </motion.div>
    </main>
  );
}
