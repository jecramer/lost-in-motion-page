
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
    img.onerror = (e) => console.error('Image failed to load', e);
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

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full flex flex-col relative" style={{
        backgroundImage: `url('/bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Content */}
        <div className="container mx-auto flex-1 pt-16 md:pt-24 px-4 md:px-8">
          {/* Main Heading Area */}
          <div className="max-w-5xl">
            <h1 className="font-newsreader font-semibold text-[5rem] md:text-[7rem] lg:text-[12rem] text-white leading-tight drop-shadow-lg text-left">
              Get Lost
            </h1>
            
            {/* New Tagline */}
            <p className="font-newsreader text-xl md:text-2xl text-white opacity-80 mb-8">
              Turning distraction into discovery.
            </p>
            
            {/* LaunchList Widget - Removing semi-transparent container */}
            <div className="mt-8 mb-16">
              <p className="text-white text-xl md:text-2xl mt-2 mb-8">Get notified when our site goes live</p>
              <div className="launchlist-widget" data-key-id="pBBH1O" data-height="180px"></div>
            </div>
            
            {/* Three Containers */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
              <div>
                <h2 className="font-newsreader font-semibold text-2xl md:text-3xl text-white mb-4">Readers</h2>
                <p className="text-slate-50">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui-tumsan saribh quismad tincidunt.
                </p>
              </div>
              
              <div>
                <h2 className="font-newsreader font-semibold text-2xl md:text-3xl text-white mb-4">Authors</h2>
                <p className="text-slate-50">
                  Lustcie iasem uriis eget, sec élementum libendum purus sels-cipit nul, quai, leleirer ultel sed.
                </p>
              </div>
              
              <div>
                <h2 className="font-newsreader font-semibold text-2xl md:text-3xl text-white mb-4">Publishers</h2>
                <p className="text-slate-50">
                  Eloment ausque iliquet urat, Nam pulvinar ie ilvinar sec a ultricies seneset luc tus sem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

