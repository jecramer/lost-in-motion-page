
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StageType } from "@/types/roadmap";

interface StageDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (stage: Partial<StageType>) => void;
  currentStage: Partial<StageType> | null;
}

const StageDialog: React.FC<StageDialogProps> = ({
  open,
  onOpenChange,
  onSave,
  currentStage,
}) => {
  const [name, setName] = React.useState(currentStage?.name || "");
  const [amount, setAmount] = React.useState(currentStage?.amount || "");
  const [timeframe, setTimeframe] = React.useState(currentStage?.timeframe || "");
  
  React.useEffect(() => {
    if (currentStage) {
      setName(currentStage.name || "");
      setAmount(currentStage.amount || "");
      setTimeframe(currentStage.timeframe || "");
    } else {
      setName("");
      setAmount("");
      setTimeframe("");
    }
  }, [currentStage, open]);

  const handleSave = () => {
    onSave({
      id: currentStage?.id,
      name,
      amount,
      timeframe,
      color: currentStage?.color,
      milestones: currentStage?.milestones || [],
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{currentStage?.id ? "Edit" : "Add"} Stage</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter stage name"
              className="w-full"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="amount" className="text-sm font-medium">
              Funding Amount
            </label>
            <Input
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g. €250k"
              className="w-full"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="timeframe" className="text-sm font-medium">
              Timeframe
            </label>
            <Input
              id="timeframe"
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              placeholder="e.g. Q4 2025"
              className="w-full"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={!name.trim() || !amount.trim()}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default StageDialog;
