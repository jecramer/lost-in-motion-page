
import React from "react";
import CyclingTagline from "@/components/CyclingTagline";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const phrases = ["...in a Story", "...in a Dream", "...in a World", "...in Time", "...in Translation", "...in Fantasy", "...in a Thriller", "...in Romance", "...in Sci-Fi", "...in Historical Fiction", "...in a Mystery", "...in the Mood", "...in the Dark", "...in the Detail", "...in the Silence", "...in the Noise", "...in Thought", "...Before Page One", "...Where the Map Ends", "...Between the Lines", "...in Someone Else's Life", "...in the Ending", "...in Your Shelf", "...with Friends", "...with Strangers", "...Together", "...Then Found", "...and Discover More", "...Stay Curious.", "...and Find Your Next Favourite", "...Start Reading.", "...in What Comes Next", "...In Wonderland", "...In Westeros", "...In Pemberley", "...In The Multiverse", "...In Gothic Horror", "...In The Cosmos", "...In Mythology", "...In Sonnets", "...In Magical Realism", "...In Dystopia", "...In The Library", "...In The Footnotes", "...In A Whodunit", "...In The Hero's Journey", "...In The Classics", "...In A Fairytale", "...In Haikus", "...In The Archives", "...In A Cozy Mystery", "...In The Unwritten Pages"];

