"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/src/components/theme/ThemeProvider";
import { THEME_LABELS, type ThemeMode } from "@/src/lib/theme";
import { cn } from "@/src/lib/utils";

type ThemeSwitcherProps = {
  className?: string;
  compact?: boolean;
};

const MODES: ThemeMode[] = ["light", "dark"];

export default function ThemeSwitcher({
  className,
  compact = false,
}: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={cn("inline-flex flex-col gap-1.5", className)}
      role="group"
      aria-label="Display mode"
    >
      <div
        className={cn(
          "relative inline-flex rounded-full border border-border-default bg-bg-secondary/80 p-1 shadow-[var(--shadow-surface-sm)] backdrop-blur-md",
          compact ? "h-9" : "h-10",
        )}
      >
        {!reduceMotion && (
          <motion.span
            layoutId="theme-switcher-pill"
            className="absolute inset-y-1 rounded-full bg-bg-tertiary shadow-[var(--shadow-surface-sm)]"
            style={{
              width: "calc(50% - 4px)",
              left: theme === "light" ? 4 : "calc(50% + 0px)",
            }}
            transition={{ type: "spring", stiffness: 420, damping: 32 }}
            aria-hidden
          />
        )}

        {MODES.map((mode) => {
          const meta = THEME_LABELS[mode];
          const active = theme === mode;
          const Icon = meta.icon === "sun" ? Sun : Moon;

          return (
            <button
              key={mode}
              type="button"
              onClick={() => setTheme(mode)}
              aria-pressed={active}
              aria-label={`${meta.label}. ${meta.description}`}
              title={meta.label}
              className={cn(
                "relative z-10 inline-flex items-center justify-center gap-1.5 rounded-full font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary",
                compact ? "px-2.5 text-[0.65rem]" : "px-3 text-[0.6875rem]",
                active
                  ? "text-text-primary"
                  : "text-text-muted hover:text-text-secondary",
              )}
            >
              <Icon
                className={cn(
                  "shrink-0",
                  compact ? "h-3 w-3" : "h-3.5 w-3.5",
                  active && mode === "dark" && "text-accent-primary",
                )}
                aria-hidden
              />
              {!compact && (
                <span className="hidden font-mono tracking-[0.08em] uppercase sm:inline">
                  {mode === "light" ? "Reading" : "Showcase"}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {!compact && (
        <p className="hidden text-center font-mono text-[0.6rem] tracking-[0.12em] text-text-muted uppercase sm:block">
          {THEME_LABELS[theme].label}
        </p>
      )}
    </div>
  );
}
