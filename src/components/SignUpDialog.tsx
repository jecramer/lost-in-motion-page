
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
          backgroundImage: `url('/lovable-uploads/9a30cd29-805c-4a33-8beb-5f5414d78adf.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex items-center justify-center w-full h-full min-h-[500px] p-6">
          <div className="flex flex-col items-center w-full">
            <DialogHeader className="text-center w-full mb-4">
              <DialogTitle className="font-newsreader text-3xl mb-2 text-white">
                Get Notified When We Launch
              </DialogTitle>
              <p className="text-white/80 text-sm">
                Join our waitlist to be the first to know when we go live
              </p>
            </DialogHeader>
            
            {/* LaunchList widget with custom CSS to ensure centered content */}
            <div 
              className="launchlist-widget w-full flex justify-center" 
              data-key-id="pBBH1O" 
              data-height="180px"
              style={{
                '--widget-background': 'transparent',
                '--widget-border': 'none',
                '--widget-text': 'white',
                '--button-background': '#e0d6ac', 
                '--button-text': '#94af45',
                '--input-background': 'white/10',
                '--input-border': 'white/20',
                '--input-text': 'white',
                '--widget-width': '100%',
                '--input-width': '100%',
                '--button-width': '100%',
                '--widget-max-width': '400px',
                '--widget-padding': '0',
                '--widget-margin': '0 auto',
                '--widget-align': 'center',
                '--form-align': 'center',
                '--form-width': '100%',
              } as React.CSSProperties}
            />

            {/* Add custom CSS to target and center LaunchList elements */}
            <style jsx global>{`
              .launchlist-widget form {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                max-width: 400px;
                margin: 0 auto;
              }
              
              .launchlist-widget input, 
              .launchlist-widget button {
                width: 100% !important;
                max-width: 400px !important;
                margin-left: auto !important;
                margin-right: auto !important;
                text-align: center !important;
              }
              
              .launchlist-widget div {
                width: 100% !important;
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
              }
            `}</style>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpDialog;
