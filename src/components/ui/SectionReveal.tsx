"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/src/lib/utils";

type SectionRevealProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionReveal({
  children,
  className,
}: SectionRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 1, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
