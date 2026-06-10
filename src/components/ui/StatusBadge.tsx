"use client";

import { cn } from "@/src/lib/utils";
import type { ServerStatus } from "@/src/types";

const statusConfig = {
  online: {
    label: "Online",
    dot: "bg-success shadow-[0_0_8px_var(--theme-success-glow)]",
    text: "text-text-primary",
  },
  offline: {
    label: "Offline",
    dot: "bg-warning/90 shadow-[0_0_8px_var(--theme-warning-glow)]",
    text: "text-text-muted",
  },
  unknown: {
    label: "Unknown",
    dot: "bg-text-muted/80",
    text: "text-text-muted",
  },
} as const;

export default function StatusBadge({
  status,
  loading,
  message,
}: {
  status: ServerStatus["status"] | null;
  loading?: boolean;
  message?: string;
}) {
  const key = status ?? "unknown";
  const config = statusConfig[key];

  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border border-border-default bg-bg-tertiary px-3 py-1.5"
      role="status"
      aria-live="polite"
      aria-busy={loading}
    >
      <span
        className={cn("h-2 w-2 shrink-0 rounded-full", config.dot)}
        aria-hidden
      />
      <span
        className={cn(
          "font-mono text-xs tracking-wide uppercase",
          config.text,
        )}
      >
        {loading ? "Checking homelab…" : config.label}
      </span>
      {!loading && message && (
        <span className="sr-only">{message}</span>
      )}
    </div>
  );
}
