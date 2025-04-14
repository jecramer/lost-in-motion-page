
import React from "react";

const AdvisorsSection = () => {
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
          <h2 className="font-newsreader font-semibold text-4xl mb-10 text-white">Our Advisors</h2>
          
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-[3/4] w-full"></div>
              </div>
              <div className="bg-white/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-[3/4] w-full"></div>
              </div>
              <div className="bg-white/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-[3/4] w-full"></div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="text-white">
                <p className="text-base leading-relaxed opacity-[0.84] font-normal">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisorsSection;
