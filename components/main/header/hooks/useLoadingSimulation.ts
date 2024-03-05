"use client";
// useLoadingSimulation.js
import { useEffect, useState } from "react";

const useLoadingSimulation = (startLoading = true, totalDuration = 10000) => {
  const [isAnimationLoading, setIsAnimationLoading] = useState(startLoading);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (!isAnimationLoading) {
      return;
    }

    const intervalDuration = 100; // Interval duration in ms
    const totalIntervals = totalDuration / intervalDuration;
    const increment = 100 / totalIntervals;

    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        const newTimer = prevTimer + increment;
        if (newTimer >= 100) {
          clearInterval(interval);
          setIsAnimationLoading(false);
          return 100;
        }
        return newTimer;
      });
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [isAnimationLoading, totalDuration]);

  return { isAnimationLoading, timer, setIsAnimationLoading };
};

export default useLoadingSimulation;
