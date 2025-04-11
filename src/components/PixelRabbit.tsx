
import React from "react";
import { useNavigate } from "react-router-dom";

const PixelRabbit: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/investors");
  };

  return (
    <div 
      className="fixed bottom-4 right-4 z-50 cursor-pointer animate-bounce hover:animate-none transition-transform hover:scale-110"
      onClick={handleClick}
      title="Follow the white rabbit"
    >
      <svg 
        width="48" 
        height="48" 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Pixel art white rabbit */}
        <rect x="16" y="4" width="4" height="4" fill="#FFFFFF" />
        <rect x="20" y="4" width="4" height="4" fill="#FFFFFF" />
        <rect x="16" y="8" width="4" height="4" fill="#FFFFFF" />
        <rect x="20" y="8" width="4" height="4" fill="#FFFFFF" />
        <rect x="24" y="8" width="4" height="4" fill="#FFFFFF" />
        <rect x="16" y="12" width="4" height="4" fill="#FFFFFF" />
        <rect x="20" y="12" width="4" height="4" fill="#FFFFFF" />
        <rect x="24" y="12" width="4" height="4" fill="#FFFFFF" />
        <rect x="28" y="12" width="4" height="4" fill="#FFFFFF" />
        <rect x="12" y="16" width="4" height="4" fill="#FFFFFF" />
        <rect x="16" y="16" width="4" height="4" fill="#FFFFFF" />
        <rect x="20" y="16" width="4" height="4" fill="#FFFFFF" />
        <rect x="24" y="16" width="4" height="4" fill="#FFFFFF" />
        <rect x="28" y="16" width="4" height="4" fill="#FFFFFF" />
        <rect x="12" y="20" width="4" height="4" fill="#FFFFFF" />
        <rect x="16" y="20" width="4" height="4" fill="#FFFFFF" />
        <rect x="20" y="20" width="4" height="4" fill="#FFFFFF" />
        <rect x="24" y="20" width="4" height="4" fill="#FFFFFF" />
        <rect x="28" y="20" width="4" height="4" fill="#FFFFFF" />
        <rect x="16" y="24" width="4" height="4" fill="#FFFFFF" />
        <rect x="20" y="24" width="4" height="4" fill="#FFFFFF" />
        <rect x="24" y="24" width="4" height="4" fill="#FFFFFF" />
        <rect x="16" y="28" width="4" height="4" fill="#FFFFFF" />
        <rect x="20" y="28" width="4" height="4" fill="#FFFFFF" />
        <rect x="24" y="28" width="4" height="4" fill="#FFFFFF" />
        <rect x="12" y="32" width="4" height="4" fill="#FFFFFF" />
        <rect x="16" y="32" width="4" height="4" fill="#FFFFFF" />
        <rect x="24" y="32" width="4" height="4" fill="#FFFFFF" />
        <rect x="28" y="32" width="4" height="4" fill="#FFFFFF" />
        <rect x="8" y="36" width="4" height="4" fill="#FFFFFF" />
        <rect x="12" y="36" width="4" height="4" fill="#FFFFFF" />
        <rect x="28" y="36" width="4" height="4" fill="#FFFFFF" />
        <rect x="32" y="36" width="4" height="4" fill="#FFFFFF" />
      </svg>
    </div>
  );
};

export default PixelRabbit;
