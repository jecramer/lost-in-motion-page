
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import TimelineWeek from "./TimelineWeek";
import TimelineMilestones from "./TimelineMilestones";
import { useTimelineData } from "@/hooks/useTimelineData";

const HorizontalTimeline: React.FC = () => {
  const { weeks, milestones } = useTimelineData();
  const [activeWeek, setActiveWeek] = useState<number>(1);

  return (
    <div className="w-full mt-8">
      {/* Week selector tabs */}
      <div className="flex justify-center mb-8 overflow-x-auto pb-4 hide-scrollbar">
        {weeks.map(week => (
          <Button
            key={week.number}
            onClick={() => setActiveWeek(week.number)}
            variant={activeWeek === week.number ? "default" : "outline"}
            className={`mx-2 transition-all font-newsreader ${
              activeWeek === week.number 
                ? "bg-white text-black hover:bg-white/90" 
                : "bg-black/30 text-white hover:bg-black/50 border-white/30"
            }`}
          >
            Week {week.number}
          </Button>
        ))}
      </div>

      {/* Horizontal timeline */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-white/30 rounded-full mt-10"></div>
        
        <Carousel className="w-full my-8">
          <CarouselContent>
            {weeks.map((week) => (
              <CarouselItem key={week.number} className="basis-full lg:basis-1/2">
                <TimelineWeek week={week} isActive={week.number === activeWeek} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-4">
            <CarouselPrevious className="relative static transform-none bg-black/30 border-white/30 hover:bg-black/50 text-white" />
            <CarouselNext className="relative static transform-none bg-black/30 border-white/30 hover:bg-black/50 text-white" />
          </div>
        </Carousel>
        
        {/* Detailed view of active week */}
        <div className="animate-fade-in">
          {weeks.map((week) => (
            week.number === activeWeek && (
              <Card key={week.number} className="bg-black/50 border-white/10 backdrop-blur-sm text-white">
                <CardContent className="p-6 md:p-8">
                  <h2 className="font-newsreader text-2xl md:text-3xl mb-4 pb-2 border-b border-white/10">
                    Week {week.number}: {week.title} ({week.hours}h)
                  </h2>
                  
                  <div className="space-y-6">
                    {week.tasks.map((task, index) => (
                      <div key={index} className="hover:bg-white/5 p-4 rounded-lg transition-all">
                        <h3 className="text-xl md:text-2xl font-newsreader mb-2 text-white">
                          {task.title}
                        </h3>
                        {task.details.length > 0 && (
                          <ul className="pl-5 text-white/80 space-y-1">
                            {task.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="list-disc text-sm md:text-base">
                                {detail}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          ))}
        </div>
      </div>

      {/* Milestones section */}
      <TimelineMilestones milestones={milestones} />
    </div>
  );
};

export default HorizontalTimeline;
