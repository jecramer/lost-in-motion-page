import React, { useEffect, useRef } from "react";
import CyclingTagline from "@/components/CyclingTagline";
import Navbar from "@/components/Navbar";
import { ArrowDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import GuidingPillars from "@/components/investors/GuidingPillars";
import OdinSection from "@/components/investors/OdinSection";

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
  const isMobile = useIsMobile();
  const mobileSectionRef = useRef<HTMLDivElement>(null);

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

  const scrollToMobileSection = () => {
    mobileSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const backgroundStyle = {
    backgroundImage: `url('/bg.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  };

  return (
    <div className="min-h-screen animate-fade-in" style={backgroundStyle}>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center relative">
          <h1 className="font-newsreader font-semibold text-[5rem] md:text-[7rem] lg:text-[12rem] text-white leading-tight drop-shadow-lg hover:scale-[1.02] transition-transform duration-300">
            Get Lost
          </h1>
          <div className="transform hover:scale-105 transition-all duration-300">
            <p className="font-newsreader text-xl md:text-5xl text-white opacity-[0.72] text-right hover:opacity-100 transition-opacity">
              <CyclingTagline phrases={phrases} intervalTime={3000} />
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto mt-16 px-4">
            <p className="font-newsreader text-2xl md:text-3xl text-white/80 text-center italic opacity-90 hover:opacity-100 transition-opacity leading-relaxed">
              Our mission: 
              To become the natural home for readers, authors, and publishers online. 
              Get Lost is improving people's reading habits by focusing relentlessly on fixing broken book discovery and turning reading into a fun and engaging social hobby.
            </p>
          </div>

          <div className="mt-16 ml-4 transform hover:scale-105 transition-all duration-300">
            <h3 className="font-newsreader text-2xl text-white mb-4 text-left">Coming Soon</h3>
            <div 
              className="launchlist-widget w-full ml-0"
              data-key-id="pBBH1O"
              data-height="180px"
              style={{
                '--widget-background': 'transparent',
                '--widget-border': 'none',
                '--widget-text': 'white',
                '--button-background': '#e0d6ac',
                '--button-text': '#94af45',
                '--input-background': 'rgba(255, 255, 255, 0.95)',
                '--input-border': 'rgba(255, 255, 255, 0.2)',
                '--input-text': '#333',
                '--input-align': 'left',
                '--input-width': 'clamp(300px, 90%, 600px)',
                '--input-padding': '12px 16px',
                '--input-border-radius': '8px',
                '--button-margin-left': '12px',
                '--button-padding': '12px 24px',
                '--button-border-radius': '8px',
              } as React.CSSProperties}
            />
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 text-white hover:text-white/80 hover:scale-110 transition-all duration-300"
            onClick={scrollToMobileSection}
          >
            <ArrowDown className="w-8 h-8 animate-bounce" />
          </Button>
        </div>
      </div>

      <div className="w-full" ref={mobileSectionRef}>
        <GuidingPillars hideEmailSignup={true} />
        <OdinSection />
      </div>
    </div>
  );
};

export default Index;
