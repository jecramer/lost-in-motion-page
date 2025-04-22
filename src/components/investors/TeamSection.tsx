import React from "react";
const TeamSection = () => {
  const teamMembers = [{
    name: "Martin Jurasek",
    role: "Designer",
    image: "/lovable-uploads/240f56b9-0b09-4118-a021-5bf901ff7aa3.png",
    linkedin: "https://www.linkedin.com/in/jurasekmartin/"
  }, {
    name: "James Cramer",
    role: "CEO",
    image: "/lovable-uploads/7d525897-cf5a-4d78-9f56-656db43e4c49.png",
    linkedin: "https://www.linkedin.com/in/james-cramer/"
  }, {
    name: "Steve El Sharawy",
    role: "Data and Insights",
    image: "/lovable-uploads/d65580b3-2f3e-4d3a-ae34-89def6d0b8b7.png",
    linkedin: "https://www.linkedin.com/in/steve-el-sharawy-51a56a52/"
  }, {
    name: "Andrey Morskov",
    role: "Senior Full Stack Developer",
    image: "/lovable-uploads/bcf46678-7d0d-495e-94d7-aa8333c0ce47.png",
    linkedin: "https://www.linkedin.com/in/andrey-morskov/"
  }];
  return <div style={{
    backgroundImage: `url('/bg.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  }} className="w-full py-[31px]">
      <div className="container mx-auto px-4 md:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-newsreader font-semibold text-4xl mb-10 text-center text-slate-950">The Get Lost Team</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {teamMembers.map(member => <div key={member.name} className="flex flex-col items-center space-y-3">
                <img src={member.image} alt={member.name} className="w-40 h-40 object-cover" />
                <div className="text-center">
                  <h4 className="font-semibold text-slate-950 text-xl">{member.name}</h4>
                  <p className="text-sm text-slate-50">{member.role}</p>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-1">
                    LinkedIn
                  </a>
                </div>
              </div>)}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-slate-950 mb-4">We've built communities and products people love</h3>
              <p className="mb-6 opacity-[0.84] text-slate-950 font-normal text-lg">
                Our team's roots lie in games, social platforms, and interactive tools – spaces where design meets psychology, and where community isn't just a metric but a feeling. We've shaped experiences that linger in memory, quietly guiding millions through worlds both playful and purposeful. That sensibility now finds a new home in Get Lost.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-slate-950 mb-4">We understand how communities grow and why people stay</h3>
              <p className="mb-6 opacity-[0.84] font-normal text-slate-950 text-lg">
                From the mechanics of engagement to the nuance of tone, we've studied what makes people lean in. Our backgrounds span data, strategy, design, and development – all oriented around one idea: technology should invite, not impose. We build systems that reward curiosity and invite participation, without shouting for attention.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-slate-950 mb-4">We're making space for a different kind of digital life</h3>
              <p className="mb-6 opacity-[0.84] font-normal text-slate-950 text-lg">
                In a landscape crowded with noise, Get Lost offers something quieter – but more resonant. Here, discovery is thoughtful, social is meaningful, and the line between creator and audience begins to blur. We believe in helping people get lost in things that matter. Not by accident, but by design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default TeamSection;