
import React from "react";
import CyclingTagline from "@/components/CyclingTagline";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const phrases = ["In Wonderland", "In Westeros", "In Pemberley", "In The Multiverse", "In Gothic Horror", "In The Cosmos", "In Mythology", "In Sonnets", "In Magical Realism", "In Dystopia", "In The Library", "In The Footnotes", "In A Whodunit", "In The Hero's Journey", "In The Classics", "In A Fairytale", "In Haikus", "In The Archives", "In A Cozy Mystery", "In The Unwritten Pages"];

const Index = () => {
  return <div className="min-h-screen w-full flex flex-col justify-center items-center relative" style={{
    backgroundImage: `url('/20250402_0948_Tranquil Garden Escape_remix_01jqtm426ses4b6n0vjbc17e6g.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      {/* Content */}
      <div className="container mx-auto flex-1 flex flex-col justify-center items-center px-4 md:px-8">
        {/* Main Heading Area */}
        <div className="max-w-5xl flex flex-col items-center">
          <h1 className="font-newsreader font-semibold text-[5rem] md:text-[7rem] lg:text-[12rem] text-white leading-tight drop-shadow-lg">
            Get Lost
          </h1>
          
          {/* Email Signup Form - Moved back above the three containers */}
          <div className="mt-8 mb-16 text-center">
            <p className="text-white text-xl md:text-2xl mt-2 mb-8">Get notified when our site goes live</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Email address" className="bg-white/90 text-gray-800 border-none" />
              <Button className="bg-[#f2f2dd]/90 text-gray-800 hover:bg-[#f2f2dd]">
                Notify me
              </Button>
            </div>
          </div>
          
          {/* Three Containers */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
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
    </div>;
};

export default Index;
