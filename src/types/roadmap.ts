
export type MilestoneType = {
  id: string;
  title: string;
  description: string;
  category: "establish" | "launch" | "grow";
};

export type StageType = {
  id: string;
  name: string;
  amount: string;
  color: string;
  timeframe: string;
  milestones: MilestoneType[];
};
