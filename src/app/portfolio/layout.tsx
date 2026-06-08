import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "@/src/components/portfolio-journey/portfolio-journey.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Application Portfolio",
  description:
    "Interactive application portfolio for Yuan Ze University — a journey through building, research, leadership, and systems thinking.",
};

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${instrumentSerif.variable} min-h-svh`}>
      {children}
    </div>
  );
}
