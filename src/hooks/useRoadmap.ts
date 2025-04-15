import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MilestoneType, StageType } from "@/types/roadmap";

// Initial data based on the provided image
const initialStages: StageType[] = [
  {
    id: "1",
    name: "Establish",
    amount: "€250k",
    color: "#F6C78C", // Light orange
    timeframe: "Now",
    milestones: [
      {
        id: "1-1",
        title: "12 months' runway",
        description: "Secure funding for a full year of operations",
        category: "establish",
      },
      {
        id: "1-2",
        title: "Develop MVP",
        description: "Build the minimum viable product version",
        category: "establish",
      },
      {
        id: "1-3",
        title: "Soft launch",
        description: "Limited release to test market reception",
        category: "establish",
      },
      {
        id: "1-4",
        title: "Onboard creators",
        description: "Begin recruiting initial content creators",
        category: "establish",
      },
      {
        id: "1-5",
        title: "Establish revenue",
        description: "Set up initial revenue streams",
        category: "establish",
      },
    ],
  },
  {
    id: "2",
    name: "Launch",
    amount: "€1.5m",
    color: "#FFEB94", // Light yellow
    timeframe: "Q4 2025",
    milestones: [
      {
        id: "2-1",
        title: "Increase headcount",
        description: "Expand team to support growth",
        category: "launch",
      },
      {
        id: "2-2",
        title: "Launch Pogo",
        description: "Full product launch to the public",
        category: "launch",
      },
      {
        id: "2-3",
        title: "Optimise internal processes",
        description: "Streamline operations for efficiency",
        category: "launch",
      },
      {
        id: "2-4",
        title: "Accelerate creator signups",
        description: "Aggressive recruitment of content creators",
        category: "launch",
      },
      {
        id: "2-5",
        title: "Cash flow positive",
        description: "Achieve positive cash flow operations",
        category: "launch",
      },
    ],
  },
  {
    id: "3",
    name: "Grow",
    amount: "€5m",
    color: "#A6D89E", // Light green
    timeframe: "H1 2026",
    milestones: [
      {
        id: "3-1",
        title: "Direct deals with publishers and retailers",
        description: "Form strategic partnerships",
        category: "grow",
      },
      {
        id: "3-2",
        title: "Establish new verticals",
        description: "Expand into additional market segments",
        category: "grow",
      },
      {
        id: "3-3",
        title: "Community features and live operations",
        description: "Launch community engagement tools",
        category: "grow",
      },
      {
        id: "3-4",
        title: "Pogo is the leader in publishing vertical",
        description: "Achieve market leadership position",
        category: "grow",
      },
      {
        id: "3-5",
        title: "Increase headcount",
        description: "Further team expansion to support scale",
        category: "grow",
      },
    ],
  },
];

export const useRoadmap = () => {
  const [stages, setStages] = useState<StageType[]>(initialStages);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [milestoneDialogOpen, setMilestoneDialogOpen] = useState(false);
  const [stageDialogOpen, setStageDialogOpen] = useState(false);
  const [currentMilestone, setCurrentMilestone] = useState<Partial<MilestoneType> | null>(null);
  const [currentStage, setCurrentStage] = useState<Partial<StageType> | null>(null);
  const [selectedStageId, setSelectedStageId] = useState<string | null>(null);

  const handleAddMilestone = (stageId: string) => {
    setSelectedStageId(stageId);
    setCurrentMilestone(null);
    setMilestoneDialogOpen(true);
  };

  const handleEditMilestone = (stageId: string, milestoneId: string) => {
    const stage = stages.find((s) => s.id === stageId);
    if (stage) {
      const milestone = stage.milestones.find((m) => m.id === milestoneId);
      if (milestone) {
        setSelectedStageId(stageId);
        setCurrentMilestone(milestone);
        setMilestoneDialogOpen(true);
      }
    }
  };

  const handleDeleteMilestone = (stageId: string, milestoneId: string) => {
    setStages((prevStages) =>
      prevStages.map((stage) => {
        if (stage.id === stageId) {
          return {
            ...stage,
            milestones: stage.milestones.filter((m) => m.id !== milestoneId),
          };
        }
        return stage;
      })
    );
  };

  const handleEditStage = (stageId: string) => {
    const stage = stages.find((s) => s.id === stageId);
    if (stage) {
      setCurrentStage(stage);
      setStageDialogOpen(true);
    }
  };

  const handleSaveMilestone = (milestone: Partial<MilestoneType>) => {
    if (selectedStageId) {
      if (milestone.id) {
        // Update existing milestone
        setStages((prevStages) =>
          prevStages.map((stage) => {
            if (stage.id === selectedStageId) {
              return {
                ...stage,
                milestones: stage.milestones.map((m) =>
                  m.id === milestone.id ? { ...m, ...milestone } as MilestoneType : m
                ),
              };
            }
            return stage;
          })
        );
      } else {
        // Add new milestone
        const newMilestone: MilestoneType = {
          id: uuidv4(),
          title: milestone.title || "New Milestone",
          description: milestone.description || "",
          category: milestone.category || "establish",
        };

        setStages((prevStages) =>
          prevStages.map((stage) => {
            if (stage.id === selectedStageId) {
              return {
                ...stage,
                milestones: [...stage.milestones, newMilestone],
              };
            }
            return stage;
          })
        );
      }
    }
  };

  const handleSaveStage = (stage: Partial<StageType>) => {
    if (stage.id) {
      setStages((prevStages) =>
        prevStages.map((s) => (s.id === stage.id ? { ...s, ...stage } as StageType : s))
      );
    }
  };

  return {
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
  };
};
