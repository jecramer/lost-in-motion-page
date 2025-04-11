
import React, { ReactNode } from "react";

interface BackgroundWrapperProps {
  children: ReactNode;
}

const BackgroundWrapper = ({ children }: BackgroundWrapperProps) => {
  return (
    <div className="min-h-screen w-full flex flex-col relative" style={{
      backgroundImage: `url('/bg.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      {children}
    </div>
  );
};

export default BackgroundWrapper;
