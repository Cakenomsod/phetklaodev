"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

type A4PreviewModalProps = {
  open: boolean;
  initialLink?: string | string[] | null;
  onClose: () => void;
};

export default function A4PreviewModal({ open, initialLink, onClose }: A4PreviewModalProps) {
  const [mounted, setMounted] = useState(false);
  const [link, setLink] = useState<string | string[]>("");
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const formatDriveLink = (raw?: string | null) => {
      const value = raw ?? "";
      let formatted = value;

      if (!formatted) return "";

      if (formatted.includes("drive.google.com")) {
        const idPattern = /([a-zA-Z0-9_-]{33,44})/;
        const matches = formatted.match(idPattern);
        if (matches) {
          const fileId = matches[1];
          const directDownloadUrl = encodeURIComponent(`https://drive.google.com/uc?export=download&id=${fileId}`);
          formatted = `https://docs.google.com/viewer?url=${directDownloadUrl}&embedded=true`;
        }
      }

      return formatted;
    };

    if (Array.isArray(initialLink)) {
      const processed = initialLink.map((l) => formatDriveLink(l));
      setLink(processed);
    } else {
      setLink(formatDriveLink(initialLink));
    }
  }, [initialLink]);

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

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
    >
      {/* Background Overlay */}
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        aria-label="Close dialog"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className={`relative z-10 w-full max-w-[620px] transform rounded-xl border border-white/10 bg-[#16161a] p-4 shadow-2xl transition-all duration-300 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* ปุ่มปิดแบบลอย (Floating Close Button) ด้านบนขวา */}
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-gray-300 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {/* ส่วนแสดงผลเอกสาร A4 (เปลี่ยน bg-white เป็น bg-[#202024] หรือสีมืด และเพิ่ม padding เล็กน้อย) */}
        <div className="w-full overflow-y-auto rounded-lg bg-[#202024] p-3 h-[min(80vh,842px)]">
          {Array.isArray(link) ? (
            link.length ? (
              link.map((l, idx) => (
                <img
                  key={`a4-page-${idx}`}
                  src={l}
                  alt={`A4 Document Page ${idx + 1}`}
                  className="w-full aspect-[595/842] object-contain bg-white shadow-md mb-4 last:mb-0"
                />
              ))
            ) : (
              <div className="flex h-full w-full items-center justify-center text-sm text-gray-400">
                No preview link provided
              </div>
            )
          ) : typeof link === "string" && link ? (
            link.includes("docs.google.com/viewer") ? (
              <iframe
                src={link}
                title="A4 Document Preview"
                className="w-full h-full border-0 bg-white"
              />
            ) : (
              <img
                src={link}
                alt="A4 Document Preview"
                className="w-full aspect-[595/842] object-contain bg-white shadow-md"
              />
            )
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-gray-400">
              No preview link provided
            </div>
          )}
        </div>
      </div>
    </div>
  );
}