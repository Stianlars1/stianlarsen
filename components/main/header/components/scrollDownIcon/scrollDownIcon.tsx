"use client";

import { ChevronDownCircle } from "lucide-react";
import { useEffect, useState } from "react";
import "./scrollDownIcon.css";
export const ScrollDownIcon = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const newOpacity = Math.max(1 - window.scrollY * 0.01, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-down-icon" style={{ opacity: opacity }}>
      <a
        href="#about-me"
        aria-label="This is a shortcut button to go to the first section, which is the about me section."
      >
        <ChevronDownCircle />
      </a>
    </div>
  );
};
