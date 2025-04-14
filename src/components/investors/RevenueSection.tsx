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
        <div 
          className="max-w-5xl mx-auto bg-white/30 backdrop-blur-sm p-10 rounded-lg shadow-lg" 
        >
          <h2 className="font-newsreader font-semibold text-4xl mb-10 text-center text-black">Revenue Potential - 5 Year Horizon</h2>
          
          <div className="space-y-4 text-black mb-12">
            <p className="text-base opacity-[0.84] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          
          <div className="mx-auto" style={{ maxWidth: "700px", height: "350px" }}>
            {/* Placeholder for revenue chart */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueSection;
