"use client";
import { slideInFromTopWithOptions } from "@/lib/motion";
import { motion } from "framer-motion";
import { ReactElement } from "react";

export const HeaderH1Title = ({ className }: { className: string }) => {
  const getH1Title = (): ReactElement => {
    return (
      <>
        <span className="main-header__wrapper__h1__animation hello">
          Hello,
        </span>{" "}
        <span className="main-header__wrapper__h1__animation im-stian">
          I&apos;m Stian,
        </span>
        <br />
        <span className="main-header__wrapper__h1__animation fullstack-web-developer">
          Full-Stack Web Developer
        </span>
      </>
    );
  };
  const h1Title = getH1Title();

  return (
    <motion.h1
      variants={slideInFromTopWithOptions({
        startY: -20,
        endY: 0,
        duration: 1,
        delay: 0.5,
      })}
      className={className}
    >
      {h1Title}
    </motion.h1>
  );
};
