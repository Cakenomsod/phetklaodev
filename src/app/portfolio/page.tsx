import PortfolioAchievements from "@/src/components/portfolio/PortfolioAchievements";
import PortfolioBio from "@/src/components/portfolio/PortfolioBio";
import PortfolioBootcamps from "@/src/components/portfolio/PortfolioBootcamps";
import PortfolioEducation from "@/src/components/portfolio/PortfolioEducation";
import PortfolioFooter from "@/src/components/portfolio/PortfolioFooter";
import PortfolioFreelance from "@/src/components/portfolio/PortfolioFreelance";
import PortfolioHeader from "@/src/components/portfolio/PortfolioHeader";
import PortfolioLeadership from "@/src/components/portfolio/PortfolioLeadership";
import PortfolioProjects from "@/src/components/portfolio/PortfolioProjects";
import PortfolioResearch from "@/src/components/portfolio/PortfolioResearch";
import { portfolioData } from "@/src/data/portfolioData";

export default function PortfolioPage() {
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
    <main className="flex-1 bg-white">
      <PortfolioHeader personal={personal} />
      <PortfolioBio paragraphs={bio} />
      <PortfolioAchievements items={achievements} />
      <PortfolioEducation items={education} />
      <PortfolioProjects items={projects} />
      <PortfolioFreelance items={freelance} />
      <PortfolioResearch items={research} />
      <PortfolioBootcamps items={bootcamps} />
      <PortfolioLeadership items={leadership} />
      <PortfolioFooter />
    </main>
  );
}
