
export type TaskType = {
  title: string;
  details: string[];
};

export type WeekType = {
  number: number;
  title: string;
  hours: number;
  tasks: TaskType[];
};
