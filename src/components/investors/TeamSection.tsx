
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

  return (
    <div className="w-full py-20" style={{
      background: "linear-gradient(135deg, rgba(229, 222, 255, 0.3) 0%, rgba(253, 225, 211, 0.3) 50%, rgba(242, 252, 226, 0.3) 100%)",
      backdropFilter: 'blur(10px)'
    }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-newsreader font-semibold text-5xl mb-10 text-center text-slate-950 hover:opacity-90 transition-opacity">The Get Lost Team</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {teamMembers.map(member => (
              <div key={member.name} className="flex flex-col items-center space-y-3 transform transition-all duration-300 hover:translate-y-[-8px]">
                <img src={member.image} alt={member.name} className="w-40 h-40 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow" />
                <div className="text-center">
                  <h4 className="font-semibold text-slate-950 text-2xl">{member.name}</h4>
                  <p className="text-slate-950 text-lg">{member.role}</p>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mt-1">
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            {["We've built communities and products people love", 
              "We understand how communities grow and why people stay",
              "We're making space for a different kind of digital life"].map((title, index) => (
              <div key={index} className="space-y-2 transform transition-all duration-300 hover:translate-y-[-8px]">
                <h3 className="text-2xl font-semibold text-slate-950 mb-4">{title}</h3>
                <p className="mb-6 opacity-[0.84] text-slate-950 font-normal text-xl hover:opacity-100 transition-opacity">
                  Our team's roots lie in games, social platforms, and interactive tools – spaces where design meets psychology, and where community isn't just a metric but a feeling. We've shaped experiences that linger in memory, quietly guiding millions through worlds both playful and purposeful. That sensibility now finds a new home in Get Lost.
                </p>
              </div>
            ))}
          </div>

          {/* New image section */}
          <div className="mt-16 flex justify-center">
            <img 
              src="/lovable-uploads/aaa490f1-d333-4b5c-8586-e26daf348251.png" 
              alt="Team in Library" 
              className="w-full max-w-4xl rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
