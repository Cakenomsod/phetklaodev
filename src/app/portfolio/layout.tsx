import type { Metadata } from "next";
import PortfolioNavbar from "@/src/components/portfolio/PortfolioNavbar";
import "@/src/components/portfolio/portfolio.css";

export const metadata: Metadata = {
  title: "Application Portfolio",
  description:
    "Full application portfolio for Yuan Ze University — biography, education, projects, and experience.",
};

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="portfolio-doc min-h-screen bg-white font-sans text-[var(--portfolio-text)]">
      <PortfolioNavbar />
      {children}
    </div>
  );
}
