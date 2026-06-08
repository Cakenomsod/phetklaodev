"use client";

import ShowcaseNav from "@/src/components/home-server/ShowcaseNav";
import HeroSection from "@/src/components/home-server/sections/HeroSection";
import ChallengeSection from "@/src/components/home-server/sections/ChallengeSection";
import SolutionSection from "@/src/components/home-server/sections/SolutionSection";
import ArchitectureExplorer from "@/src/components/home-server/sections/ArchitectureExplorer";
import SystemImpactSection from "@/src/components/home-server/sections/SystemImpactSection";
import TechStackSection from "@/src/components/home-server/sections/TechStackSection";

export default function HomeServerShowcase() {
  return (
    <div className="min-h-svh bg-bg-primary">
      <ShowcaseNav />
      <main>
        <HeroSection />
        <ChallengeSection />
        <SolutionSection />
        <ArchitectureExplorer />
        <SystemImpactSection />
        <TechStackSection />
      </main>
    </div>
  );
}
