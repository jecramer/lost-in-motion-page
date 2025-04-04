
import React, { useEffect } from "react";
import CyclingTagline from "@/components/CyclingTagline";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const phrases = [
  "...in a Story", "...in a Dream", "...in a World", "...in Time", "...in Translation", 
  "...in Fantasy", "...in a Thriller", "...in Romance", "...in Sci-Fi", "...in Historical Fiction", 
  "...in a Mystery", "...in the Mood", "...in the Dark", "...in the Detail", "...in the Silence", 
  "...in the Noise", "...in Thought", "...Before Page One", "...Where the Map Ends", "...Between the Lines", 
  "...in Someone Else's Life", "...in the Ending", "...in Your Shelf", "...with Friends", "...with Strangers", 
  "...Together", "...Then Found", "...and Discover More", "...Stay Curious.", "...and Find Your Next Favourite", 
  "...Start Reading.", "...in What Comes Next", "...In Wonderland", "...In Westeros", "...In Pemberley", 
  "...In The Multiverse", "...In Gothic Horror", "...In The Cosmos", "...In Mythology", "...In Sonnets", 
  "...In Magical Realism", "...In Dystopia", "...In The Library", "...In The Footnotes", "...In A Whodunit", 
  "...In The Hero's Journey", "...In The Classics", "...In A Fairytale", "...In Haikus", "...In The Archives", 
  "...In A Cozy Mystery", "...In The Unwritten Pages"
];

const Index = () => {
  useEffect(() => {
    console.log('Background Image Path:', '/bg.png');

    // Additional diagnostic logging
    console.log('Window location:', window.location.href);
    console.log('Public path:', import.meta.env.PUBLIC_URL);

    // Verify image exists
    const img = new Image();
    img.onload = () => console.log('Image loaded successfully');
    img.onerror = e => console.error('Image failed to load', e);
    img.src = '/bg.png';

    // Function to clean up existing LaunchList widgets
    const cleanupLaunchListWidgets = () => {
      // Remove any existing LaunchList widget scripts first
      const existingScripts = document.querySelectorAll('script[src="https://getlaunchlist.com/js/widget.js"]');
      existingScripts.forEach(script => script.remove());
      
      // Remove any existing LaunchList styles
      const existingStyles = document.querySelectorAll('style[data-launchlist]');
      existingStyles.forEach(style => style.remove());
    };
    
    // Clean up before initializing
    cleanupLaunchListWidgets();

    // Initialize LaunchList widget
    console.log('Loading LaunchList widget script');
    const script = document.createElement('script');
    script.src = 'https://getlaunchlist.com/js/widget.js';
    script.defer = true;
    script.onload = () => {
      console.log('LaunchList widget script loaded');
      if (window.LaunchList && typeof window.LaunchList.initializeWidgets === 'function') {
        window.LaunchList.initializeWidgets();
      }
    };
    document.head.appendChild(script);

    // Add custom CSS for LaunchList widget styling
    const style = document.createElement('style');
    style.setAttribute('data-launchlist', 'true');
    style.textContent = `
      .launchlist-widget input[type="email"] {
        width: 200% !important;
        max-width: none !important;
        font-family: 'Newsreader', serif !important;
      }
      .launchlist-widget button {
        background-color: rgb(224, 214, 172) !important;
        font-family: 'Newsreader', serif !important;
      }
      .launchlist-widget * {
        font-family: 'Newsreader', serif !important;
      }
    `;
    document.head.appendChild(style);
    
    // Cleanup function for effect
    return () => {
      cleanupLaunchListWidgets();
    };
  }, []);

  return <>
      <Navbar />
      <div className="min-h-screen w-full flex flex-col relative" style={{
      backgroundImage: `url('/bg.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
        <div className="container mx-auto flex-1 pt-16 md:pt-24 px-4 md:px-8 flex flex-col items-center">
          <div className="max-w-5xl w-full">
            <h1 className="font-newsreader font-semibold text-[5rem] md:text-[7rem] lg:text-[12rem] text-white leading-tight drop-shadow-lg text-left opacity-[0.92]">
              Get Lost
            </h1>
            
            <div className="flex justify-end w-full">
              <p className="font-newsreader text-xl text-white opacity-[0.72] -mt-4 md:text-5xl">
                <CyclingTagline phrases={phrases} intervalTime={3000} />
              </p>
            </div>
            
            <div className="mt-8 mb-0 w-full">
              <div className="max-w-md">
                <p className="text-white text-xl md:text-2xl mb-4 opacity-[0.72]">Get notified when our site goes live</p>
                <div className="launchlist-widget" data-key-id="pBBH1O" data-height="180px"></div>
              </div>
            </div>

            <div className="w-full mb-16">
              <div className="bg-[#d5d197]/60 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                <h2 className="font-newsreader font-semibold text-3xl mb-6 text-center opacity-[0.92]">A New Chapter in Book Discovery</h2>
                <p className="text-lg leading-relaxed opacity-[0.84]">
                  Welcome to Get Lost, the only platform built to connect readers, authors, creators, and publishers in one vibrant, evolving literary ecosystem. Whether you're here to track your reading, discover something unforgettable, grow your audience, or market the next bestseller, this is where your story continues.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
              <Card className="bg-[#d5d197]/75 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-newsreader text-2xl font-semibold text-center opacity-[0.92]">For Readers</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2 opacity-[0.84]">
                    <li>Track your progress with elegant, distraction-free tools</li>
                    <li>Find books by mood, theme, or vibe</li>
                    <li>Join Neighbourhoods - micro-communities for niche genres, authors, and fandoms</li>
                    <li>Follow creators who share your taste</li>
                    <li>Review, rate, and recommend in a space that celebrates your voice</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-[#d5d197]/75 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-newsreader text-2xl font-semibold text-center opacity-[0.92]">For Authors & Creators</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2 opacity-[0.84]">
                    <li>Curate your own bookstore and get paid for every book sold</li>
                    <li>Match with readers who share your vibe from the moment they sign up</li>
                    <li>Offer exclusive content or subscriptions, Patreon-style</li>
                    <li>Surface your best content with algorithmic support—not suppression</li>
                    <li>Tap into Neighbourhoods and stay top-of-mind in your niche</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-[#d5d197]/75 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-newsreader text-2xl font-semibold text-center opacity-[0.92]">For Publishers</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2 opacity-[0.84]">
                    <li>Psychographic segmentation to identify reader types</li>
                    <li>Real-time sentiment analysis to test hooks, titles, and campaigns</li>
                    <li>First-party data from readers who share what they love</li>
                    <li>Direct marketing tools to launch, promote, and optimize your titles</li>
                    <li>High-fidelity reader behavior analytics, from click to conversion</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>;
};

export default Index;

