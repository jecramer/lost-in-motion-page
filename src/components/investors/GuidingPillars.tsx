import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const pillarsContent = [
  {
    id: "community",
    title: "Join a community of readers",
    image: "/lovable-uploads/80471580-6877-4cb1-8eb5-be199d57c102.png",
    description: "Our platform fosters a vibrant community of readers who share recommendations, discussions, and participate in reading challenges together. We believe that reading is more enjoyable and meaningful when it's social.\n\nSocial features turn readers into loyal users. Community tools deepen emotional investment and create the conditions for viral growth through word-of-mouth and shared discovery."
  },
  {
    id: "recommendation",
    title: "Get personalised recommendations",
    image: "/lovable-uploads/f6ba601c-2dfd-4915-a00a-de99dbca30fd.png",
    description: "Smart suggestions powered by people and machine learning."
  },
  {
    id: "explore",
    title: "Explore curated booklists",
    image: "/lovable-uploads/bfdf6284-07b9-47e0-9e48-bf6a47ab379e.png",
    description: "Follow trusted voices and uncover hidden gems."
  },
  {
    id: "habits",
    title: "Build healthy reading habits",
    image: "/lovable-uploads/74c46143-b555-4236-9f34-e7bdd569e0b2.png",
    description: "Take on challenges that make reading joyful again."
  },
  {
    id: "subscribe",
    title: "Subscribe for exclusive content",
    image: "/lovable-uploads/ce39e4e3-80ae-4f5b-ab26-c8949868315d.png",
    description: "Support your favourite authors and go beyond the page."
  },
  {
    id: "review",
    title: "Rate and review what you read",
    image: "/lovable-uploads/ca1bd41e-27da-4553-9e7f-eee722331456.png",
    description: "Capture your thoughts and share them with a community that cares."
  },
  {
    id: "progress",
    title: "Show off your reading life",
    image: "/lovable-uploads/18eb4543-dddc-4b2c-a272-ded3ccc66e65.png",
    description: "Celebrate your progress with beautiful reading wrap-ups and shareable milestones."
  }
];

const GuidingPillars = () => {
  const [activePillar, setActivePillar] = useState("community");

  const activeContent = pillarsContent.find(pillar => pillar.id === activePillar) || pillarsContent[0];
  
  const thumbnailPillars = pillarsContent.filter(pillar => pillar.id !== activePillar);

  return (
    <div className="w-full mb-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Removed heading */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-4">
              <Card className="w-full aspect-square bg-white/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm">
                <AspectRatio ratio={1/1}>
                  <img 
                    src={activeContent.image} 
                    alt={activeContent.title} 
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                </AspectRatio>
              </Card>
              
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
            
            <div className="flex flex-col justify-start h-full">
              <div className="bg-[#d5d197]/60 backdrop-blur-sm rounded-lg p-8 shadow-lg h-full">
                <h3 className="font-newsreader text-2xl font-medium mb-4">{activeContent.title}</h3>
                <p className="text-base mb-6 opacity-[0.84] font-normal">
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
