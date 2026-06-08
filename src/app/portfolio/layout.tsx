import type { Metadata } from "next";
import "@/src/components/portfolio-journey/portfolio-journey.css";

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
  return <div className="min-h-svh">{children}</div>;
}
