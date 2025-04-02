
import React from "react";
import CyclingTagline from "@/components/CyclingTagline";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
  console.log("Background image path:", "/lovable-uploads/9027a18c-5528-40cc-a876-7ce84f00e180.png");
  
  return (
    <>
      {/* Background and overlay as direct children of the body */}
      <div 
        className="fixed inset-0 z-[-2]" 
        style={{
          backgroundImage: "url('/lovable-uploads/9027a18c-5528-40cc-a876-7ce84f00e180.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="fixed inset-0 bg-black/30 z-[-1]" />

      {/* Main content */}
      <div className="min-h-screen flex flex-col">
        <div className="container mx-auto min-h-screen pt-16 md:pt-24 px-4 md:px-8 z-10">
          {/* Main Heading Area */}
          <div className="max-w-5xl">
            <h1 className="font-newsreader font-semibold text-5xl md:text-6xl lg:text-[100px] text-white leading-tight drop-shadow-lg">
              Get Lost
            </h1>
            
            <p className="text-white text-xl md:text-2xl mt-2 mb-8">
              Be notified when our site goes live
            </p>
            
            {/* Email Signup Form */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mb-16">
              <Input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/90 text-gray-800 border-none"
              />
              <Button className="bg-[#f2f2dd]/90 text-gray-800 hover:bg-[#f2f2dd]">
                Notify me
              </Button>
            </div>
            
            {/* Three Containers */}
            <div className="mt-64 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
              <div>
                <h2 className="font-newsreader font-semibold text-2xl md:text-3xl text-blue-900 mb-4">Readers</h2>
                <p className="text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui-tumsan saribh quismad tincidunt.
                </p>
              </div>
              
              <div>
                <h2 className="font-newsreader font-semibold text-2xl md:text-3xl text-blue-900 mb-4">Authors</h2>
                <p className="text-gray-800">
                  Lustcie iasem uriis eget, sec élementum libendum purus sels-cipit nul, quai, leleirer ultel sed.
                </p>
              </div>
              
              <div>
                <h2 className="font-newsreader font-semibold text-2xl md:text-3xl text-blue-900 mb-4">Publishers</h2>
                <p className="text-gray-800">
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
