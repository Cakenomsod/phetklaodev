"use client";

import ShowcaseNav from "@/src/components/cybersecurity-competitor/ShowcaseNav";
import HeroSection from "@/src/components/cybersecurity-competitor/sections/HeroSection";
import JourneySection from "@/src/components/cybersecurity-competitor/sections/JourneySection";
import TimelineSection from "@/src/components/cybersecurity-competitor/sections/TimelineSection";
import SkillDomainsSection from "@/src/components/cybersecurity-competitor/sections/SkillDomainsSection";
import ChallengeWalkthroughSection from "@/src/components/cybersecurity-competitor/sections/ChallengeWalkthroughSection";
import LessonsSection from "@/src/components/cybersecurity-competitor/sections/LessonsSection";

export default function CyberCompetitorShowcase() {
  return (
    <div className="relative min-h-svh bg-bg-primary">
      <div className="pointer-events-none fixed inset-0 bg-dot-grid opacity-30" aria-hidden />
      <ShowcaseNav />
      <main className="relative">
        <HeroSection />
        <JourneySection />
        <TimelineSection />
        <SkillDomainsSection />
        <ChallengeWalkthroughSection />
        <LessonsSection />
      </main>
    </div>
  );
}
