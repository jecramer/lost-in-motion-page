
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
    title: "Team Principal @ Williams Racing"
  }, {
    id: 2,
    imgSrc: "/lovable-uploads/d145f66f-ca4c-4765-ba19-503e508bd56a.png",
    name: "Katty Kay",
    title: "Journalist @ BBC US"
  }, {
    id: 3,
    imgSrc: "/lovable-uploads/cb94ddf7-29a4-46a4-b3d7-888ef998bd8a.png",
    name: "Jake Humphrey",
    title: "Creator @ highperformance"
  }, {
    id: 4,
    imgSrc: "/lovable-uploads/c0ba7fa2-66a0-4076-981c-a8f7aea8ec7f.png",
    name: "Harry Stebbings",
    title: "Founder @ 20VC"
  }, {
    id: 5,
    imgSrc: "/lovable-uploads/98702e58-a3f6-4d47-8749-ae6e1dc8757c.png",
    name: "Steven Bartlett",
    title: "Founder @ FLIGHTSTORY"
  }, {
    id: 6,
    imgSrc: "/lovable-uploads/3870710e-fff7-4237-89a0-9d0d01e91158.png",
    name: "Harry Stebbings",
    title: "Founder @ 20VC"
  }, {
    id: 7,
    imgSrc: "/lovable-uploads/e222bfc7-1fe6-41fb-9e81-d004b180a551.png",
    name: "MY LIST",
    title: ""
  }
];

const ArchetypesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = archetypes.length;
  const [itemsToShow, setItemsToShow] = useState(4);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) setItemsToShow(1);
      else if (window.innerWidth <= 768) setItemsToShow(2);
      else if (window.innerWidth <= 1024) setItemsToShow(3);
      else setItemsToShow(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const allItems = [...archetypes, ...archetypes.slice(0, itemsToShow)];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex >= totalItems - 1) {
        setCurrentIndex(currentIndex + 1);
        setTimeout(() => {
          setIsResetting(true);
          setCurrentIndex(0);
          setTimeout(() => {
            setIsResetting(false);
          }, 50);
        }, 500);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, totalItems]);

  return (
    <div className="w-full py-16" style={{
      background: "linear-gradient(135deg, #E5DEFF 0%, #FDE1D3 50%, #F2FCE2 100%)",
    }}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-newsreader font-semibold text-4xl mb-8 text-black">Book Recommendations From Brilliant Minds</h2>
        
        <div className="carousel-container">
          <div className="carousel-track" style={{
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            transition: isResetting ? 'none' : 'transform 0.5s ease'
          }}>
            {allItems.map((archetype, index) => (
              <div key={`${archetype.id}-${index}`} className="carousel-item">
                <div className="aspect-[3/2] w-full relative rounded-lg overflow-hidden">
                  <img src={archetype.imgSrc} alt={`${archetype.name} - ${archetype.title}`} className="carousel-image" />
                  <div className="carousel-caption">
                    <h3 className="font-newsreader text-black">{archetype.name}</h3>
                    {archetype.title && <p className="text-black/80">{archetype.title}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="space-y-2">
            <p className="text-base mb-6 text-black/90 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          
          <div className="space-y-2">
            <p className="text-base mb-6 text-black/90 font-normal">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          
          <div className="space-y-2">
            <p className="text-base mb-6 text-black/90 font-normal">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchetypesCarousel;
