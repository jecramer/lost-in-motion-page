
import React, { useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const ArchetypesCarousel = () => {
  const carouselRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current && carouselRef.current.api) {
        carouselRef.current.api.scrollNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-16" style={{
      backgroundImage: `url('/bg.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-newsreader font-semibold text-4xl mb-8 opacity-[0.92] text-white">Archetypes</h2>
        
        <Carousel
          ref={carouselRef}
          opts={{
            align: "start",
            loop: true,
            containScroll: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4">
                <Card className="bg-white/90 rounded-lg overflow-hidden shadow-sm">
                  <CardContent className="p-0">
                    <div className="aspect-[3/2] w-full">
                      <img 
                        src="/lovable-uploads/dd37e1a9-e973-44cb-ad31-25894f1bd9f8.png" 
                        alt="Erica Terranova, Head of Growth @ Moomin Characters" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 z-10 flex items-center justify-center">
            <ArrowBigLeft className="h-6 w-6 text-white" />
          </CarouselPrevious>
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 z-10 flex items-center justify-center">
            <ArrowBigRight className="h-6 w-6 text-white" />
          </CarouselNext>
        </Carousel>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-white">
          <div className="space-y-2">
            <p className="text-base leading-relaxed opacity-[0.84] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          
          <div className="space-y-2">
            <p className="text-base leading-relaxed opacity-[0.84] font-normal">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          
          <div className="space-y-2">
            <p className="text-base leading-relaxed opacity-[0.84] font-normal">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchetypesCarousel;
