
import React from "react";
import { BookX, BanknoteIcon, UsersRound } from "lucide-react";

const problemStatements = [
  {
    title: "Book discovery is broken",
    content: "Algorithms push trends. Amazon pushes transactions. Readers are overwhelmed.",
    icon: <BookX className="w-32 h-32 mb-4 opacity-90 text-red-500/80" />
  },
  {
    title: "€15 billion a year is wasted",
    content: "€15 billion is spent every year by publishers trying to market their product - and most of it misses the mark.",
    icon: <BanknoteIcon className="w-32 h-32 mb-4 opacity-90 text-emerald-600/80" />
  },
  {
    title: "Where's the audience?",
    content: "188,000 books were published in the UK in 2023 - most never find an audience.",
    icon: <UsersRound className="w-32 h-32 mb-4 opacity-90 text-blue-500/80" />
  }
];

const ProblemStatements = () => {
  return (
    <div className="w-full py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-newsreader font-semibold text-4xl mb-8 text-white text-center opacity-[0.92]">
            The $15bn Book Publishing Opportunity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problemStatements.map((statement, index) => (
              <div key={index} className="relative group">
                <div className="bg-white/30 backdrop-blur-sm rounded-lg p-6 cursor-pointer transition-all duration-300 hover:bg-white/40 overflow-hidden flex flex-col items-center justify-center">
                  <h3 className="font-newsreader text-2xl font-medium mb-4 opacity-[0.92] text-center">
                    {statement.title}
                  </h3>
                  {statement.icon}
                  <div className="absolute left-0 top-full w-full bg-white/95 backdrop-blur-sm p-4 rounded-b-lg transform translate-y-0 opacity-0 group-hover:opacity-100 group-hover:-translate-y-full transition-all duration-200">
                    <p className="text-base opacity-[0.84] text-center">{statement.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatements;
