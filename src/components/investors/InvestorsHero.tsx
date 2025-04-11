
import React from "react";
import CyclingTagline from "@/components/CyclingTagline";

const phrases = [
  "...in a Story", "...in a Dream", "...in a World", "...in Time", "...in Translation", "...in Fantasy", "...in a Thriller", "...in Romance", "...in Sci-Fi", "...in Historical Fiction", "...in a Mystery", "...in the Mood", "...in the Dark", "...in the Detail", "...in the Silence", "...in the Noise", "...in Thought", "...Before Page One", "...Where the Map Ends", "...Between the Lines", "...in Someone Else's Life", "...in the Ending", "...in Your Shelf", "...with Friends", "...with Strangers", "...Together", "...Then Found", "...and Discover More", "...Stay Curious.", "...and Find Your Next Favourite", "...Start Reading.", "...in What Comes Next", "...In Wonderland", "...In Westeros", "...In Pemberley", "...In The Multiverse", "...In Gothic Horror", "...In The Cosmos", "...In Mythology", "...In Sonnets", "...In Magical Realism", "...In Dystopia", "...In The Library", "...In The Footnotes", "...In A Whodunit", "...In The Hero's Journey", "...In The Classics", "...In A Fairytale", "...In Haikus", "...In The Archives", "...In A Cozy Mystery", "...In The Unwritten Pages"
];

const InvestorsHero = () => {
  return (
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
      </div>
    </div>
  );
};

export default InvestorsHero;
