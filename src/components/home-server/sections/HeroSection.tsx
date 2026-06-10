"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useCallback } from "react";
import { Activity, Layers, Server, Shield } from "lucide-react";
import { HERO_METRICS } from "@/src/data/homeServerShowcase";
import { useServerConfig } from "@/src/hooks/useServerConfig";
import { cn } from "@/src/lib/utils";
import {
  fadeOnlyItem,
  heroStaggerContainer,
  heroStaggerItem,
} from "@/src/lib/motion";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const itemVariant = reduceMotion ? fadeOnlyItem : heroStaggerItem;
  const { status, loading } = useServerConfig();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const glowX = useSpring(pointerX, { stiffness: 64, damping: 22, mass: 0.6 });
  const glowY = useSpring(pointerY, { stiffness: 64, damping: 22, mass: 0.6 });
  const glow = useMotionTemplate`radial-gradient(480px circle at ${glowX}px ${glowY}px, var(--theme-ambient-primary), transparent 70%)`;

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      if (reduceMotion) return;
      const rect = e.currentTarget.getBoundingClientRect();
      pointerX.set(e.clientX - rect.left);
      pointerY.set(e.clientY - rect.top);
    },
    [pointerX, pointerY, reduceMotion],
  );

  const isOnline = status?.status === "online";
  const statusLabel = loading
    ? "Syncing"
    : isOnline
      ? "Online"
      : status?.status === "offline"
        ? "Offline"
        : "Standby";

  const metrics = [
    {
      icon: Layers,
      label: "Category",
      value: HERO_METRICS.category,
    },
    {
      icon: Activity,
      label: "Uptime",
      value: HERO_METRICS.uptimeLabel,
    },
    {
      icon: Server,
      label: "Services",
      value: String(HERO_METRICS.serviceCount),
    },
    {
      icon: Shield,
      label: "Tunnel",
      value: isOnline ? HERO_METRICS.tunnelStatus : statusLabel,
    },
  ];

  return (
    <section
      className="relative flex min-h-[92svh] flex-col justify-end overflow-hidden pb-20 pt-28 sm:pb-28"
      onPointerMove={handlePointerMove}
      aria-labelledby="hs-hero-title"
    >
      <div className="ambient-glow" aria-hidden>
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        <div className="ambient-blob-primary absolute top-[10%] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full blur-[130px]" />
        <div className="ambient-blob-secondary absolute right-[8%] bottom-[18%] h-[280px] w-[280px] rounded-full blur-[100px]" />
        {!reduceMotion && (
          <motion.div className="absolute inset-0" style={{ background: glow }} />
        )}
      </div>

      <motion.div
        className="container-narrow relative px-4 sm:px-6 lg:px-8"
        variants={heroStaggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariant} className="text-kicker">
          Self-Hosted Infrastructure
        </motion.p>

        <motion.h1
          id="hs-hero-title"
          variants={itemVariant}
          className="text-display mt-6 max-w-4xl text-balance font-bold"
        >
          Home Server
          <br />
          <span className="text-text-muted/90">Ecosystem</span>
        </motion.h1>

        <motion.p
          variants={itemVariant}
          className="text-body mt-8 max-w-2xl text-lg sm:text-xl"
        >
          Building a secure self-hosted infrastructure powered by Cloudflare
          Tunnels, Firestore synchronization, and local AI.
        </motion.p>

        <motion.ul
          variants={itemVariant}
          className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border-default bg-bg-tertiary/50 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="Infrastructure metrics"
        >
          {metrics.map(({ icon: Icon, label, value }) => (
            <li
              key={label}
              className="flex flex-col gap-3 bg-bg-secondary/80 px-6 py-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2">
                <Icon className="h-3.5 w-3.5 text-accent-primary/70" aria-hidden />
                <span className="font-mono text-[10px] tracking-[0.16em] text-text-muted uppercase">
                  {label}
                </span>
              </div>
              <span
                className={cn(
                  "text-2xl font-semibold tracking-tight text-text-primary",
                  label === "Tunnel" && isOnline && "text-accent-primary",
                )}
              >
                {value}
              </span>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
