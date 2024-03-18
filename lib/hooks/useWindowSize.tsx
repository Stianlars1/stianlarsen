"use client";
import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    windowWidth: number | undefined;
    windowHeight: number | undefined;
  }>({
    windowWidth: undefined,
    windowHeight: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      // Set window size with both width and height
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures this effect runs only on mount and unmount

  return windowSize;
};
