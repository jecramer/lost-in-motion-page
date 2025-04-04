import React from "react";
import CyclingTagline from "@/components/CyclingTagline";
import Navbar from "@/components/Navbar";
const phrases = ["...in a Story", "...in a Dream", "...in a World", "...in Time", "...in Translation", "...in Fantasy", "...in a Thriller", "...in Romance", "...in Sci-Fi", "...in Historical Fiction", "...in a Mystery", "...in the Mood", "...in the Dark", "...in the Detail", "...in the Silence", "...in the Noise", "...in Thought", "...Before Page One", "...Where the Map Ends", "...Between the Lines", "...in Someone Else's Life", "...in the Ending", "...in Your Shelf", "...with Friends", "...with Strangers", "...Together", "...Then Found", "...and Discover More", "...Stay Curious.", "...and Find Your Next Favourite", "...Start Reading.", "...in What Comes Next", "...In Wonderland", "...In Westeros", "...In Pemberley", "...In The Multiverse", "...In Gothic Horror", "...In The Cosmos", "...In Mythology", "...In Sonnets", "...In Magical Realism", "...In Dystopia", "...In The Library", "...In The Footnotes", "...In A Whodunit", "...In The Hero's Journey", "...In The Classics", "...In A Fairytale", "...In Haikus", "...In The Archives", "...In A Cozy Mystery", "...In The Unwritten Pages"];
const Investors = () => {
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
            
            <div className="w-full mt-16 mb-16">
              <div className="bg-[#d5d197]/60 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                <h2 className="font-newsreader font-semibold text-3xl mb-6 text-center opacity-[0.92]">Investment Opportunity</h2>
                <p className="text-lg leading-relaxed opacity-[0.84] font-normal">Get Lost's mission is to become the de facto online community for readers, authors, and publishers. By doing so we aim to capture a significant chunk of the approx. $15bn spent on book marketing every year. 

Broken book discovery is cited by several recent studies as one of the leading reasons preventing people from building a consistent reading habit, and it's not hard to see why. In 2018, there were only 319 films produced in the UK and around 188,000 books. [1] Even the most highly motivated readers report finding it difficult to discover books relevant to their taste and mood. [2] In the face of bad experiences, people with light reading habits default back to doom scrolling social media, which is impairing cognitive abilities. [3]

We went to London Book Fair 2025 and spoke to publishers about this directly. They confirmed that their inability to target relevant audiences with effective marketing remains a major pain point and a blocker to increasing advertising spend. Because of a lack of market data, they prefer to stick to old fashioned display and print ads, PR, and Amazon Ads. They also cited the lack of real time data, often relying on historical reports by expensive market research firms. [4]

Three major challenges face the publishing industry: 

1. Readers find it hard to get accurate book recommendations

2. Publishers can’t reach target audiences with relevant books

3. Book marketers can’t increase their spend because they have no data

Get Lost's solution is elegant and efficient. We use machine learning to connect and group like-minded people through their tastes and preferences, creating meaningful communities and significantly improving book discovery. Using psychographic user profiling, we are able to connect publishers directly with the exact audiences they are currently unable to reach, massively boosting book sales.

We strongly believe that by relentlessly pursuing improvements to book discovery and community, we can capture 10% of global marketing spend on books within 5 years, equal to approximately $1.5bn revenue per year.

Our approach to building community takes its learnings from MMOs and mobile games, gamified apps like Duolingo and Strava, music tracking services like last fm, and Netflix. Over the years, our team has built and run numerous live service games, digital communities, and even TV shows that have engaged millions and millions of people. 

We are now leveraging our combined experience to build something that readers and the book publishing industry alike are crying out for: Connection. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
};
export default Investors;