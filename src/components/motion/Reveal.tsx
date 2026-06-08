"use client";

import { motion, useReducedMotion } from "framer-motion";
import { revealTransition } from "@/src/lib/motion";
import { cn } from "@/src/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  viewportMargin?: string;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  viewportMargin = "-64px",
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={revealTransition(delay)}
    >
      {children}
    </motion.div>
  );
}
