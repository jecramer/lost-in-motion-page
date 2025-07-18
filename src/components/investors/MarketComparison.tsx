
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const MarketComparison = () => {
  return (
    <div style={{
      backgroundImage: `url('/bg.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }} className="w-full py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto bg-white/30 backdrop-blur-sm p-10 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl">
          <h2 className="font-newsreader font-semibold text-5xl mb-10 text-black text-center hover:opacity-90 transition-opacity">
            <span className="font-bold">The Vertical Is Saturated. The Market Isn't.</span>
          </h2>
          <p className="text-xl mb-6 opacity-[0.84] font-normal text-black hover:opacity-100 transition-opacity">
            Wattpad, Inkitt, and others have hit their ceiling in Tier 1 markets. Their recent growth has come almost entirely from Tier 3 regions where monetisation is significantly harder. Romantasy, the genre that fuelled their rise, is now overplayed, and their platforms are entering a phase of consolidation rather than expansion.
          </p>
          <p className="text-xl mb-6 opacity-[0.84] font-normal text-black hover:opacity-100 transition-opacity">
            <span className="font-bold">Get Lost</span> is building what comes next.
            We're not chasing trends — we're creating space. Our genre-agnostic, creator-first platform is designed to reflect the full spectrum of today's reading culture, with 1.7 billion readers still waiting for a place that represents their tastes, communities, and voices.
          </p>
          
          <div className="mx-auto transform transition-all duration-300 hover:scale-[1.02]" style={{
            maxWidth: "632px"
          }}>
            <img src="/lovable-uploads/ce39e4e3-80ae-4f5b-ab26-c8949868315d.png" alt="Market Comparison Pie Chart" className="w-full object-contain" />
          </div>

          <div className="mt-8 flex justify-center">
            <a 
              href="https://jamescramer.substack.com/p/unlocking-storytelling-the-rise-of" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                className="group flex items-center gap-2 text-lg font-medium transition-all duration-300 hover:gap-4"
                variant="outline"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-all duration-300" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketComparison;
