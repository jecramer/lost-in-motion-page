
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
    // Only show when in portrait mode on mobile
    if (isMobile && window.innerHeight > window.innerWidth) {
      setOpen(true);
    }
  }, [isMobile]);

  // Listen for orientation changes
  useEffect(() => {
    const handleOrientationChange = () => {
      if (isMobile && window.innerHeight > window.innerWidth) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleOrientationChange);
    return () => window.removeEventListener('resize', handleOrientationChange);
  }, [isMobile]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md bg-black/80 backdrop-blur-sm border-none p-0 overflow-hidden">
        <div className="flex flex-col items-center justify-center p-8 space-y-4 w-full h-full">
          <DialogHeader className="text-center w-full">
            <DialogTitle className="font-newsreader text-2xl mb-2 text-white">
              Rotate Your Device
            </DialogTitle>
            <DialogDescription className="text-white/80 text-sm">
              Please rotate your device horizontally for the best viewing experience.
            </DialogDescription>
          </DialogHeader>
          <Button 
            onClick={() => setOpen(false)}
            className="bg-white text-black hover:bg-white/90"
          >
            Continue in Portrait
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
