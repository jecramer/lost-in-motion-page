
import React from "react";
const TeamSection = () => {
  return <div className="w-full py-20" style={{
    backgroundImage: `url('/bg.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-newsreader font-semibold text-4xl mb-10 text-center text-slate-950">The Get Lost Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="space-y-2">
              <p className="mb-6 opacity-[0.84] text-slate-950 text-base font-normal">
                We've built communities and products people love
                Our team's roots lie in games, social platforms, and interactive tools – spaces where design meets psychology, and where community isn't just a metric but a feeling. We've shaped experiences that linger in memory, quietly guiding millions through worlds both playful and purposeful. That sensibility now finds a new home in Get Lost.
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-base mb-6 opacity-[0.84] font-normal text-slate-950">
                We understand how communities grow and why they stay
                From the mechanics of engagement to the nuance of tone, we've studied what makes people lean in. Our backgrounds span data, strategy, design, and development – all oriented around one idea: technology should invite, not impose. We build systems that reward curiosity and invite participation, without shouting for attention.
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-base mb-6 opacity-[0.84] font-normal text-slate-950">
                We're making space for a different kind of digital life
                In a landscape crowded with noise, Get Lost offers something quieter – but more resonant. Here, discovery is thoughtful, social is meaningful, and the line between creator and audience begins to blur. We believe in helping people get lost in things that matter. Not by accident, but by design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default TeamSection;
