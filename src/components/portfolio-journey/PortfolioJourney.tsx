"use client";

import JourneyNav from "@/src/components/portfolio-journey/JourneyNav";
import IntroHero from "@/src/components/portfolio-journey/sections/IntroHero";
import WhyMeSection from "@/src/components/portfolio-journey/sections/WhyMeSection";
import ImpactOverview from "@/src/components/portfolio-journey/sections/ImpactOverview";
import FeaturedWorkSection from "@/src/components/portfolio-journey/sections/FeaturedWorkSection";
import HomeServerSpotlight from "@/src/components/portfolio-journey/sections/HomeServerSpotlight";
import FinanceTrackerSpotlight from "@/src/components/portfolio-journey/sections/FinanceTrackerSpotlight";
import CyberCompetitorSpotlight from "@/src/components/portfolio-journey/sections/CyberCompetitorSpotlight";
import ResearchPublication from "@/src/components/portfolio-journey/sections/ResearchPublication";
import LeadershipTimeline from "@/src/components/portfolio-journey/sections/LeadershipTimeline";
import AchievementsTimeline from "@/src/components/portfolio-journey/sections/AchievementsTimeline";
import WhyYZUSection from "@/src/components/portfolio-journey/sections/WhyYZUSection";
import ContactSection from "@/src/components/portfolio-journey/sections/ContactSection";

export default function PortfolioJourney() {
  return (
    <div className="portfolio-journey min-h-svh">
      <JourneyNav />
      <main>
        <IntroHero />
        <WhyMeSection />
        <ImpactOverview />
        <FeaturedWorkSection />
        <HomeServerSpotlight />
        <FinanceTrackerSpotlight />
        <ResearchPublication />
        <LeadershipTimeline />
        <CyberCompetitorSpotlight />
        <AchievementsTimeline />
        <WhyYZUSection />
        <ContactSection />
      </main>
    </div>
  );
}
