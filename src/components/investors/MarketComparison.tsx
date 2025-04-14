
import React from "react";

const MarketComparison = () => {
  return (
    <div className="w-full py-20" style={{
      backgroundImage: `url('/bg.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container mx-auto px-4 md:px-8">
        <div 
          className="max-w-5xl mx-auto bg-white/30 backdrop-blur-sm p-10 rounded-lg shadow-lg" 
        >
          <h2 className="font-newsreader font-semibold text-4xl mb-10 text-black">
            <span className="font-bold">The Vertical Is Saturated. The Market Isn't.</span>
          </h2>
          <p className="text-base mb-8 text-black opacity-[0.84]">
            Wattpad, Inkitt, and others have hit their ceiling in Tier 1 markets. Their recent growth has come almost entirely from Tier 3 regions where monetisation is significantly harder. Romantasy, the genre that fuelled their rise, is now overplayed, and their platforms are entering a phase of consolidation rather than expansion.
          </p>
          <p className="text-base mb-8 text-black opacity-[0.84]">
            <span className="font-bold">Get Lost</span> is building what comes next.
            We're not chasing trends — we're creating space. Our genre-agnostic, creator-first platform is designed to reflect the full spectrum of today's reading culture, with 1.7 billion readers still waiting for a place that represents their tastes, communities, and voices.
          </p>
          
          <div className="mx-auto" style={{ maxWidth: "843px" }}>
            <img 
              src="/lovable-uploads/f0703492-ee56-410f-ae81-2515cf0c3330.png" 
              alt="Market Comparison Pie Chart" 
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketComparison;
