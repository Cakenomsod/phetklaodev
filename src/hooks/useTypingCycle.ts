"use client";

import { useEffect, useState } from "react";

export function useTypingCycle(
  phrases: readonly string[],
  options?: { typeMs?: number; pauseMs?: number; deleteMs?: number },
) {
  const typeMs = options?.typeMs ?? 55;
  const pauseMs = options?.pauseMs ?? 2200;
  const deleteMs = options?.deleteMs ?? 35;

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex] ?? "";
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < phrase.length) {
      timeout = setTimeout(
        () => setText(phrase.slice(0, text.length + 1)),
        typeMs,
      );
    } else if (!deleting && text.length === phrase.length) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(phrase.slice(0, text.length - 1)),
        deleteMs,
      );
    } else if (deleting && text.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }, deleteMs);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex, phrases, typeMs, pauseMs, deleteMs]);

  return text;
}
