
import React from "react";
import Navbar from "@/components/Navbar";
import BackgroundWrapper from "@/components/investors/BackgroundWrapper";
import InvestorsHero from "@/components/investors/InvestorsHero";
import BuildingInfo from "@/components/investors/BuildingInfo";
import ProblemStatements from "@/components/investors/ProblemStatements";
import GuidingPillars from "@/components/investors/GuidingPillars";
import ArchetypesCarousel from "@/components/investors/ArchetypesCarousel";
import MarketComparison from "@/components/investors/MarketComparison";
import RevenueSection from "@/components/investors/RevenueSection";
import TeamSection from "@/components/investors/TeamSection";
import AdvisorsSection from "@/components/investors/AdvisorsSection";
import RoadmapSection from "@/components/investors/RoadmapSection";
import OdinSection from "@/components/investors/OdinSection";
import ScrollToTop from "@/components/investors/ScrollToTop";

const Investors = () => {
  return (
    <>
      <Navbar />
      <BackgroundWrapper>
        <InvestorsHero />
        <BuildingInfo />
        <div className="mb-20">
          <ArchetypesCarousel />
        </div>
        <GuidingPillars />
        <ProblemStatements />
        <MarketComparison />
        <RevenueSection />
        <TeamSection />
        <AdvisorsSection />
        <RoadmapSection />
        <OdinSection />
        <ScrollToTop />
      </BackgroundWrapper>
    </>
  );
};

export default Investors;
