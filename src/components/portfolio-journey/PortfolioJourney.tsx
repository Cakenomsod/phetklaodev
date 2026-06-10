"use client";

import JourneyNav from "@/src/components/portfolio-journey/JourneyNav";
import IntroHero from "@/src/components/portfolio-journey/sections/IntroHero";
import HomeServerSpotlight from "@/src/components/portfolio-journey/sections/HomeServerSpotlight";
import ResearchPublication from "@/src/components/portfolio-journey/sections/ResearchPublication";
import AchievementsTimeline from "@/src/components/portfolio-journey/sections/AchievementsTimeline";
import WhyYZUSection from "@/src/components/portfolio-journey/sections/WhyYZUSection";
import ContactSection from "@/src/components/portfolio-journey/sections/ContactSection";

export default function PortfolioJourney() {
  return (
    <div className="portfolio-journey min-h-svh">
      <JourneyNav />
      <main>
        <IntroHero />
        <AchievementsTimeline />
        <HomeServerSpotlight />
        <ResearchPublication />
        <WhyYZUSection />
        <ContactSection />
      </main>
    </div>
  );
}
