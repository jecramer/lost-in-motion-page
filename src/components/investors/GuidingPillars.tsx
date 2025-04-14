
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Content for each pillar
const pillarsContent = [
  {
    id: "community",
    title: "Community",
    image: "/lovable-uploads/662d8b7a-6cb6-416b-a590-94b64b898796.png",
    description: "Our platform fosters a vibrant community of readers who share recommendations, discuss books, and participate in reading challenges together. We believe that reading is more enjoyable and meaningful when it's social."
  },
  {
    id: "recommendation",
    title: "Recommendation Engine",
    image: "/lovable-uploads/f6ba601c-2dfd-4915-a00a-de99dbca30fd.png",
    description: "Our AI-powered recommendation system learns from your reading habits and preferences to suggest books you'll love. Unlike generic algorithms, our engine understands nuanced connections between books and readers."
  },
  {
    id: "twitch",
    title: "The Twitch of Books",
    image: "/lovable-uploads/a3082241-5da5-4725-8934-cdf80b763b7a.png",
    description: "We're creating an interactive platform where authors can connect directly with readers in real-time. Imagine watching your favorite author write, discuss their process, or answer questions about their latest work."
  },
  {
    id: "c25k",
    title: "C25K for Books",
    image: "/lovable-uploads/bfdf6284-07b9-47e0-9e48-bf6a47ab379e.png",
    description: "Just like Couch to 5K helps new runners build stamina gradually, our reading program helps non-readers build a sustainable reading habit through scientifically designed progression and gamified challenges."
  }
];

const GuidingPillars = () => {
  const [activePillar, setActivePillar] = useState("community");

  // Find the active pillar content
  const activeContent = pillarsContent.find(pillar => pillar.id === activePillar) || pillarsContent[0];
  
  // Filter out the active pillar to show only non-active pillars as thumbnails
  const thumbnailPillars = pillarsContent.filter(pillar => pillar.id !== activePillar);

  return (
    <div className="w-full mb-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-newsreader font-semibold text-4xl mb-8 opacity-[0.92]">Guiding Pillars</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main content area - Left side */}
            <div className="flex flex-col space-y-4">
              {/* Main image */}
              <Card className="w-full aspect-square bg-white/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm">
                <AspectRatio ratio={1/1}>
                  <img 
                    src={activeContent.image} 
                    alt={activeContent.title} 
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                </AspectRatio>
              </Card>
              
              {/* Thumbnail images - only showing non-active pillars */}
              <div className="grid grid-cols-3 gap-4">
                {thumbnailPillars.map((pillar) => (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillar(pillar.id)}
                    className="relative p-0 border-0 focus:outline-none hover:ring-2 hover:ring-white/50"
                  >
                    <Card className="aspect-square bg-white/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm">
                      <AspectRatio ratio={1/1}>
                        <img 
                          src={pillar.image} 
                          alt={pillar.title} 
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                    </Card>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Content area - Right side, aligned with top of image */}
            <div className="flex flex-col justify-start h-full">
              <div className="bg-[#d5d197]/60 backdrop-blur-sm rounded-lg p-8 shadow-lg h-full">
                <h3 className="font-newsreader text-2xl font-medium mb-4">{activeContent.title}</h3>
                <p className="text-base opacity-90 leading-relaxed">
                  {activeContent.description}
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
