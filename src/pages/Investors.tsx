
import React from "react";
import Navbar from "@/components/Navbar";
import BackgroundWrapper from "@/components/investors/BackgroundWrapper";
import InvestorsHero from "@/components/investors/InvestorsHero";
import BuildingInfo from "@/components/investors/BuildingInfo";
import GuidingPillars from "@/components/investors/GuidingPillars";
import ArchetypesCarousel from "@/components/investors/ArchetypesCarousel";
import MarketComparison from "@/components/investors/MarketComparison";
import RevenueSection from "@/components/investors/RevenueSection";
import TeamSection from "@/components/investors/TeamSection";
import AdvisorsSection from "@/components/investors/AdvisorsSection";
import RoadmapSection from "@/components/investors/RoadmapSection";
import OdinSection from "@/components/investors/OdinSection";

const Investors = () => {
  return (
    <>
      <Navbar />
      <BackgroundWrapper>
        <InvestorsHero />
        <BuildingInfo />
        <GuidingPillars />
        <ArchetypesCarousel />
        <MarketComparison />
        <RevenueSection />
        <TeamSection />
        <AdvisorsSection />
        <RoadmapSection />
        <OdinSection />
      </BackgroundWrapper>
    </>
  );
};

export default Investors;
