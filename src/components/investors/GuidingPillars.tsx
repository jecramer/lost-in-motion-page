
import React from "react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const GuidingPillars = () => {
  return (
    <div className="w-full mb-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-newsreader font-semibold text-3xl mb-8 opacity-[0.92]">Guiding Pillars</h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <Card className="aspect-square bg-white/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm">
                <AspectRatio ratio={1/1}>
                  <img 
                    src="/lovable-uploads/a093a8fa-a562-4898-ab2b-d5f3f139e38d.png" 
                    alt="Community" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </Card>
              <Card className="aspect-square bg-white/30 backdrop-blur-sm rounded-lg p-4 shadow-sm">
              </Card>
              <Card className="aspect-square bg-white/30 backdrop-blur-sm rounded-lg p-4 shadow-sm">
              </Card>
              <Card className="aspect-square bg-white/30 backdrop-blur-sm rounded-lg p-4 shadow-sm">
              </Card>
            </div>
            
            <div className="md:w-1/2">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed opacity-[0.84] font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
                <p className="text-lg leading-relaxed opacity-[0.84] font-normal">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                
                <p className="text-lg leading-relaxed opacity-[0.84] font-normal">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidingPillars;
