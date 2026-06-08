"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/src/lib/utils";

type StaggerGroupProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
};

const container = (stagger: number) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren: 0.08 },
  },
});

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function StaggerGroup({
  children,
  className,
  stagger = 0.08,
}: StaggerGroupProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={container(stagger)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-48px" }}
    >
      {children}
    </motion.div>
  );
}
