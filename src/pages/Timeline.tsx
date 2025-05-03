
import React from "react";
import Navbar from "@/components/Navbar";
import HorizontalTimeline from "@/components/timeline/HorizontalTimeline";

const Timeline: React.FC = () => {
  const backgroundStyle = {
    backgroundImage: `url('/bg.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  };

  return (
    <div className="min-h-screen animate-fade-in" style={backgroundStyle}>
      <Navbar />
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center mb-8">
          <h1 className="font-newsreader text-4xl md:text-5xl text-white font-semibold mb-4">
            MVP Delivery Timeline
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-newsreader">
            4 Weeks Development Roadmap
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-4 md:p-8 overflow-x-auto hide-scrollbar">
          <HorizontalTimeline />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
