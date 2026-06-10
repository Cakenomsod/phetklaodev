import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import DevModeBanner from "@/src/components/dev/DevModeBanner";
import { ThemeProvider } from "@/src/components/theme/ThemeProvider";
import ThemeScript from "@/src/components/theme/ThemeScript";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Phetklao | YZU Application Portfolio",
    template: "%s | Phetklao",
  },
  description:
    "Application portfolio for Yuan Ze University International Bachelor Program in Informatics — projects, background, and contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-full flex-col bg-bg-primary font-sans text-text-primary transition-colors duration-300">
        <ThemeProvider>
          {children}
          <DevModeBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
