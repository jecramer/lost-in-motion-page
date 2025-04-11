
import React, { ReactNode } from "react";

interface BackgroundWrapperProps {
  children: ReactNode;
}

const BackgroundWrapper = ({ children }: BackgroundWrapperProps) => {
  // Convert children to array to manipulate them
  const childrenArray = React.Children.toArray(children);
  
  // Get all children except the last one (OdinSection)
  const darkBackgroundChildren = childrenArray.slice(0, -1);
  // Get the last child (OdinSection)
  const odinSection = childrenArray.slice(-1);
  
  return (
    <div className="min-h-screen w-full flex flex-col relative">
      <div style={{
        backgroundImage: `url('/bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        {darkBackgroundChildren}
      </div>
      {odinSection}
    </div>
  );
};

export default BackgroundWrapper;
