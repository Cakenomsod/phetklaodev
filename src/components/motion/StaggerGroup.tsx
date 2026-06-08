"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, staggerItemVariant } from "@/src/lib/motion";
import { cn } from "@/src/lib/utils";

type StaggerGroupProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
};

export { staggerItemVariant as staggerItem };

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
      variants={staggerContainer(stagger)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-48px" }}
    >
      {children}
    </motion.div>
  );
}
