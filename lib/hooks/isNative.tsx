"use client";
import { useEffect, useState } from "react";

const detectSafari = (userAgent: string) =>
  /^((?!chrome|android).)*safari/i.test(userAgent);
const detectMobile = (userAgent: string) =>
  /iPhone|iPad|iPod|Android/i.test(userAgent);

export const useBrowserInfo = () => {
  const [isSafari, setIsSafari] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent;
      setIsSafari(detectSafari(userAgent));
      setIsMobile(detectMobile(userAgent));
    }
  }, []);

  return { isSafari, isMobile };
};
