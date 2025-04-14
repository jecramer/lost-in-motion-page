
import React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

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
          
          <div className="flex flex-col items-center md:flex-row md:items-start gap-8 mb-12">
            <Card className="bg-transparent border-0 shadow-none w-full">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                {advisorImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="rounded-lg overflow-hidden shadow-lg" 
                    style={{ 
                      width: '195px', 
                      height: '195px',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.2)' 
                    }}
                  >
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </Card>
            
            <div className="md:w-1/2 mt-8 md:mt-0">
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
