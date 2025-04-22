
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
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="font-newsreader text-2xl mb-4">Get Notified When We Launch</DialogTitle>
        </DialogHeader>
        <div className="launchlist-widget" data-key-id="pBBH1O" data-height="180px"></div>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpDialog;
