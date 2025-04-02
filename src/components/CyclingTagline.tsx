
import { useState, useEffect } from "react";

interface CyclingTaglineProps {
  phrases: string[];
  intervalTime?: number;
  className?: string;
}

const CyclingTagline = ({
  phrases,
  intervalTime = 3000,
  className = "",
}: CyclingTaglineProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fadeOutTimeout = setTimeout(() => {
      setIsVisible(false);
    }, intervalTime - 500); // Start fading out before interval ends

    const intervalId = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      setIsVisible(true);
    }, intervalTime);

    return () => {
      clearTimeout(intervalId);
      clearTimeout(fadeOutTimeout);
    };
  }, [currentIndex, intervalTime, phrases.length]);

  return (
    <span
      className={`transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {phrases[currentIndex]}
    </span>
  );
};

export default CyclingTagline;
