
import React from "react";
import CyclingTagline from "@/components/CyclingTagline";

const phrases = [
  "In Wonderland",
  "In Westeros",
  "In Pemberley",
  "In The Multiverse",
  "In Gothic Horror",
  "In The Cosmos",
  "In Mythology",
  "In Sonnets",
  "In Magical Realism",
  "In Dystopia",
  "In The Library",
  "In The Footnotes",
  "In A Whodunit",
  "In The Hero's Journey",
  "In The Classics",
  "In A Fairytale",
  "In Haikus",
  "In The Archives",
  "In A Cozy Mystery",
  "In The Unwritten Pages"
];

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background Image */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('/lovable-uploads/c1a96de9-fb8f-414e-aa41-2f602ce8e427.png')"
        }}
      ></div>

      {/* Content Container */}
      <div className="container mx-auto min-h-screen pt-16 md:pt-24 px-4 md:px-8">
        {/* Main Heading Area */}
        <div className="max-w-5xl">
          <h1 className="font-newsreader font-semibold text-5xl md:text-6xl lg:text-[100px] text-white leading-tight drop-shadow-lg">
            Get Lost
          </h1>
          
          <div className="font-newsreader text-xl md:text-2xl lg:text-[40px] text-white opacity-90 mt-2 ml-4 lg:ml-12 drop-shadow-lg">
            <CyclingTagline phrases={phrases} intervalTime={3000} />
          </div>
          
          {/* Launch List Widget */}
          <div className="mt-16 md:mt-24 max-w-md">
            <div className="launchlist-widget" data-key-id="pBBH1O" data-height="180px"></div>
          </div>
          
          {/* Three Containers */}
          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 text-left">
            <div className="bg-white/85 backdrop-blur-sm p-6 rounded-lg">
              <h2 className="font-newsreader font-semibold text-2xl md:text-3xl mb-4">Readers</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris.
              </p>
            </div>
            
            <div className="bg-white/85 backdrop-blur-sm p-6 rounded-lg">
              <h2 className="font-newsreader font-semibold text-2xl md:text-3xl mb-4">Authors</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris.
              </p>
            </div>
            
            <div className="bg-white/85 backdrop-blur-sm p-6 rounded-lg">
              <h2 className="font-newsreader font-semibold text-2xl md:text-3xl mb-4">Publishers</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
