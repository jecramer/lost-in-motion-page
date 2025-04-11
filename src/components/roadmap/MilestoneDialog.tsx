
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
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MilestoneType } from "@/types/roadmap";

interface MilestoneDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (milestone: Partial<MilestoneType>) => void;
  currentMilestone: Partial<MilestoneType> | null;
  stageId: string | null;
}

const MilestoneDialog: React.FC<MilestoneDialogProps> = ({
  open,
  onOpenChange,
  onSave,
  currentMilestone,
  stageId,
}) => {
  const [title, setTitle] = React.useState(currentMilestone?.title || "");
  const [description, setDescription] = React.useState(currentMilestone?.description || "");
  const [category, setCategory] = React.useState<"establish" | "launch" | "grow">(
    (currentMilestone?.category as "establish" | "launch" | "grow") || "establish"
  );

  React.useEffect(() => {
    if (currentMilestone) {
      setTitle(currentMilestone.title || "");
      setDescription(currentMilestone.description || "");
      setCategory((currentMilestone.category as "establish" | "launch" | "grow") || "establish");
    } else {
      setTitle("");
      setDescription("");
      setCategory("establish");
    }
  }, [currentMilestone, open]);

  const handleSave = () => {
    onSave({
      id: currentMilestone?.id,
      title,
      description,
      category,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{currentMilestone?.id ? "Edit" : "Add"} Milestone</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter milestone title"
              className="w-full"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter milestone description"
              className="w-full"
              rows={3}
            />
          </div>
          {!currentMilestone?.id && (
            <div className="grid gap-2">
              <label htmlFor="category" className="text-sm font-medium">
                Category
              </label>
              <Select
                value={category}
                onValueChange={(value) => setCategory(value as "establish" | "launch" | "grow")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="establish">Establish</SelectItem>
                  <SelectItem value="launch">Launch</SelectItem>
                  <SelectItem value="grow">Grow</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={!title.trim()}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MilestoneDialog;
