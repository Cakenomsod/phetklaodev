export const EASE_STANDARD = [0.4, 0, 0.2, 1] as const;

/** Aligns with --motion-emphasis in globals.css */
export const DURATION_REVEAL = 0.6;
/** Aligns with --motion-surface stagger feel */
export const DURATION_STAGGER_ITEM = 0.55;
export const STAGGER_DELAY = 0.08;
export const STAGGER_CHILDREN_DELAY = 0.12;

export const revealTransition = (delay = 0) => ({
  duration: DURATION_REVEAL,
  ease: EASE_STANDARD,
  delay,
});

export const staggerContainer = (stagger = STAGGER_DELAY, delayChildren = STAGGER_CHILDREN_DELAY) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren },
  },
});

export const staggerItemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION_STAGGER_ITEM, ease: EASE_STANDARD },
  },
};

export const heroStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

export const heroStaggerItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_STANDARD },
  },
};

export const fadeOnlyItem = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};
