
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Edit, Trash, Plus } from "lucide-react";
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
  onAddMilestone,
  onEditMilestone,
  onDeleteMilestone,
  onEditStage,
}) => {
  return (
    <div 
      className="rounded-lg overflow-hidden flex flex-col h-full"
      style={{ backgroundColor: stage.color }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold font-newsreader">{stage.name} 
            <button 
              onClick={() => onEditStage(stage.id)} 
              className="ml-2 p-1 text-black/60 hover:text-black/90 transition-colors"
            >
              <Edit size={16} />
            </button>
          </h3>
        </div>
        <div className="flex items-center mb-6">
          <h4 className="text-3xl font-bold font-newsreader">
            {stage.amount}
            <button 
              onClick={() => onEditStage(stage.id)} 
              className="ml-2 p-1 text-black/60 hover:text-black/90 transition-colors"
            >
              <Edit size={16} />
            </button>
          </h4>
        </div>

        <div className="space-y-4">
          {stage.milestones.map((milestone) => (
            <Card key={milestone.id} className="bg-white/90 backdrop-blur-sm shadow-sm">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-semibold">{milestone.title}</h5>
                  <div className="flex space-x-1">
                    <button
                      onClick={() => onEditMilestone(stage.id, milestone.id)}
                      className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => onDeleteMilestone(stage.id, milestone.id)}
                      className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <Trash size={16} />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{milestone.description}</p>
              </CardContent>
            </Card>
          ))}
          
          <button
            onClick={() => onAddMilestone(stage.id)}
            className="w-full py-2 px-4 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-black/70 rounded-md flex items-center justify-center transition-colors text-sm font-medium"
          >
            <Plus size={16} className="mr-1" /> Add Milestone
          </button>
        </div>
      </div>
      
      <div className="mt-auto p-4 bg-black/10 backdrop-blur-sm">
        <p className="text-lg font-semibold font-newsreader">{stage.timeframe}</p>
      </div>
    </div>
  );
};

export default RoadmapStage;
