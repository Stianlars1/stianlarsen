"use client";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { HeaderH1Title } from "./components/h1";
import { ScrollDownIcon } from "./components/scrollDownIcon/scrollDownIcon";

import { useEffect, useState } from "react";
import ProgressBarLoadingScreen from "./components/loadingScreen/loadingScreen";
import "./header.css";

export const Header = () => {
  const [isAnimationLoading, setIsAnimationLoading] = useState(true);

  return (
    <>
      {isAnimationLoading && <ProgressBarLoadingScreen />}
      <motion.section
        style={{ display: isAnimationLoading ? "none" : "flex" }}
        initial="hidden"
        animate="visible"
        className="main-header"
        onAnimationStart={() => setIsAnimationLoading(false)}
      >
        <Parallax
          speed={30}
          className="main-header__wrapper"
          scale={[1, 4, "easeOutQuad"]}
          startScroll={0}
          translateY={[0, -500]}
          endScroll={800}
        >
          <HeaderH1Title className="main-header__wrapper__h1" />
        </Parallax>
        <ScrollDownIcon />
      </motion.section>
    </>
  );
};
