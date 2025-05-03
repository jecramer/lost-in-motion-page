
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

interface TimelineMilestonesProps {
  milestones: string[];
}

const TimelineMilestones: React.FC<TimelineMilestonesProps> = ({ milestones }) => {
  return (
    <Card className="bg-white/90 border-gray-100 shadow-lg rounded-lg mt-12">
      <CardContent className="p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl mb-4 font-semibold text-gray-800 pb-2 border-b border-gray-200 flex items-center">
          <Check className="mr-2 text-green-500" /> Key Milestones by End of Month
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {milestones.map((milestone, index) => (
            <div 
              key={index} 
              className={`flex items-start p-3 rounded-md transition-all duration-200 hover:bg-gray-50 ${getMilestoneColor(index)}`}
            >
              <Check className="min-w-5 h-5 mt-1 mr-2" />
              <span className="font-medium">{milestone}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

function getMilestoneColor(index: number): string {
  const colors = [
    'text-cyan-700 border-l-4 border-cyan-400 pl-2', 
    'text-indigo-700 border-l-4 border-indigo-400 pl-2',
    'text-green-700 border-l-4 border-green-400 pl-2', 
    'text-blue-700 border-l-4 border-blue-400 pl-2',
    'text-amber-700 border-l-4 border-amber-400 pl-2'
  ];
  return colors[index % colors.length];
}

export default TimelineMilestones;
