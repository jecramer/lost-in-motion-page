
import React from "react";
import RoadmapStage from "./RoadmapStage";
import MilestoneDialog from "./MilestoneDialog";
import StageDialog from "./StageDialog";
import RoadmapFilters from "./RoadmapFilters";
import { useRoadmap } from "@/hooks/useRoadmap";

const Roadmap: React.FC = () => {
  const {
    stages,
    activeFilter,
    milestoneDialogOpen,
    stageDialogOpen,
    currentMilestone,
    currentStage,
    selectedStageId,
    setActiveFilter,
    setMilestoneDialogOpen,
    setStageDialogOpen,
    handleAddMilestone,
    handleEditMilestone,
    handleDeleteMilestone,
    handleEditStage,
    handleSaveMilestone,
    handleSaveStage,
  } = useRoadmap();

  const filteredStages = activeFilter
    ? stages.filter((stage) => stage.name.toLowerCase() === activeFilter.toLowerCase())
    : stages;

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-between items-center mb-6">
        <RoadmapFilters
          stages={stages}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        {/* Button removed as per request */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredStages.map((stage) => (
          <RoadmapStage
            key={stage.id}
            stage={stage}
            onAddMilestone={handleAddMilestone}
            onEditMilestone={handleEditMilestone}
            onDeleteMilestone={handleDeleteMilestone}
            onEditStage={handleEditStage}
          />
        ))}
      </div>

      <MilestoneDialog
        open={milestoneDialogOpen}
        onOpenChange={setMilestoneDialogOpen}
        onSave={handleSaveMilestone}
        currentMilestone={currentMilestone}
        stageId={selectedStageId}
      />

      <StageDialog
        open={stageDialogOpen}
        onOpenChange={setStageDialogOpen}
        onSave={handleSaveStage}
        currentStage={currentStage}
      />
    </div>
  );
};

export default Roadmap;

