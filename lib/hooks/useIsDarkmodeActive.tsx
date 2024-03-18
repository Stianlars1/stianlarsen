"use client";

import { useTheme } from "next-themes";

export const useIsDarkmodeActive = () => {
  const { resolvedTheme: theme, theme: defaultTheme } = useTheme();

  // Check if the current theme is 'dark'
  const isDarkmodeActive =
    theme && theme === "dark" ? true : defaultTheme === "dark" ? true : false;

  return { isDarkmodeActive };
};
