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
          
          <div className="mx-auto" style={{ maxWidth: "1125px" }}>
            <img 
              src="/lovable-uploads/46d12ee8-197c-4ef1-86da-4efaf05731a0.png" 
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
