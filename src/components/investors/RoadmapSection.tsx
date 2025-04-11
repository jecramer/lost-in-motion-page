
import React from "react";
import Roadmap from "@/components/roadmap/Roadmap";

const RoadmapSection = () => {
  return (
    <div className="w-full py-20" style={{
      backgroundImage: `url('/bg.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-newsreader font-semibold text-4xl mb-10 text-white">Product & Company Roadmap</h2>
          <p className="text-white text-lg mb-8 opacity-[0.84]">
            Our roadmap outlines key milestones across three funding stages. Each milestone represents strategic objectives we'll achieve with the capital raised. You can edit and add milestones to tailor this presentation to your investor pitch.
          </p>
          
          <Roadmap />
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;
