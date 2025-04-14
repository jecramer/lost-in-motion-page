
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

const AdvisorsSection = () => {
  const advisorImages = [
    {
      src: "/lovable-uploads/e64a7f15-d198-4f7d-b46a-9a7ed4406a65.png",
      alt: "Advisor 1"
    },
    {
      src: "/lovable-uploads/1c1fc435-d40d-435b-9f81-cd9d29212bd2.png",
      alt: "Advisor 2"
    },
    {
      src: "/lovable-uploads/0bd4948e-41be-4031-a9c7-5d05b5d73949.png",
      alt: "Advisor 3"
    }
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
          <h2 className="font-newsreader font-semibold text-4xl mb-10 text-white">Our Advisors</h2>
          
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {advisorImages.map((image, index) => (
                <div key={index} className="w-full overflow-hidden rounded-lg shadow-lg">
                  <AspectRatio ratio={3/4} className="bg-white/10">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className={cn(
                        "w-full h-full object-cover",
                      )}
                    />
                  </AspectRatio>
                </div>
              ))}
            </div>
            
            <div className="md:w-1/2">
              <div className="text-white">
                <p className="text-base mb-6 opacity-[0.84] font-normal">
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
