
import React from "react";

const TeamSection = () => {
  const teamImages = [
    {
      src: "/lovable-uploads/fe0956aa-84d5-4b26-9f27-48dbadcbdf35.png",
      alt: "Team Member 1"
    },
    {
      src: "/lovable-uploads/cb94ddf7-29a4-46a4-b3d7-888ef998bd8a.png", 
      alt: "Team Member 2"
    },
    {
      src: "/lovable-uploads/73f6d14d-d760-433b-9df1-c34528dfef26.png",
      alt: "Team Member 3"
    },
    {
      src: "/lovable-uploads/cd3787d9-8b1c-41d7-a0ac-eb6c8f331368.png",
      alt: "Team Member 4"
    },
    {
      src: "/lovable-uploads/ce39e4e3-80ae-4f5b-ab26-c8949868315d.png",
      alt: "Team Member 5"
    },
  ];

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
          <h2 className="font-newsreader font-semibold text-4xl mb-10 text-center text-white">The Get Lost Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {teamImages.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-[0_4px_8px_#0006]">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="space-y-2">
              <p className="text-base mb-6 opacity-[0.84] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-base mb-6 opacity-[0.84] font-normal">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-base mb-6 opacity-[0.84] font-normal">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
