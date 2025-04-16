import React from "react";

const problemStatements = [
  {
    title: "Book discovery is broken",
    content: "Algorithms push trends. Amazon pushes transactions. Readers are overwhelmed.",
    image: "/lovable-uploads/b3a5106e-9f74-47d4-9190-7174dbf38ac2.png"  // Image of books with a hand selecting a book
  },
  {
    title: "€15 billion a year is wasted",
    content: "€15 billion is spent every year by publishers trying to market their product - and most of it misses the mark.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400"  // Money/business concept
  },
  {
    title: "Where's the audience?",
    content: "188,000 books were published in the UK in 2023 - most never find an audience.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400"  // Empty audience/seats
  }
];

const ProblemStatements = () => {
  return (
    <div className="w-full py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-newsreader font-semibold text-4xl mb-8 text-black text-center opacity-[0.92]">
            The $15bn Book Publishing Opportunity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {problemStatements.map((statement, index) => (
              <div key={index} className="relative group">
                <div className="bg-white/30 backdrop-blur-sm rounded-lg p-6 cursor-pointer transition-all duration-300 hover:bg-white/40 overflow-hidden flex flex-col items-center justify-center">
                  <h3 className="font-newsreader text-2xl font-medium mb-4 opacity-[0.92] text-center">
                    {statement.title}
                  </h3>
                  <div className="w-full h-64 mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={statement.image} 
                      alt={statement.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute left-0 top-full w-full bg-white/95 backdrop-blur-sm p-4 rounded-b-lg transform translate-y-0 opacity-0 group-hover:opacity-100 group-hover:-translate-y-full transition-all duration-200">
                    <p className="text-base opacity-[0.84] text-center">{statement.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-8">
            <p className="text-lg leading-relaxed opacity-[0.84] text-center">
              Book publishers spend €15bn a year on marketing, much of it through channels that don't reach engaged readers. Ads are misplaced, social content gets buried, and recommendation algorithms favour the biggest players. Get Lost changes the game. Psychographic segmentation and discovery means a shift from trend following to taste-led. From blanket guesswork to pinpoint prediction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatements;
