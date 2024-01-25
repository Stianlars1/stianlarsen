export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromRight(delay: number) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};
export const slideInFromTopWithOptions = ({
  startY,
  endY,
  duration,
  delay,
}: {
  startY: number;
  endY: number;
  duration: number;
  delay: number;
}) => {
  return {
    hidden: { y: startY, opacity: 0 },
    visible: {
      y: endY,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
};
