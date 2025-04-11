
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PixelRabbit: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    navigate("/investors");
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled to bottom
      const scrolledToBottom = 
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      
      setIsVisible(scrolledToBottom);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleScroll();
    
    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-4 right-4 z-50 cursor-pointer transition-transform hover:scale-110"
      onClick={handleClick}
      title="Follow the white rabbit"
    >
      <svg 
        width="64" 
        height="64" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* More detailed pixel art white rabbit */}
        {/* Head */}
        <rect x="12" y="8" width="8" height="4" fill="#FFFFFF" />
        <rect x="10" y="12" width="12" height="4" fill="#FFFFFF" />
        
        {/* Ears */}
        <rect x="8" y="6" width="4" height="4" fill="#FFFFFF" />
        <rect x="20" y="6" width="4" height="4" fill="#FFFFFF" />
        <rect x="6" y="10" width="2" height="2" fill="#FFFFFF" />
        <rect x="24" y="10" width="2" height="2" fill="#FFFFFF" />
        
        {/* Eyes */}
        <rect x="12" y="12" width="2" height="2" fill="#000000" />
        <rect x="18" y="12" width="2" height="2" fill="#000000" />
        
        {/* Body */}
        <rect x="10" y="16" width="12" height="8" fill="#FFFFFF" />
        
        {/* Legs */}
        <rect x="8" y="24" width="4" height="4" fill="#FFFFFF" />
        <rect x="20" y="24" width="4" height="4" fill="#FFFFFF" />
        
        {/* Tail */}
        <rect x="14" y="24" width="4" height="2" fill="#FFFFFF" />
      </svg>
    </div>
  );
};

export default PixelRabbit;
