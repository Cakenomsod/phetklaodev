"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, X } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {open && (
        <div
          className="w-[min(100vw-2rem,320px)] rounded-xl border border-white/10 bg-bg-secondary p-4 shadow-2xl"
          role="dialog"
          aria-label="Quick contact"
        >
          <p className="text-sm font-medium text-text-primary">
            Questions?
          </p>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">
            I&apos;m not running live chat yet—use the contact form or email and
            I&apos;ll reply.
          </p>
          <Link
            href="/#contact"
            className="mt-4 inline-flex min-h-10 w-full items-center justify-center rounded-md bg-accent-primary text-sm font-semibold text-bg-primary hover:bg-[#33ddff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
            onClick={() => setOpen(false)}
          >
            Go to contact
          </Link>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent-primary text-bg-primary shadow-[var(--shadow-glow-lg)] transition-[transform,background] hover:scale-105 hover:bg-[#33ddff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary active:scale-95"
        aria-expanded={open}
        aria-label={open ? "Close quick contact" : "Open quick contact"}
      >
        {open ? (
          <X className="h-6 w-6" aria-hidden />
        ) : (
          <MessageCircle className="h-6 w-6" aria-hidden />
        )}
      </button>
    </div>
  );
}
