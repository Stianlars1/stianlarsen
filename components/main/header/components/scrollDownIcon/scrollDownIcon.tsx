"use client";

import { handleScrollIntoView } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronDownCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./scrollDownIcon.css";
export const ScrollDownIcon = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the factor (e.g., 0.001) to control the rate of fade
      const newOpacity = Math.max(1 - window.scrollY * 0.01, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div className="scroll-down-icon" style={{ opacity: opacity }}>
      <Link href="#about-me" onClick={handleScrollIntoView}>
        <ChevronDownCircle />
      </Link>
    </motion.div>
  );
};
