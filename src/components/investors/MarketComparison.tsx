
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
        <div className="max-w-5xl mx-auto">
          <h2 className="font-newsreader font-semibold text-4xl mb-10 text-black">
            <span className="font-bold">The Vertical Is Saturated. The Market Isn't.</span>
          </h2>
          
          <div className="bg-white/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg">
            <AspectRatio ratio={16/9} className="w-full">
              <video
                controls
                className="w-full h-full object-cover"
                poster="/lovable-uploads/ce39e4e3-80ae-4f5b-ab26-c8949868315d.png"
              >
                <source src="/lovable-uploads/your-market-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </AspectRatio>
          </div>
          
          <p className="text-base mt-6 opacity-[0.84] font-normal text-black text-center">
            Get Lost is building what comes next. We're creating space for the 1.7 billion readers still waiting for their platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketComparison;
