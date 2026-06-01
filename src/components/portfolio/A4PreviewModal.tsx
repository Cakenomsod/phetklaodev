"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

type A4PreviewModalProps = {
  open: boolean;
  initialLink?: string | null;
  onClose: () => void;
};

export default function A4PreviewModal({ open, initialLink, onClose }: A4PreviewModalProps) {
  const [mounted, setMounted] = useState(false);
  const [link, setLink] = useState("");
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    let formattedLink = initialLink ?? "";
    
    if (formattedLink.includes("drive.google.com")) {
      let fileId: string | null = null;

      // 1. แกะรหัส ID จากลิงก์ Google Drive ออกมาให้ได้ก่อน (ใช้ Regex แบบครอบจักรวาล)
      const idPattern = /([a-zA-Z0-9_-]{33,44})/;
      const matches = formattedLink.match(idPattern);
      
      if (matches) {
        fileId = matches[1];
      }

      // 2. 🛠️ แก้ไข: เปลี่ยนโครงสร้างการดึงไฟล์ไปใช้ Google Docs Embed Viewer รูปแบบที่ถูกต้อง
      if (fileId) {
        // แปลงไฟล์เป็น Direct Download Link เพื่อส่งเข้า Google Viewer อีกทีหนึ่ง
        const directDownloadUrl = encodeURIComponent(`https://drive.google.com/uc?export=download&id=${fileId}`);
        // ครอบด้วย Google Docs Viewer รูปแบบที่เป็นระเบียบและไม่ติดขัดสิทธิ์การแชร์
        formattedLink = `https://docs.google.com/viewer?url=${directDownloadUrl}&embedded=true`;
      }
    }
    
    setLink(formattedLink);
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

        {/* ส่วนแสดงผลเอกสาร A4 */}
        <div className="w-full overflow-hidden rounded-lg bg-white" style={{ aspectRatio: "595 / 842" }}>
          {link ? (
            link.includes("docs.google.com/viewer") ? (
              <iframe
                src={link}
                title="A4 Document Preview"
                className="h-full w-full border-0"
              />
            ) : (
              <img
                src={link}
                alt="A4 Document Preview"
                className="h-full w-full object-contain"
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