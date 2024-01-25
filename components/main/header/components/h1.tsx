"use client";
import { slideInFromTopWithOptions } from "@/lib/motion";
import { motion } from "framer-motion";
import { ReactElement } from "react";

export const HeaderH1Title = ({ className }: { className: string }) => {
  const getH1Title = (): ReactElement => {
    return (
      <>
        <span>Hello,</span> <span>I&apos;m Stian,</span>
        <br />
        <span>Full-Stack Web</span>
        <br />
        <span>Developer</span>
      </>
    );
  };
  const h1Title = getH1Title();

  return (
    <>
      <motion.h1
        variants={slideInFromTopWithOptions({
          startY: -20,
          endY: 0,
          duration: 1,
          delay: 0,
        })}
        className={className}
      >
        {h1Title}
      </motion.h1>
    </>
  );
};
