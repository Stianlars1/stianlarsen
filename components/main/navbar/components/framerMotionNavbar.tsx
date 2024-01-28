"use client";
import { motion, useScroll } from "framer-motion";
import "./framerMotionNavbar.css";

export const FramerMotionNavbar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
  );
};
