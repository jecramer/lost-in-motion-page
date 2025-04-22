
import React from 'react';
import { ArchetypeData } from '@/types/books';

interface CarouselItemProps {
  archetype: ArchetypeData;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ 
  archetype, 
  onClick,
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <div 
      className="carousel-item"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div 
        className="aspect-[3/2] w-full relative rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
        onClick={onClick}
      >
        <img 
          src={archetype.imgSrc} 
          alt={`${archetype.name} - ${archetype.title}`} 
          className="carousel-image" 
        />
        <div className="carousel-caption">
          <h3 className="font-newsreader text-black">{archetype.name}</h3>
          {archetype.title && <p className="text-black/80">{archetype.title}</p>}
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
