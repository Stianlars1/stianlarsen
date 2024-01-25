"use client";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { HeaderH1Title } from "./components/h1";
import { ScrollDownIcon } from "./components/scrollDownIcon/scrollDownIcon";

import { useStore } from "@/lib/state";
import "./header.css";


export const Header = () => {
const setIsAnimationLoadingFalse = useStore((state) => state.setIsAnimationLoadingFalse)
const isAnimationLoading = useStore((state) => state.isAnimationLoading)
console.log(isAnimationLoading)



  return (
    <>

  <motion.section
  style={{display: isAnimationLoading ? "none" : "block"}}
  initial="hidden"
  animate="visible"
  className="main-header"
  onAnimationStart={() => setIsAnimationLoadingFalse()}
  
  >
  <Parallax speed={30} className="main-header__wrapper">
  <HeaderH1Title className="main-header__wrapper__h1" />
  </Parallax>
  <ScrollDownIcon />
  </motion.section>
  
    </>
  );
};



