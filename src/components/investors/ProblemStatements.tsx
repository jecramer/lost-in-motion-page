
import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const problemStatements = [
  {
    title: "Book discovery is broken",
    content: "Algorithms push trends. Amazon pushes transactions. Readers are overwhelmed."
  },
  {
    title: "€15 billion a year is wasted",
    content: "€15 billion is spent every year by publishers trying to market their product - and most of it misses the mark."
  },
  {
    title: "Where's the audience?",
    content: "188,000 books were published in the UK in 2023 - most never find an audience."
  }
];

const ProblemStatements = () => {
  return (
    <div className="w-full py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problemStatements.map((statement, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <div className="bg-white/30 backdrop-blur-sm rounded-lg p-6 cursor-pointer transition-all duration-300 hover:bg-white/40">
                    <h3 className="font-newsreader text-2xl font-medium mb-2 opacity-[0.92]">
                      {statement.title}
                    </h3>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-white/95 backdrop-blur-sm p-4">
                  <p className="text-base opacity-[0.84]">{statement.content}</p>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatements;
