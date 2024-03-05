"use client";

// export const useIsDarkmodeActive = (): { isDarkmodeActive: boolean } => {
//   const [isDarkmodeActive, setIsDarkmodeActive] = useState(false);

//   useEffect(() => {
//     const mq = window.matchMedia("(prefers-color-scheme: dark)");
//     if (mq.matches) {
//       setIsDarkmodeActive(true);
//     }
//     try {
//       mq.addEventListener("change", (evt) => setIsDarkmodeActive(evt.matches));
//     } catch (e) {
//       console.error(e);
//     }
//   }, []);

//   return { isDarkmodeActive };
// };

// useIsDarkmodeActive.ts
import { useTheme } from "next-themes";

export const useIsDarkmodeActive = () => {
  const { resolvedTheme: theme, theme: defaultTheme } = useTheme();

  // Check if the current theme is 'dark'
  const isDarkmodeActive =
    theme && theme === "dark" ? true : defaultTheme === "dark" ? true : false;

  return { isDarkmodeActive };
};
