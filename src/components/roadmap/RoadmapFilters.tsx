
import React from "react";
import { StageType } from "@/types/roadmap";

interface RoadmapFiltersProps {
  stages: StageType[];
  activeFilter: string | null;
  onFilterChange: (filter: string | null) => void;
}

const RoadmapFilters: React.FC<RoadmapFiltersProps> = ({
  stages,
  activeFilter,
  onFilterChange,
}) => {
  const getFilterButtonClass = (filter: string | null) => {
    const baseClass = "px-4 py-2 text-sm font-medium rounded-md transition-colors";
    if (filter === activeFilter) {
      return `${baseClass} bg-white/80 text-black`;
    }
    return `${baseClass} bg-white/20 hover:bg-white/40 text-white`;
  };

  return (
    <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
      <button
        className={getFilterButtonClass(null)}
        onClick={() => onFilterChange(null)}
      >
        All Stages
      </button>
      {stages.map((stage) => (
        <button
          key={stage.id}
          className={getFilterButtonClass(stage.name)}
          onClick={() => onFilterChange(stage.name)}
        >
          {stage.name}
        </button>
      ))}
    </div>
  );
};

export default RoadmapFilters;
