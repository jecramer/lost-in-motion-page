
import React from "react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const GuidingPillars = () => {
  return (
    <div className="w-full mb-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-newsreader font-semibold text-3xl mb-8 opacity-[0.92]">Guiding Pillars</h2>
          
          <div className="flex flex-col gap-8">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="aspect-square bg-white/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm">
                <AspectRatio ratio={1/1}>
                  <img 
                    src="/lovable-uploads/662d8b7a-6cb6-416b-a590-94b64b898796.png" 
                    alt="Community" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </Card>
              <Card className="aspect-square bg-white/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm">
                <AspectRatio ratio={1/1}>
                  <img 
                    src="/lovable-uploads/73f6d14d-d760-433b-9df1-c34528dfef26.png" 
                    alt="Recommendation Engine" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </Card>
              <Card className="aspect-square bg-white/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm">
                <AspectRatio ratio={1/1}>
                  <img 
                    src="/lovable-uploads/5046d8a3-9dc0-477c-b8bd-cd1da525ed33.png" 
                    alt="The Twitch of Books" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </Card>
              <Card className="aspect-square bg-white/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm">
                <AspectRatio ratio={1/1}>
                  <img 
                    src="/lovable-uploads/16fa3cf1-527e-410f-82d9-98011c660636.png" 
                    alt="C25K for Books" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidingPillars;
