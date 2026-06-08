"use client";

import ShowcaseNav from "@/src/components/finance-tracker/ShowcaseNav";
import HeroSection from "@/src/components/finance-tracker/sections/HeroSection";
import ProblemSection from "@/src/components/finance-tracker/sections/ProblemSection";
import ProductThinkingSection from "@/src/components/finance-tracker/sections/ProductThinkingSection";
import ArchitectureExplorer from "@/src/components/finance-tracker/sections/ArchitectureExplorer";
import AIReceiptSection from "@/src/components/finance-tracker/sections/AIReceiptSection";
import DebtSettlementSection from "@/src/components/finance-tracker/sections/DebtSettlementSection";
import ReliabilitySection from "@/src/components/finance-tracker/sections/ReliabilitySection";
import ResultsSection from "@/src/components/finance-tracker/sections/ResultsSection";
import LessonsSection from "@/src/components/finance-tracker/sections/LessonsSection";

export default function FinanceTrackerShowcase() {
  return (
    <div className="relative min-h-svh bg-bg-primary">
      <div className="pointer-events-none fixed inset-0 bg-dot-grid opacity-30" aria-hidden />
      <ShowcaseNav />
      <main className="relative">
        <HeroSection />
        <ProblemSection />
        <ProductThinkingSection />
        <ArchitectureExplorer />
        <AIReceiptSection />
        <DebtSettlementSection />
        <ReliabilitySection />
        <ResultsSection />
        <LessonsSection />
      </main>
    </div>
  );
}
