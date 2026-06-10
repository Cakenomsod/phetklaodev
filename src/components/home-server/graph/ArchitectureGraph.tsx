"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  INFRA_EDGES,
  INFRA_NODES,
  getConnectedNodeIds,
  getNodeById,
  type InfraNodeId,
} from "@/src/data/homeServerShowcase";
import NodeDetailPanel from "@/src/components/home-server/graph/NodeDetailPanel";
import { cn } from "@/src/lib/utils";

const VIEW_W = 800;
const VIEW_H = 600;

function edgePath(fromX: number, fromY: number, toX: number, toY: number) {
  const midY = (fromY + toY) / 2;
  return `M ${fromX} ${fromY} C ${fromX} ${midY}, ${toX} ${midY}, ${toX} ${toY}`;
}

type ArchitectureGraphProps = {
  className?: string;
};

export default function ArchitectureGraph({ className }: ArchitectureGraphProps) {
  const [hoveredId, setHoveredId] = useState<InfraNodeId | null>(null);
  const [selectedId, setSelectedId] = useState<InfraNodeId | null>(null);
  const reduceMotion = useReducedMotion();

  const activeId = selectedId ?? hoveredId;
  const highlightedNodes = useMemo(
    () => (activeId ? getConnectedNodeIds(activeId) : new Set<InfraNodeId>()),
    [activeId],
  );

  const selectedNode = selectedId ? getNodeById(selectedId) ?? null : null;

  function isEdgeActive(from: InfraNodeId, to: InfraNodeId) {
    if (!activeId) return false;
    return (
      (from === activeId || to === activeId) &&
      highlightedNodes.has(from) &&
      highlightedNodes.has(to)
    );
  }

  function isNodeDimmed(id: InfraNodeId) {
    if (!activeId) return false;
    return !highlightedNodes.has(id);
  }

  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border-default bg-bg-secondary/50">
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <defs>
            <linearGradient id="edge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--theme-graph-edge-active-0)" />
              <stop offset="50%" stopColor="var(--theme-graph-edge-active-50)" />
              <stop offset="100%" stopColor="var(--theme-graph-edge-active-100)" />
            </linearGradient>
            <filter id="node-glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {INFRA_EDGES.map((edge) => {
            const from = INFRA_NODES.find((n) => n.id === edge.from)!;
            const to = INFRA_NODES.find((n) => n.id === edge.to)!;
            const path = edgePath(from.x, from.y, to.x, to.y);
            const active = isEdgeActive(edge.from, edge.to);

            return (
              <g key={edge.id}>
                <path
                  d={path}
                  fill="none"
                  stroke="var(--theme-graph-edge-dim)"
                  strokeWidth={1.5}
                />
                <motion.path
                  d={path}
                  fill="none"
                  stroke={active ? "url(#edge-gradient)" : "var(--theme-graph-edge)"}
                  strokeWidth={active ? 2 : 1}
                  strokeLinecap="round"
                  initial={false}
                  animate={
                    reduceMotion
                      ? {}
                      : active
                        ? {
                            strokeDashoffset: [24, 0],
                            opacity: 1,
                          }
                        : { opacity: activeId ? 0.25 : 0.6 }
                  }
                  transition={
                    active && !reduceMotion
                      ? { strokeDashoffset: { duration: 1.2, repeat: Infinity, ease: "linear" } }
                      : { duration: 0.25 }
                  }
                  strokeDasharray={active ? "8 16" : "none"}
                />
              </g>
            );
          })}
        </svg>

        {INFRA_NODES.map((node) => {
          const left = (node.x / VIEW_W) * 100;
          const top = (node.y / VIEW_H) * 100;
          const isActive = activeId === node.id;
          const dimmed = isNodeDimmed(node.id);

          return (
            <button
              key={node.id}
              type="button"
              className={cn(
                "absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-xl border px-3 py-2 text-left transition-[border-color,box-shadow,opacity,transform] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary",
                "min-w-[88px] sm:min-w-[104px]",
                isActive
                  ? "border-accent-primary/50 bg-bg-tertiary shadow-[var(--shadow-glow)]"
                  : "border-border-default bg-bg-secondary/90 hover:border-accent-primary/25",
                dimmed && "opacity-35",
              )}
              style={{ left: `${left}%`, top: `${top}%` }}
              onMouseEnter={() => setHoveredId(node.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() =>
                setSelectedId((prev) => (prev === node.id ? null : node.id))
              }
              aria-pressed={selectedId === node.id}
              aria-label={`${node.label}. Click for details.`}
            >
              <span className="block font-mono text-[9px] tracking-wider text-accent-primary/70 uppercase sm:text-[10px]">
                {node.layer}
              </span>
              <span className="mt-0.5 block text-xs font-semibold text-text-primary sm:text-sm">
                {node.shortLabel}
              </span>
            </button>
          );
        })}

        <NodeDetailPanel
          node={selectedNode}
          onClose={() => setSelectedId(null)}
        />
      </div>

      <p className="mt-4 text-center font-mono text-[10px] tracking-wider text-text-muted uppercase">
        Hover to trace paths · Click a node for details
      </p>
    </div>
  );
}
