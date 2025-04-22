
import React, { useState, useEffect } from "react";
import "./ArchetypesCarousel.css";
import BookRecommendationsDialog from "./BookRecommendationsDialog";
import CarouselItem from "./CarouselItem";
import CarouselDescription from "./CarouselDescription";
import { archetypes } from "@/data/archetypes";
import { ArchetypeData } from "@/types/books";

const ArchetypesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = archetypes.length;
  const [itemsToShow, setItemsToShow] = useState(4);
  const [isResetting, setIsResetting] = useState(false);
  const [selectedArchetype, setSelectedArchetype] = useState<ArchetypeData | null>(null);

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
      background: "linear-gradient(135deg, rgba(229, 222, 255, 0.3) 0%, rgba(253, 225, 211, 0.3) 50%, rgba(242, 252, 226, 0.3) 100%)",
      backdropFilter: 'blur(10px)'
    }}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-newsreader font-semibold text-4xl mb-8 text-black">
          Book Recommendations From Brilliant Minds
        </h2>
        
        <div className="carousel-container">
          <div 
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
              transition: isResetting ? 'none' : 'transform 0.5s ease'
            }}
          >
            {allItems.map((archetype, index) => (
              <CarouselItem
                key={`${archetype.id}-${index}`}
                archetype={archetype}
                onClick={() => setSelectedArchetype(archetype)}
              />
            ))}
          </div>
        </div>
        
        <CarouselDescription />
        
        {selectedArchetype && (
          <BookRecommendationsDialog
            open={!!selectedArchetype}
            onClose={() => setSelectedArchetype(null)}
            personImage={selectedArchetype.imgSrc}
            personName={selectedArchetype.name}
            personTitle={selectedArchetype.title}
            bookRecommendations={selectedArchetype.books}
            headerImage={selectedArchetype.headerImage}
          />
        )}
      </div>
    </div>
  );
};

export default ArchetypesCarousel;

