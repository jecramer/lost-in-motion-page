
import React from 'react';
const CarouselDescription = () => {
  return <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      <div className="space-y-2">
        <p className="text-xl mb-6 text-black/90 font-normal hover:opacity-100 transition-opacity">Books are more than pastimes – they're passports to how remarkable people think. The titles we collect here aren't just favourites, they're fingerprints: a way to trace ambition, curiosity, and character across the people shaping our culture.</p>
      </div>
      
      <div className="space-y-2">
        <p className="text-xl mb-6 text-black/90 font-normal hover:opacity-100 transition-opacity">From bestselling authors to breakout creators, we reveal the stories that inspire the storytellers. See what founders, Olympians, podcasters and pioneers are reading – and what those choices say about them. Every list is a conversation waiting to happen.</p>
      </div>
      
      <div className="space-y-2">
        <p className="text-xl mb-6 text-black/90 font-normal hover:opacity-100 transition-opacity">Get closer to the people you admire by reading what they read. Whether it's a quiet classic or a new release changing minds, our curated libraries show you the titles that made a difference – and the ones that might change your path next.</p>
      </div>
    </div>;
};
export default CarouselDescription;
