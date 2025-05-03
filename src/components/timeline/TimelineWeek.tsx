
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { WeekType } from "@/types/timeline";

interface TimelineWeekProps {
  week: WeekType;
  isActive: boolean;
}

const TimelineWeek: React.FC<TimelineWeekProps> = ({ week, isActive }) => {
  return (
    <div 
      className={`relative px-4 pt-10 ${isActive ? 'scale-105' : 'opacity-70'} transition-all duration-300`}
    >
      <div 
        className={`
          w-6 h-6 rounded-full absolute top-0 left-1/2 -translate-x-1/2 -mt-3 z-10
          ${isActive ? 'bg-white scale-125' : 'bg-white/50'}
          transition-all duration-300
        `}
      />
      
      <Card 
        className={`
          bg-black/30 backdrop-blur-sm border-white/10 text-white 
          hover:bg-black/40 transition-colors
          ${isActive ? 'ring-2 ring-white/30' : ''}
        `}
      >
        <CardContent className="p-4">
          <h3 className="font-newsreader text-xl text-center mb-2">Week {week.number}</h3>
          <h4 className="font-newsreader text-base text-center text-white/80 mb-3">{week.title}</h4>
          
          <div className="text-sm mt-2">
            <ul className="list-none space-y-1">
              {week.tasks.map((task, index) => (
                <li key={index} className="text-white/90 truncate">
                  • {task.title}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimelineWeek;
