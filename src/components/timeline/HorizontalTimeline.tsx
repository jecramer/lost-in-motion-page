
import React from "react";
import { useTimelineData } from "@/hooks/useTimelineData";
import "./timeline.css";
import { Circle } from "lucide-react";

const HorizontalTimeline: React.FC = () => {
  const { weeks, milestones } = useTimelineData();

  return (
    <div className="mt-12 relative">
      {/* Main timeline line */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-white/30 transform -translate-y-1/2"></div>
      
      {/* Timeline content */}
      <div className="relative">
        {weeks.map((week, index) => (
          <div key={week.number} className={`mb-24 flex items-center ${index % 2 === 0 ? 'flex-col' : 'flex-col-reverse'}`}>
            {/* Timeline node */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="rounded-full bg-white w-10 h-10 flex items-center justify-center border-4 border-black/50">
                <span className="font-bold text-black">{week.number}</span>
              </div>
              
              {/* Week label */}
              <div className={`absolute ${index % 2 === 0 ? 'top-full mt-2' : 'bottom-full mb-2'}`}>
                <span className="text-white">Week {week.number}</span>
              </div>
            </div>
            
            {/* Content card */}
            <div className={`w-full max-w-md p-5 rounded-lg ${index % 2 === 0 ? 'mb-8' : 'mt-8'}`}>
              <div 
                className={`bg-opacity-90 rounded-lg p-5 shadow-lg backdrop-blur-sm border border-white/20
                  ${getBackgroundColorClass(index)}
                `}
              >
                <h3 className="font-newsreader text-2xl font-bold mb-2 text-black">
                  Week {week.number}: {week.title}
                </h3>
                <p className="text-black/80 font-medium mb-3">{week.hours}h total</p>
                
                <div className="space-y-3">
                  {week.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="border-t border-black/10 pt-2 mt-2 first:border-0 first:mt-0 first:pt-0">
                      <h4 className="font-semibold text-black">{task.title}</h4>
                      {task.details.length > 0 && (
                        <ul className="mt-1 list-disc pl-5">
                          {task.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="text-sm text-black/80">
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Milestone section at the bottom */}
      <div className="mt-12 bg-black/50 border border-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
        <h2 className="font-newsreader text-2xl font-bold mb-4 pb-2 border-b border-white/10 flex items-center">
          <Circle className="mr-2 text-green-400 fill-green-400" size={20} /> 
          Key Milestones by End of Month
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start">
              <Circle className="min-w-5 h-5 text-green-400 fill-green-400 mt-1 mr-2" size={16} />
              <span className="text-white/90">{milestone}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper function to get different background colors for each week
function getBackgroundColorClass(index: number): string {
  const colors = [
    'bg-cyan-200', // Light blue for Week 1
    'bg-purple-200', // Light purple for Week 2
    'bg-green-200', // Light green for Week 3
    'bg-rose-200', // Light pink for Week 4
  ];
  
  return colors[index % colors.length];
}

export default HorizontalTimeline;
