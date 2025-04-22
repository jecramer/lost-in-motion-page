import React from "react";
import { Card } from "@/components/ui/card";

const BuildingInfo = () => {
  return (
    <div className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h2 className="font-newsreader font-semibold text-4xl lg:text-5xl text-slate-950 hover:opacity-90 transition-opacity">
              Show off your reading life
            </h2>
            <p className="text-xl leading-relaxed text-slate-950 opacity-[0.84] hover:opacity-100 transition-opacity">
              Share your thoughts on books, connect with fellow readers, and discover new literary adventures.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Card className="w-full max-w-sm overflow-hidden">
              <img 
                src="/lovable-uploads/d068e3ff-81dd-409d-a04f-527749944c1b.png" 
                alt="Book Review Story" 
                className="w-full h-auto"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingInfo;
