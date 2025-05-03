
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

interface TimelineMilestonesProps {
  milestones: string[];
}

const TimelineMilestones: React.FC<TimelineMilestonesProps> = ({ milestones }) => {
  return (
    <Card className="bg-black/50 border-white/10 backdrop-blur-sm text-white mt-12">
      <CardContent className="p-6 md:p-8">
        <h2 className="font-newsreader text-2xl md:text-3xl mb-4 pb-2 border-b border-white/10 flex items-center">
          <Check className="mr-2 text-green-400" /> Key Milestones by End of Month
        </h2>
        <ul className="space-y-3">
          {milestones.map((milestone, index) => (
            <li key={index} className="flex items-start">
              <Check className="min-w-5 h-5 text-green-400 mt-1 mr-2" />
              <span className="text-white/90 font-newsreader text-lg">{milestone}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TimelineMilestones;
