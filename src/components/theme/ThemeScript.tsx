import { DEFAULT_THEME, THEME_STORAGE_KEY } from "@/src/lib/theme";

const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("${THEME_STORAGE_KEY}");
    var theme = stored === "dark" ? "dark" : "${DEFAULT_THEME}";
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "${DEFAULT_THEME}");
    document.documentElement.style.colorScheme = "${DEFAULT_THEME}";
  }
})();
`;

export default function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeScript }}
      suppressHydrationWarning
    />
  );
}
