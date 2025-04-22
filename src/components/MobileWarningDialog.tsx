
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function MobileWarningDialog() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Only show on mobile devices
    if (isMobile) {
      setOpen(true);
    }
  }, [isMobile]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Best Viewed on Desktop</DialogTitle>
          <DialogDescription className="text-center">
            Please switch to a computer or rotate your device horizontally for the best experience.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center">
          <Button onClick={() => setOpen(false)}>
            Continue Anyway
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
