
import React, { useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SignUpDialogProps {
  open: boolean;
  onClose: () => void;
}

const SignUpDialog = ({ open, onClose }: SignUpDialogProps) => {
  useEffect(() => {
    if (open) {
      // Clean up existing widgets
      const existingScripts = document.querySelectorAll('script[src="https://getlaunchlist.com/js/widget.js"]');
      existingScripts.forEach(script => script.remove());

      // Initialize new widget
      const script = document.createElement('script');
      script.src = 'https://getlaunchlist.com/js/widget.js';
      script.defer = true;
      script.onload = () => {
        if (window.LaunchList && typeof window.LaunchList.initializeWidgets === 'function') {
          window.LaunchList.initializeWidgets();
        }
      };
      document.head.appendChild(script);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-md bg-[#94af45]/95 backdrop-blur-sm border-none p-0 overflow-hidden"
        style={{
          backgroundImage: `url('/bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-col items-center justify-center p-8 space-y-4 w-full h-full">
          <DialogHeader className="text-center w-full">
            <DialogTitle className="font-newsreader text-3xl mb-2 text-white">
              Get Notified When We Launch
            </DialogTitle>
            <p className="text-white/80 text-sm mb-4">
              Join our waitlist to be the first to know when we go live
            </p>
          </DialogHeader>
          <div 
            className="launchlist-widget w-full max-w-sm" 
            data-key-id="pBBH1O" 
            data-height="180px"
            style={{
              '--widget-background': 'transparent',
              '--widget-border': 'none',
              '--widget-text': 'white',
              '--button-background': '#e0d6ac', // Matching the design's button color
              '--button-text': '#94af45',
              '--input-background': 'white/10',
              '--input-border': 'white/20',
              '--input-text': 'white',
            } as React.CSSProperties}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpDialog;
