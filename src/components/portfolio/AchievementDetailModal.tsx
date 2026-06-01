"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import type { Achievement } from "@/src/data/portfolioData";

type AchievementDetailModalProps = {
  open: boolean;
  achievement: Achievement | null;
  media?: string | string[];
  onClose: () => void;
};

export default function AchievementDetailModal({
  open,
  achievement,
  media,
  onClose,
}: AchievementDetailModalProps) {
  const [mounted, setMounted] = useState(false);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    requestAnimationFrame(() => setMounted(true));

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus();
      setMounted(false);
    };
  }, [open, onClose]);

  if (!open || !achievement) return null;

  const mediaItems = Array.isArray(media) ? media : media ? [media] : [];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="achievement-detail-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        aria-label="Close dialog"
        onClick={onClose}
      />

      <div
        className={`relative z-10 w-full max-w-5xl transform overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0f] shadow-2xl transition-all duration-300 ease-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-white/10 bg-[#0b0b0f]/95 px-6 py-4 backdrop-blur-md">
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-slate-400">
              Achievement details
            </p>
            <h2
              id="achievement-detail-title"
              className="mt-2 text-2xl font-semibold tracking-tight text-white"
            >
              {achievement.title}
            </h2>
            <p className="mt-1 text-sm leading-6 text-slate-400">
              {achievement.issuer} • {achievement.date}
            </p>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            aria-label="Close achievement details"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid gap-6 px-6 py-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="flex h-full flex-col gap-4">
              {mediaItems.length > 0 ? (
                <div className="grid gap-4">
                  {mediaItems.map((src, index) => (
                    <div
                      key={`${src}-${index}`}
                      className="overflow-hidden rounded-3xl bg-slate-950 shadow-lg"
                    >
                      <img
                        src={src}
                        alt={achievement.mediaAlt ?? `${achievement.title} image ${index + 1}`}
                        className="min-h-[260px] w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex min-h-[280px] items-center justify-center rounded-3xl bg-white/5 text-sm text-slate-400">
                  No media available
                </div>
              )}
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="rounded-3xl bg-[#11131b] p-6 shadow-inner shadow-black/20">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-300">
                Issuer
              </p>
              <p className="mt-3 text-base leading-7 text-slate-200">
                {achievement.issuer}
              </p>
            </div>

            <div className="rounded-3xl bg-[#11131b] p-6 shadow-inner shadow-black/20">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-300">
                Date
              </p>
              <p className="mt-3 text-base leading-7 text-slate-200">
                {achievement.date}
              </p>
            </div>

            <div className="rounded-3xl bg-[#11131b] p-6 shadow-inner shadow-black/20">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-300">
                Description
              </p>
              <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-300">
                {achievement.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
