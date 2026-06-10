export type ThemeMode = "light" | "dark";

export const THEME_STORAGE_KEY = "phetklao-theme-preference";

export const THEME_LABELS: Record<
  ThemeMode,
  { label: string; description: string; icon: "sun" | "moon" }
> = {
  light: {
    label: "Reading Mode",
    description: "Calm, academic presentation for document review",
    icon: "sun",
  },
  dark: {
    label: "Showcase Mode",
    description: "Premium engineering showcase with refined contrast",
    icon: "moon",
  },
};

export const DEFAULT_THEME: ThemeMode = "light";

export function isThemeMode(value: string | null | undefined): value is ThemeMode {
  return value === "light" || value === "dark";
}

export function resolveTheme(stored: string | null | undefined): ThemeMode {
  return isThemeMode(stored) ? stored : DEFAULT_THEME;
}
