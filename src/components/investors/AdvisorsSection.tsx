import React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
const AdvisorsSection = () => {
  const advisorImages = [{
    src: "/lovable-uploads/025c9b48-5629-41e7-abf7-1d9f9e92349a.png",
    alt: "Advisor 1"
  }, {
    src: "/lovable-uploads/a70e6269-a230-4c39-b8ba-938e33a440a2.png",
    alt: "Advisor 2"
  }, {
    src: "/lovable-uploads/32e4b91e-0720-4173-8926-a8035286fccf.png",
    alt: "Advisor 3"
  }];
  return <div className="w-full py-20" style={{
    backgroundImage: `url('/bg.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-newsreader font-semibold text-4xl mb-10 text-white">Our Advisors</h2>
          
          <div className="flex flex-col items-center md:flex-row md:items-start gap-8 mb-12">
            <Card className="bg-transparent border-0 shadow-none w-full">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                {advisorImages.map((image, index) => <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                    <img src={image.src} alt={image.alt} className="w-auto h-auto drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)]" />
                  </div>)}
              </div>
            </Card>
            
            <div className="md:w-full mt-8 md:mt-0">
              <div className="text-white">
                <p className="text-base mb-6 opacity-[0.84] font-normal">From the outset, we’ve been intentional about building a company with depth; not just in product, but in structure. Our advisory team reflects that. Eero Jyske brings nearly three decades of experience in technology leadership, offering rare clarity on how to scale and sustain digital platforms. Sander Knol, a publisher turned founder, lends hard-won wisdom from the world of book, with a network and instinct for what resonates with readers. And Olli Nuutinen, a trusted collaborator since the days of our first startup, grounds us with operational and financial discipline forged across multiple ventures. Together, they help us build not just something new, but something that lasts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default AdvisorsSection;