"use client";

import { clsx, type ClassValue } from "clsx";
import { MotionValue, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export const handleScrollIntoView = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
  // first prevent the default behavior
  e.preventDefault();
  // get the href and remove everything before the hash (#)
  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");
  // get the element by id and use scrollIntoView
  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({
    behavior: "smooth",
  });
};
