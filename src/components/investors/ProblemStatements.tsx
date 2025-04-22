import React from "react";

const problemStatements = [
  {
    title: "Book discovery is broken",
    content: "Algorithms push trends. Amazon pushes transactions. Readers are overwhelmed.",
    image: "/lovable-uploads/b3a5106e-9f74-47d4-9190-7174dbf38ac2.png"
  },
  {
    title: "Marketing is ineffective",
    content: "Publishers' marketing spend uses outdated tools and inefficient targeting, most of it missing the mark.",
    image: "/lovable-uploads/09560968-1713-4264-bdc8-db31e68aeaed.png"
  },
  {
    title: "Where's the community?",
    content: "Discussion around books is scattered across the internet, fragmented and hard to follow.",
    image: "/lovable-uploads/74c46143-b555-4236-9f34-e7bdd569e0b2.png"
  }
];

const ProblemStatements = () => {
  return (
    <div className="w-full py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-newsreader font-semibold mb-8 text-center opacity-[0.92] text-5xl text-slate-950 hover:opacity-100 transition-opacity">The $15bn Opportunity in Book Publishing</h2>
          
          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-8 mb-12 transform transition-all duration-300 hover:bg-white/40">
            <p className="leading-relaxed opacity-[0.84] text-center text-2xl hover:opacity-100 transition-opacity">Book publishers spend €15bn a year on marketing, much of it through channels that don't reach engaged readers. Ads are misplaced, social content gets buried, and recommendation algorithms favour the biggest players. Get Lost changes the game. Psychographic segmentation and discovery means a shift from trend-following to taste-led. From blanket guesswork to pinpoint prediction.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problemStatements.map((statement, index) => (
              <div key={index} className="relative group transform transition-all duration-300 hover:translate-y-[-8px]">
                <div className="bg-white/30 backdrop-blur-sm rounded-lg p-6 cursor-pointer transition-all duration-300 hover:bg-white/40 overflow-hidden flex flex-col items-center justify-center">
                  <h3 className="font-newsreader text-2xl font-medium mb-4 opacity-[0.92] text-center">
                    {statement.title}
                  </h3>
                  <div className="w-full h-64 mb-4 overflow-hidden rounded-lg">
                    <img src={statement.image} alt={statement.title} className="w-full h-full object-cover" />
                  </div>
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
