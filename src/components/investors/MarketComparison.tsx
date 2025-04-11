
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
            <span className="font-bold">Wattpad</span> and <span className="font-bold">Inkitt</span> have saturated the Romantasy genre
            and their user growth in Western markets is in decline.
          </p>
          <p className="font-newsreader text-3xl md:text-4xl lg:text-5xl mb-12 leading-tight text-white">
            <span className="font-bold">Get Lost</span> will capture the 1.7bn readers they 
            have left behind.
          </p>
          
          <div className="bg-white/30 backdrop-blur-sm rounded-lg overflow-hidden mx-auto" style={{ maxWidth: "600px", height: "280px" }}>
            {/* Placeholder for chart or image */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketComparison;
