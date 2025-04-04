
import React, { useEffect } from "react";
import CyclingTagline from "@/components/CyclingTagline";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";

const phrases = ["In Wonderland", "In Westeros", "In Pemberley", "In The Multiverse", "In Gothic Horror", "In The Cosmos", "In Mythology", "In Sonnets", "In Magical Realism", "In Dystopia", "In The Library", "In The Footnotes", "In A Whodunit", "In The Hero's Journey", "In The Classics", "In A Fairytale", "In Haikus", "In The Archives", "In A Cozy Mystery", "In The Unwritten Pages"];

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

    // Re-initialize LaunchList widget if needed
    if (window.LaunchList && typeof window.LaunchList.initializeWidgets === 'function') {
      window.LaunchList.initializeWidgets();
    } else {
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
    }

    // Add custom CSS for LaunchList widget styling
    const style = document.createElement('style');
    style.textContent = `
      .launchlist-widget input[type="email"] {
        width: 100% !important;
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
  }, []);

  return <>
      <Navbar />
      <div className="min-h-screen w-full flex flex-col relative" style={{
      backgroundImage: `url('/bg.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
        {/* Content */}
        <div className="container mx-auto flex-1 pt-16 md:pt-24 px-4 md:px-8 flex flex-col">
          {/* Main Heading Area */}
          <div className="max-w-5xl">
            <h1 className="font-newsreader font-semibold text-[5rem] md:text-[7rem] lg:text-[12rem] text-white leading-tight drop-shadow-lg text-left">
              Get Lost
            </h1>
            
            {/* Tagline */}
            <p className="font-newsreader text-xl text-white opacity-80 -mt-4 md:text-5xl">
              Turning distraction into discovery.
            </p>
            
            {/* Email Signup Section */}
            <div className="mt-24 mb-16">
              <div className="max-w-md">
                <p className="text-white text-xl md:text-2xl mb-4">Get notified when our site goes live</p>
                <div className="launchlist-widget" data-key-id="pBBH1O" data-height="180px"></div>
              </div>
            </div>

            {/* New Section with Custom Background Color */}
            <div className="w-full flex justify-center">
              <div className="max-w-4xl w-full my-4">
                <div className="bg-[#d5d197]/90 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                  <h2 className="font-newsreader font-semibold text-3xl mb-6 text-center">A New Chapter in Book Discovery</h2>
                  <p className="text-lg leading-relaxed">
                    Welcome to Get Lost, the only platform built to connect readers, authors, creators, and publishers in one vibrant, evolving literary ecosystem. Whether you're here to track your reading, discover something unforgettable, grow your audience, or market the next bestseller, this is where your story continues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
};

export default Index;
