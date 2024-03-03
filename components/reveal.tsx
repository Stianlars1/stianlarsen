import { motion, useAnimation, useInView } from "framer-motion";
import { ReactElement, ReactNode, useEffect, useRef } from "react";
type MotionProps = "down" | "up" | "left" | "right";

interface RevealProps {
  children: ReactElement | ReactElement[] | ReactNode | ReactNode[];
  type: MotionProps;
  delay: number;
  width?: "fit-content" | "100%";
  className?: string;
}

const getMotionProps = (type: MotionProps) => {
  switch (type) {
    case "down":
      return {
        variants: {
          hidden: { opacity: 0, y: -40 },
          visible: { opacity: 1, y: 0 },
        },
      };
    case "up":
      return {
        variants: {
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        },
      };
    case "left":
      return {
        variants: {
          hidden: { opacity: 0, x: 40 },
          visible: { opacity: 1, x: 0 },
        },
      };
    case "right":
      return {
        variants: {
          hidden: { opacity: 0, x: -40 },
          visible: { opacity: 1, x: 0 },
        },
      };
  }
};
export const Reveal = ({
  children,
  type,
  delay = 0.25,
  width = "fit-content",
  className,
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.5,
    margin: "50px",
  });
  const motionProps = getMotionProps(type);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      console.log("isInView", isInView);
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <>
      <div
        ref={ref}
        style={{ position: "relative", width }}
        className={`reveal ${
          className && className.length > 0 ? className : ""
        }`}
      >
        <motion.div
          {...motionProps}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: delay }}
          className="reveal-motion-wrapper reveal__motion-wrapper"
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};
