
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MilestoneType, StageType } from "@/types/roadmap";

interface RoadmapStageProps {
  stage: StageType;
  onAddMilestone: (stageId: string) => void;
  onEditMilestone: (stageId: string, milestoneId: string) => void;
  onDeleteMilestone: (stageId: string, milestoneId: string) => void;
  onEditStage: (stageId: string) => void;
}

const RoadmapStage: React.FC<RoadmapStageProps> = ({
  stage,
}) => {
  return (
    <div 
      className="rounded-lg overflow-hidden flex flex-col h-full"
      style={{ backgroundColor: stage.color }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold font-newsreader">{stage.name}</h3>
        </div>
        <div className="flex items-center mb-6">
          <h4 className="text-3xl font-bold font-newsreader">{stage.amount}</h4>
        </div>

        <div className="space-y-4">
          {stage.milestones.map((milestone) => (
            <Card key={milestone.id} className="bg-white/90 backdrop-blur-sm shadow-sm">
              <CardContent className="p-4">
                <h5 className="font-semibold mb-2">{milestone.title}</h5>
                <p className="text-sm text-gray-600">{milestone.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="mt-auto p-4 bg-black/10 backdrop-blur-sm">
        <p className="text-lg font-semibold font-newsreader">{stage.timeframe}</p>
      </div>
    </div>
  );
};

export default RoadmapStage;
