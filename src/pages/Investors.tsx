
import React, { useEffect, useRef } from "react";
import CyclingTagline from "@/components/CyclingTagline";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Roadmap from "@/components/roadmap/Roadmap";

const phrases = [
  "...in a Story", "...in a Dream", "...in a World", "...in Time", "...in Translation", "...in Fantasy", "...in a Thriller", "...in Romance", "...in Sci-Fi", "...in Historical Fiction", "...in a Mystery", "...in the Mood", "...in the Dark", "...in the Detail", "...in the Silence", "...in the Noise", "...in Thought", "...Before Page One", "...Where the Map Ends", "...Between the Lines", "...in Someone Else's Life", "...in the Ending", "...in Your Shelf", "...with Friends", "...with Strangers", "...Together", "...Then Found", "...and Discover More", "...Stay Curious.", "...and Find Your Next Favourite", "...Start Reading.", "...in What Comes Next", "...In Wonderland", "...In Westeros", "...In Pemberley", "...In The Multiverse", "...In Gothic Horror", "...In The Cosmos", "...In Mythology", "...In Sonnets", "...In Magical Realism", "...In Dystopia", "...In The Library", "...In The Footnotes", "...In A Whodunit", "...In The Hero's Journey", "...In The Classics", "...In A Fairytale", "...In Haikus", "...In The Archives", "...In A Cozy Mystery", "...In The Unwritten Pages"
];

const Investors = () => {
  const carouselRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current && carouselRef.current.api) {
        carouselRef.current.api.scrollNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return <>
    <Navbar />
    <div className="min-h-screen w-full flex flex-col relative" style={{
      backgroundImage: `url('/bg.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
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
              <h2 className="font-newsreader font-semibold text-3xl mb-6 text-center opacity-[0.92]">Building The World's Biggest Book Club</h2>
              <p className="text-lg leading-relaxed opacity-[0.84] font-normal">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat</p>
            </div>
          </div>
          
          <div className="w-full mb-16">
            <div>
              <h2 className="font-newsreader font-semibold text-3xl mb-8 opacity-[0.92]">Guiding Pillars</h2>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 grid grid-cols-2 gap-4">
                  <Card className="aspect-square bg-white/30 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  </Card>
                  <Card className="aspect-square bg-white/30 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  </Card>
                  <Card className="aspect-square bg-white/30 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  </Card>
                  <Card className="aspect-square bg-white/30 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  </Card>
                </div>
                
                <div className="md:w-1/2">
                  <div className="space-y-4">
                    <p className="text-lg leading-relaxed opacity-[0.84] font-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    
                    <p className="text-lg leading-relaxed opacity-[0.84] font-normal">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    
                    <p className="text-lg leading-relaxed opacity-[0.84] font-normal">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
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
                      <div className="aspect-[3/2] w-full" />
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
      
      <div className="w-full py-20" style={{
        backgroundImage: `url('/bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <p className="font-newsreader text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight text-white">
              <span className="font-bold">Wattpad</span> and <span className="font-bold">Inkitt</span> have saturated the Romantasy genre
              and their user growth in Western markets is in decline.
            </p>
            <p className="font-newsreader text-3xl md:text-4xl lg:text-5xl mb-12 leading-tight text-white">
              <span className="font-bold">Get Lost</span> will capture the 1.7bn readers they 
              have left behind.
            </p>
            
            <div className="bg-white/30 backdrop-blur-sm rounded-lg overflow-hidden mx-auto" style={{ maxWidth: "600px", height: "280px" }}>
              {/* Placeholder for chart or image */}
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full py-20" style={{
        backgroundImage: `url('/bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-newsreader font-semibold text-4xl mb-10 text-center text-white">Revenue Potential - 5 Year Horizon</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-white">
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
            
            <div className="bg-white/30 backdrop-blur-sm rounded-lg overflow-hidden mx-auto" style={{ maxWidth: "700px", height: "350px" }}>
              {/* Placeholder for revenue chart */}
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full py-20" style={{
        backgroundImage: `url('/bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-newsreader font-semibold text-4xl mb-10 text-center text-white">The Get Lost Team</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="bg-white/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm">
                  <div className="aspect-[3/4] w-full"></div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
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
      </div>
      
      <div className="w-full py-20" style={{
        backgroundImage: `url('/bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-newsreader font-semibold text-4xl mb-10 text-white">Our Advisors</h2>
            
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm">
                  <div className="aspect-[3/4] w-full"></div>
                </div>
                <div className="bg-white/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm">
                  <div className="aspect-[3/4] w-full"></div>
                </div>
                <div className="bg-white/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm">
                  <div className="aspect-[3/4] w-full"></div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="text-white">
                  <p className="text-base leading-relaxed opacity-[0.84] font-normal">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full py-20" style={{
        backgroundImage: `url('/bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-newsreader font-semibold text-4xl mb-10 text-white">Product & Company Roadmap</h2>
            <p className="text-white text-lg mb-8 opacity-[0.84]">
              Our roadmap outlines key milestones across three funding stages. Each milestone represents strategic objectives we'll achieve with the capital raised. You can edit and add milestones to tailor this presentation to your investor pitch.
            </p>
            
            <Roadmap />
          </div>
        </div>
      </div>
      
      {/* New Deal Section */}
      <div className="w-full py-20" style={{
        backgroundImage: `url('/bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-newsreader font-bold text-5xl mb-12 text-center text-white">Join the Deal On...</h2>
            
            <div className="flex justify-center mb-12">
              <img 
                src="/lovable-uploads/1ac88cfe-a76b-479a-aef6-365d12e4bf33.png" 
                alt="ODIN" 
                className="h-12 md:h-16"
              />
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/3">
                <div className="bg-gray-300 rounded-lg aspect-[4/5] w-full"></div>
              </div>
              
              <div className="w-full md:w-2/3">
                <p className="text-white text-base md:text-lg leading-relaxed opacity-[0.84]">
                  ed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                  ab illo inventore veritatis et quasi ed ut perspiciatis unde omnis iste natus
                  error sit voluptatem accusantium doloremque laudantium, totam rem
                  aperiam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default Investors;
