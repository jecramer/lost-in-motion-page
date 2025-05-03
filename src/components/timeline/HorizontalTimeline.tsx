
import React, { useState, useEffect } from "react";
import { useTimelineData } from "@/hooks/useTimelineData";
import "./timeline.css";

const HorizontalTimeline: React.FC = () => {
  const { weeks } = useTimelineData();
  const [lineGrowth, setLineGrowth] = useState(false);

  useEffect(() => {
    // Animate line after component mounts
    const timer = setTimeout(() => {
      setLineGrowth(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-16 relative px-4">
      {/* Main horizontal timeline line */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 transform -translate-y-1/2 z-10"></div>
        <div className={`absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform -translate-y-1/2 z-20 timeline-line-grow ${lineGrowth ? 'timeline-line-complete' : ''}`}></div>

        {/* Timeline content */}
        <div className="flex justify-between items-center relative">
          {weeks.map((week, index) => (
            <div key={week.number} className="relative">
              {/* Timeline node */}
              <div className="flex justify-center">
                <div className={`timeline-dot w-12 h-12 rounded-full z-30 flex items-center justify-center border-2 ${getNodeColor(index)}`}>
                  <span className={`font-bold ${getTextColor(index)}`}>{week.number.toString().padStart(2, '0')}</span>
                </div>
              </div>
              
              {/* Timeline content - alternating position */}
              <div className={`absolute ${index % 2 === 0 ? '-top-64' : 'top-16'} left-1/2 transform -translate-x-1/2 w-64`}>
                <div 
                  className={`timeline-item rounded-lg shadow-lg p-4 border ${getCardBgColor(index)} max-w-sm mx-auto`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Year/title pill at top */}
                  <div className={`absolute ${index % 2 === 0 ? '-bottom-3' : '-top-3'} left-1/2 transform -translate-x-1/2 rounded-full px-4 py-1 text-white text-sm font-semibold whitespace-nowrap ${getCardHeaderColor(index)}`}>
                    Week {week.number}: {week.hours}h
                  </div>
                  
                  <div className={`pt-4 ${index % 2 === 0 ? 'pb-6' : 'pt-6 pb-2'}`}>
                    <h3 className="font-bold text-gray-800 mb-2">{week.title}</h3>
                    <div className="space-y-2">
                      {week.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="text-sm text-gray-600">
                          • {task.title}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Final timeline icon */}
          <div className="relative">
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-300 z-30 flex items-center justify-center timeline-dot">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline legend */}
      <div className="mt-64 text-center pt-8 border-t border-gray-200">
        <h3 className="text-2xl font-semibold">Key Milestones by Month End</h3>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {getMilestoneItems().map((milestone, index) => (
            <div key={index} className={`px-4 py-2 rounded-full text-white ${getMilestoneColor(index)}`}>
              {milestone}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper functions for dynamic styling
function getNodeColor(index: number): string {
  const colors = [
    'bg-cyan-100 border-cyan-500', 
    'bg-indigo-100 border-indigo-500',
    'bg-green-100 border-green-500', 
    'bg-blue-100 border-blue-500',
    'bg-amber-100 border-amber-500',
    'bg-rose-100 border-rose-500'
  ];
  return colors[index % colors.length];
}

function getTextColor(index: number): string {
  const colors = [
    'text-cyan-800', 
    'text-indigo-800',
    'text-green-800', 
    'text-blue-800',
    'text-amber-800',
    'text-rose-800'
  ];
  return colors[index % colors.length];
}

function getCardBgColor(index: number): string {
  const colors = [
    'bg-white border-cyan-200', 
    'bg-white border-indigo-200',
    'bg-white border-green-200', 
    'bg-white border-blue-200',
    'bg-white border-amber-200',
    'bg-white border-rose-200'
  ];
  return colors[index % colors.length];
}

function getCardHeaderColor(index: number): string {
  const colors = [
    'bg-cyan-400', 
    'bg-indigo-400',
    'bg-green-400', 
    'bg-blue-400',
    'bg-amber-400',
    'bg-rose-400'
  ];
  return colors[index % colors.length];
}

function getMilestoneItems(): string[] {
  return [
    'User Profile',
    'Book Clubs',
    'Lists',
    'Discussions',
    'Feed Page'
  ];
}

function getMilestoneColor(index: number): string {
  const colors = [
    'bg-cyan-500', 
    'bg-indigo-500',
    'bg-green-500', 
    'bg-blue-500',
    'bg-amber-500'
  ];
  return colors[index % colors.length];
}

export default HorizontalTimeline;
