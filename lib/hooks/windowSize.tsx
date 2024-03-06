"use client";
import { useEffect, useState } from "react";

export const useWindowSize = () => {
  // Initialize state with width and height to avoid returning 0 on initial render
  const [windowSize, setWindowSize] = useState({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      // Set window size with both width and height
      if (typeof window !== "undefined") {
        setWindowSize({
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures this effect runs only on mount and unmount

  return windowSize;
};
