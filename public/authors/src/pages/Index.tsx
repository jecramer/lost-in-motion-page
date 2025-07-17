
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import FreeSample from "@/components/FreeSample";
import HowItWorks from "@/components/HowItWorks";
import WhatYouGet from "@/components/WhatYouGet";
import WhoItsFor from "@/components/WhoItsFor";
import Pricing from "@/components/Pricing";
import FinalNudge from "@/components/FinalNudge";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PainPoints />
      <FreeSample />
      <HowItWorks />
      <WhatYouGet />
      <WhoItsFor />
      <Pricing />
      <FinalNudge />
    </div>
  );
};

export default Index;
