
import React from "react";

const RevenueSection = () => {
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
          <h2 className="font-newsreader font-semibold text-4xl mb-10 text-center text-white">Revenue Potential - 5 Year Horizon</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-white">
            <div className="space-y-2">
              <p className="text-base leading-relaxed opacity-[0.84] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-base leading-relaxed opacity-[0.84] font-normal">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-base leading-relaxed opacity-[0.84] font-normal">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden mx-auto" style={{ maxWidth: "700px", height: "350px" }}>
            {/* Placeholder for revenue chart */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueSection;
