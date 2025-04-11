
import React from "react";
import { Card } from "@/components/ui/card";

const OdinSection = () => {
  return (
    <div className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-newsreader font-semibold text-4xl mb-10 text-center text-black">
            Join the Deal On...
          </h2>
          
          <div className="flex justify-center mb-12">
            <img 
              src="/lovable-uploads/5a3a2073-9d3c-4056-b6e9-4edd1af81cec.png" 
              alt="ODIN Logo" 
              className="h-10"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Card className="w-full max-w-sm aspect-[4/5] bg-gray-200 border-none shadow-none"></Card>
            </div>
            
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-black">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                ab illo inventore veritatis et quasi ed ut perspiciatis unde omnis iste natus
                error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OdinSection;
