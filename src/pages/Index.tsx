
import React, { useEffect } from "react";
import CyclingTagline from "@/components/CyclingTagline";

const phrases = [
  "...in a Story", "...in a Dream", "...in a World", "...in Time", "...in Translation", 
  "...in Fantasy", "...in a Thriller", "...in Romance", "...in Sci-Fi", "...in Historical Fiction", 
  "...in a Mystery", "...in the Mood", "...in the Dark", "...in the Detail", "...in the Silence", 
  "...in the Noise", "...in Thought", "...Before Page One", "...Where the Map Ends", 
  "...Between the Lines", "...in Someone Else's Life", "...in the Ending", "...in Your Shelf", 
  "...with Friends", "...with Strangers", "...Together", "...Then Found", "...and Discover More", 
  "...Stay Curious.", "...and Find Your Next Favourite", "...Start Reading.", "...in What Comes Next", 
  "...In Wonderland", "...In Westeros", "...In Pemberley", "...In The Multiverse", "...In Gothic Horror", 
  "...In The Cosmos", "...In Mythology", "...In Sonnets", "...In Magical Realism", "...In Dystopia", 
  "...In The Library", "...In The Footnotes", "...In A Whodunit", "...In The Hero's Journey", 
  "...In The Classics", "...In A Fairytale", "...In Haikus", "...In The Archives", 
  "...In A Cozy Mystery", "...In The Unwritten Pages"
];

const Index = () => {
  useEffect(() => {
    const existingScripts = document.querySelectorAll('script[src="https://getlaunchlist.com/js/widget.js"]');
    existingScripts.forEach(script => script.remove());

    const script = document.createElement('script');
    script.src = 'https://getlaunchlist.com/js/widget.js';
    script.defer = true;
    script.onload = () => {
      if (window.LaunchList && typeof window.LaunchList.initializeWidgets === 'function') {
        window.LaunchList.initializeWidgets();
      }
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage: `url('/bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="text-center relative w-full max-w-[1200px]">
        <h1 className="font-newsreader font-semibold text-[5rem] md:text-[7rem] lg:text-[12rem] text-white leading-tight drop-shadow-lg">
          Get Lost
        </h1>
        <div className="mt-4">
          <p className="font-newsreader text-xl md:text-5xl text-white opacity-[0.72] text-right">
            <CyclingTagline phrases={phrases} intervalTime={3000} />
          </p>
        </div>
        <div className="mt-16">
          <h3 className="font-newsreader text-2xl text-white mb-8 text-left">Coming Soon</h3>
          <div 
            className="launchlist-widget w-full max-w-[1000px] mx-auto"
            data-key-id="pBBH1O"
            data-height="180px"
            style={{
              '--widget-background': 'rgba(255, 255, 255, 0.1)',
              '--widget-border': 'none',
              '--widget-text': 'white',
              '--button-background': '#e0d6ac',
              '--button-text': '#94af45',
              '--input-background': 'rgba(255, 255, 255, 0.1)',
              '--input-border': 'rgba(255, 255, 255, 0.2)',
              '--input-text': 'white',
              '--input-width': '800px' // Explicitly set a wider input width
            } as React.CSSProperties}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