const Investors = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full flex flex-col relative">
        <div 
          className="fixed inset-0 z-[-1]" 
          style={{
            backgroundImage: `url('/bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        />
        
        <div className="container mx-auto flex-1 pt-16 md:pt-24 px-4 md:px-8 flex flex-col items-center">
          <div className="max-w-6xl w-full">
            {/* Hero Section with Get Lost title */}
            <h1 className="font-newsreader font-semibold text-[5rem] md:text-[7rem] lg:text-[12rem] text-white leading-tight drop-shadow-lg text-left opacity-[0.92]">
              Get Lost
            </h1>
            
            <div className="flex justify-end w-full">
              <p className="font-newsreader text-xl text-white opacity-[0.72] -mt-4 md:text-5xl">
                <CyclingTagline phrases={phrases} intervalTime={3000} />
              </p>
            </div>
            
            {/* Main content area */}
            <div className="w-full mt-16 mb-12">
              <Card className="bg-[#d5d197]/60 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                <CardContent className="p-0">
                  <h2 className="font-newsreader font-semibold text-3xl mb-6 text-center opacity-[0.92]">Investment Opportunity</h2>
                  <p className="text-lg leading-relaxed opacity-[0.84] font-normal">
                    Get Lost's mission is to become the de facto online community for readers, authors, and publishers. By doing so we aim to capture a significant chunk of the approx. $15bn spent on book marketing every year.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Grid of 4 boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-[#d5d197]/60 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <CardContent className="p-0">
                  <h3 className="font-newsreader font-semibold text-xl mb-3">The Problem</h3>
                  <p className="opacity-[0.84]">
                    Even the most highly motivated readers report finding it difficult to discover books relevant to their taste and mood. In the face of bad experiences, people with light reading habits default back to doom scrolling social media.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-[#d5d197]/60 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <CardContent className="p-0">
                  <h3 className="font-newsreader font-semibold text-xl mb-3">Market Validation</h3>
                  <p className="opacity-[0.84]">
                    We went to London Book Fair 2025 and spoke to publishers directly. They confirmed that their inability to target relevant audiences with effective marketing remains a major pain point and a blocker to increasing advertising spend.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-[#d5d197]/60 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <CardContent className="p-0">
                  <h3 className="font-newsreader font-semibold text-xl mb-3">Our Solution</h3>
                  <p className="opacity-[0.84]">
                    Get Lost uses machine learning to connect and group like-minded people through their tastes and preferences, creating meaningful communities and significantly improving book discovery.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-[#d5d197]/60 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <CardContent className="p-0">
                  <h3 className="font-newsreader font-semibold text-xl mb-3">Our Advantage</h3>
                  <p className="opacity-[0.84]">
                    Our approach to building community takes its learnings from MMOs and mobile games, gamified apps like Duolingo and Strava, music tracking services, and Netflix.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* 2 wider boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-[#d5d197]/60 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <CardContent className="p-0">
                  <h3 className="font-newsreader font-semibold text-xl mb-3">Industry Challenge</h3>
                  <p className="opacity-[0.84]">
                    Three major challenges face the publishing industry: 
                    1. Readers find it hard to get accurate book recommendations
                    2. Publishers can't reach target audiences with relevant books
                    3. Book marketers can't increase their spend because they have no data
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-[#d5d197]/60 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <CardContent className="p-0">
                  <h3 className="font-newsreader font-semibold text-xl mb-3">Market Opportunity</h3>
                  <p className="opacity-[0.84]">
                    We strongly believe that by relentlessly pursuing improvements to book discovery and community, we can capture 10% of global marketing spend on books within 5 years, equal to approximately $1.5bn revenue per year.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Market Statement */}
            <div className="w-full mb-12">
              <div className="text-center mb-6">
                <p className="text-xl font-newsreader font-semibold text-white">
                  <span className="opacity-90">Wattpad and Inkitt have saturated the Romanacy genre<br/>and their user growth in Western markets is in decline.</span><br/>
                  <span className="text-2xl font-bold opacity-100">Get Lost will capture the 1.7bn readers they<br/>have left behind.</span>
                </p>
              </div>
              
              {/* Pie Chart Section */}
              <div className="mb-12 text-center">
                <img src="/lovable-uploads/a6f2ee3b-2204-4714-85a9-9000314aa5bf.png" alt="Market Chart" className="mx-auto w-3/4 md:w-1/2 mb-8" />
              </div>
              
              {/* Growth Graph */}
              <div className="bg-[#d5d197]/60 backdrop-blur-sm rounded-lg p-6 shadow-lg mb-12">
                <h3 className="font-newsreader font-semibold text-xl mb-3 text-center">Projected Growth</h3>
                <div className="h-60 w-full flex items-center justify-center">
                  <div className="w-full h-full bg-white/30 rounded-lg flex items-center justify-center">
                    <p className="text-lg font-semibold">Growth Projection Chart</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 5 Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
              {[1, 2, 3, 4, 5].map((item) => (
                <Card key={item} className="bg-[#d5d197]/60 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <CardContent className="p-0">
                    <h4 className="font-newsreader font-semibold text-lg mb-2">Feature {item}</h4>
                    <p className="text-sm opacity-[0.84]">
                      Key platform feature that drives user engagement and retention.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* 3 Testimonial Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="bg-[#d5d197]/60 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                  <CardContent className="p-0">
                    <h4 className="font-newsreader font-semibold text-lg mb-2">Testimonial {item}</h4>
                    <p className="text-sm opacity-[0.84]">
                      "Get Lost has transformed how I discover new books and connect with authors. The platform feels like it was designed specifically for me."
                    </p>
                    <p className="text-sm font-semibold mt-2">— Reader Name, Location</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Final Sections */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-newsreader font-semibold text-white opacity-90">Join the Deal On...</h3>
              </div>
              
              <div className="flex justify-center mb-12">
                <div className="bg-[#d5d197]/60 backdrop-blur-sm rounded-lg p-6 shadow-lg w-full max-w-md">
                  <h4 className="font-newsreader font-semibold text-xl mb-3 text-center">Contact Us</h4>
                  <p className="opacity-[0.84] text-center">
                    For more information about investing in Get Lost, please contact our team at:<br/>
                    <a href="mailto:invest@getlost.ink" className="font-semibold underline">invest@getlost.ink</a>
                  </p>
                </div>
              </div>
            </div>
            
            <footer className="text-center text-white opacity-70 text-sm mb-8">
              <p>© 2025 Get Lost. All rights reserved.</p>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Investors;
