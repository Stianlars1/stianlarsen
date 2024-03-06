"use client";
import { useWindowSize } from "@/lib/hooks/windowSize";

export const HeaderH1Title = ({ className }: { className?: string }) => {
  const { windowWidth } = useWindowSize();
  if (typeof window !== "undefined" && windowWidth && windowWidth < 500) {
    return (
      <span className="mobileH1">
        <span style={{ whiteSpace: "nowrap" }}>Hello,</span>
        <span style={{ whiteSpace: "nowrap" }}>I&apos;m Stian,</span>
        <span style={{ whiteSpace: "nowrap" }}>a Full-Stack </span>
        <span style={{ whiteSpace: "nowrap" }}>Developer</span>
      </span>
    );
  }

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
// "use client";
// import { Reveal } from "@/components/reveal";
// import { useWindowSize } from "@/lib/hooks/windowSize";
// import { ReactElement } from "react";

// export const HeaderH1Title = ({ className }: { className: string }) => {
//   const { windowWidth } = useWindowSize();

//   const isMobileSize = windowWidth < 500;
//   const getH1Title = (): ReactElement => {
//     return (
//       <>
//         <Reveal type={"down"} delay={0.25}>
//           <>
//             {isMobileSize && (
//               <>
//                 <span>
//                   Hello, I&apos;m Stian,{" "}
//                   <span style={{ whiteSpace: "nowrap" }}>Full-Stack </span>Web
//                   Developer
//                 </span>
//               </>
//             )}

//             {!isMobileSize && (
//               <>
//                 <span>Hello,</span> <span>I&apos;m Stian,</span>
//                 <br />
//                 <span>Full-Stack Web</span>
//                 <br />
//                 <span>Developer</span>
//               </>
//             )}
//           </>
//         </Reveal>
//       </>
//     );
//   };
//   const h1Title = getH1Title();

//   return (
//     <>
//       <h1 className={className}>{h1Title}</h1>
//     </>
//   );
// };
