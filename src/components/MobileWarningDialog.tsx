
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
      <DialogContent className="sm:max-w-md bg-[#94af45]/95 backdrop-blur-sm border-none p-0 overflow-hidden">
        <div className="flex flex-col items-center justify-center p-8 space-y-4 w-full h-full">
          <DialogHeader className="text-center w-full">
            <DialogTitle className="font-newsreader text-3xl mb-2 text-white">
              Best Viewed on Desktop
            </DialogTitle>
            <DialogDescription className="text-white/80 text-sm">
              Please switch to a computer or rotate your device horizontally for the best experience.
            </DialogDescription>
          </DialogHeader>
          <Button 
            onClick={() => setOpen(false)}
            className="bg-[#e0d6ac] text-[#94af45] hover:bg-[#e0d6ac]/90"
          >
            Continue Anyway
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
