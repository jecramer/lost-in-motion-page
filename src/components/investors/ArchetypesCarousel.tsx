
import React, { useRef, useEffect, useState } from "react";
import "./ArchetypesCarousel.css";

interface ArchetypeData {
  id: number;
  imgSrc: string;
  name: string;
  title: string;
}

const archetypes: ArchetypeData[] = [
  {
    id: 1,
    imgSrc: "/lovable-uploads/cd3787d9-8b1c-41d7-a0ac-eb6c8f331368.png",
    name: "James Vowles",
    title: "Team Principal @ Williams Racing",
  },
  {
    id: 2,
    imgSrc: "/lovable-uploads/44959d19-33b3-4d5d-8ddd-95cc4cb6a896.png",
    name: "Dana Eckman",
    title: "",
  },
  {
    id: 3,
    imgSrc: "/lovable-uploads/cb94ddf7-29a4-46a4-b3d7-888ef998bd8a.png",
    name: "Jake Humphrey",
    title: "Creator @ highperformance",
  },
  {
    id: 4,
    imgSrc: "/lovable-uploads/c0ba7fa2-66a0-4076-981c-a8f7aea8ec7f.png",
    name: "Harry Stebbings",
    title: "Founder @ 20VC",
  },
  {
    id: 5,
    imgSrc: "/lovable-uploads/86944ce9-1a20-4476-9b69-1098d0734dda.png",
    name: "Steven Bartlett",
    title: "Founder @ FLIGHTSTORY",
  },
  {
    id: 6,
    imgSrc: "/lovable-uploads/3870710e-fff7-4237-89a0-9d0d01e91158.png",
    name: "Harry Stebbings",
    title: "Founder @ 20VC",
  },
  {
    id: 7,
    imgSrc: "/lovable-uploads/e222bfc7-1fe6-41fb-9e81-d004b180a551.png",
    name: "MY LIST",
    title: "",
  },
  {
    id: 8,
    imgSrc: "/lovable-uploads/fe6517b6-a5af-4465-b8eb-c7a176d7b751.png",
    name: "Joakim Achrén",
    title: "General Partner @ F4 Fund",
  },
  {
    id: 9,
    imgSrc: "/lovable-uploads/efb70dad-7599-4bb0-99aa-ee48bb864ee8.png",
    name: "Magnus Hambleton",
    title: "VC @ byFounders",
  },
];

const ArchetypesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = archetypes.length;
  const itemsToShow = () => {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 1024) return 3;
    return 4;
  };

  // Clone the first few items to create a seamless loop
  const allItems = [...archetypes, ...archetypes.slice(0, itemsToShow())];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // When we reach the end, quickly reset to 0 without animation
        if (prevIndex >= totalItems - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 1200); // Move one item every 1.2 seconds

    return () => clearInterval(interval);
  }, [totalItems]);

  return (
    <div className="w-full py-16" style={{
      backgroundImage: `url('/bg.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-newsreader font-semibold text-4xl mb-8 opacity-[0.92] text-white">Archetypes</h2>
        
        <div className="carousel-container">
          <div 
            className="carousel-track" 
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsToShow())}%)` 
            }}
          >
            {allItems.map((archetype, index) => (
              <div key={`${archetype.id}-${index}`} className="carousel-item">
                <div className="aspect-[3/2] w-full relative rounded-lg overflow-hidden">
                  <img 
                    src={archetype.imgSrc} 
                    alt={`${archetype.name} - ${archetype.title}`} 
                    className="carousel-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-white">
          <div className="space-y-2">
            <p className="text-base leading-relaxed opacity-[0.84] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          
          <div className="space-y-2">
            <p className="text-base leading-relaxed opacity-[0.84] font-normal">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          
          <div className="space-y-2">
            <p className="text-base leading-relaxed opacity-[0.84] font-normal">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchetypesCarousel;
