"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const NavItems = () => {
  const router = useRouter();

  // const handleScrollIntoView = (
  //   e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  // ) => {
  //   e.preventDefault();
  //   const href = e.currentTarget.href;
  //   const targetId = href.replace(/.*\#/, "");

  //   // Function to scroll to the target element
  //   const scrollToElement = () => {
  //     const elem = document.getElementById(targetId);
  //     elem?.scrollIntoView({ behavior: "smooth" });
  //   };

  //   // Check if the user is not on the home page
  //   if (window.location.pathname !== "/" && targetId) {
  //     // Use Next.js Router to navigate back to the home page
  //     router.prefetch("/#" + targetId);
  //   } else {
  //     // User is already on the home page, just scroll to the element
  //     scrollToElement();
  //   }
  // };

  return (
    <nav>
      <ul className="hidden justify-between align-middle gap-4  md:flex">
        <li>
          <Link
            href={"/#about-me"}
            prefetch={false}
            scroll={false}
            // onClick={handleScrollIntoView}
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            href={"/#projects"}
            prefetch={false}
            scroll={false}
            // onClick={handleScrollIntoView}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href={"/cv"}
            prefetch={false}
            scroll={false}
            // onClick={handleScrollIntoView}
          >
            CV
          </Link>
        </li>
      </ul>
    </nav>
  );
};
