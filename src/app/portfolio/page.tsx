"use client";

import PortfolioAchievements from "@/src/components/portfolio/PortfolioAchievements";
import PortfolioBio from "@/src/components/portfolio/PortfolioBio";
import PortfolioBootcamps from "@/src/components/portfolio/PortfolioBootcamps";
import PortfolioEducation from "@/src/components/portfolio/PortfolioEducation";
import PortfolioFooter from "@/src/components/portfolio/PortfolioFooter";
import PortfolioFreelance from "@/src/components/portfolio/PortfolioFreelance";
import PortfolioHeader from "@/src/components/portfolio/PortfolioHeader";
import PortfolioLeadership from "@/src/components/portfolio/PortfolioLeadership";
import PortfolioNavbar from "@/src/components/portfolio/PortfolioNavbar";
import PortfolioProjects from "@/src/components/portfolio/PortfolioProjects";
import PortfolioResearch from "@/src/components/portfolio/PortfolioResearch";
import type { TabId } from "@/src/components/portfolio/PortfolioTabs";
import { portfolioData } from "@/src/data/portfolioData";
import { useState, useEffect } from "react";

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<TabId>("bio");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const {
    personal,
    bio,
    achievements,
    education,
    projects,
    freelance,
    research,
    bootcamps,
    leadership,
  } = portfolioData;

  return (
    <>
      <PortfolioNavbar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 bg-white">
        <PortfolioHeader />
        
        {isMounted && (
          <>
            {activeTab === "bio" && <PortfolioBio paragraphs={bio} personal={personal} />}
            {activeTab === "achievements" && <PortfolioAchievements items={achievements} />}
            {activeTab === "education" && <PortfolioEducation items={education} />}
            {activeTab === "projects" && <PortfolioProjects items={projects} />}
            {activeTab === "freelance" && <PortfolioFreelance items={freelance} />}
            {activeTab === "research" && <PortfolioResearch items={research} />}
            {activeTab === "bootcamps" && <PortfolioBootcamps items={bootcamps} />}
            {activeTab === "leadership" && <PortfolioLeadership items={leadership} />}
          </>
        )}
        
        <PortfolioFooter />
      </main>
    </>
  );
}
