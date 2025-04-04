
import React from "react";
import CyclingTagline from "@/components/CyclingTagline";
import Navbar from "@/components/Navbar";

const phrases = ["...in a Story", "...in a Dream", "...in a World", "...in Time", "...in Translation", "...in Fantasy", "...in a Thriller", "...in Romance", "...in Sci-Fi", "...in Historical Fiction", "...in a Mystery", "...in the Mood", "...in the Dark", "...in the Detail", "...in the Silence", "...in the Noise", "...in Thought", "...Before Page One", "...Where the Map Ends", "...Between the Lines", "...in Someone Else's Life", "...in the Ending", "...in Your Shelf", "...with Friends", "...with Strangers", "...Together", "...Then Found", "...and Discover More", "...Stay Curious.", "...and Find Your Next Favourite", "...Start Reading.", "...in What Comes Next", "...In Wonderland", "...In Westeros", "...In Pemberley", "...In The Multiverse", "...In Gothic Horror", "...In The Cosmos", "...In Mythology", "...In Sonnets", "...In Magical Realism", "...In Dystopia", "...In The Library", "...In The Footnotes", "...In A Whodunit", "...In The Hero's Journey", "...In The Classics", "...In A Fairytale", "...In Haikus", "...In The Archives", "...In A Cozy Mystery", "...In The Unwritten Pages"];

const Investors = () => {
  return (
    <>
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
            
            <div className="w-full mt-16 mb-16">
              <div className="bg-[#d5d197]/60 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                <h2 className="font-newsreader font-semibold text-3xl mb-6 text-center opacity-[0.92]">Investment Opportunity</h2>
                <p className="text-lg leading-relaxed opacity-[0.84]">
                  Get Lost is building the future of reading and book discovery. Our platform connects readers, authors, creators, and publishers in one vibrant, evolving literary ecosystem. We're seeking investment partners who share our vision for transforming how stories are discovered, shared, and experienced in the digital age.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Investors;
