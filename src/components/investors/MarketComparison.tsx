
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
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-newsreader text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight text-white">
            <span className="font-bold">The Vertical Is Saturated. The Market Isn't.</span>
          </p>
          <p className="font-newsreader text-xl md:text-2xl lg:text-3xl mb-6 leading-tight text-white">
            Wattpad and Inkitt have peaked in Tier 1 markets, with growth now limited to harder-to-monetise regions and a single, overplayed genre.
          </p>
          <p className="font-newsreader text-xl md:text-2xl lg:text-3xl mb-12 leading-tight text-white">
            <span className="font-bold">Get Lost</span> is building the next chapter - a genre-agnostic, creator-first platform playing for the 1.7 billion readers still unclaimed.
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
