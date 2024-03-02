"use client";
import { handleScrollIntoView } from "@/lib/utils";
import Link from "next/link";

export const NavItems = () => (
  <nav>
    <ul className="hidden justify-between align-middle gap-4  md:flex">
      <li>
        <Link href={"#about-me"} onClick={handleScrollIntoView}>
          About me
        </Link>
      </li>
      <li>
        <Link href={"#projects"} onClick={handleScrollIntoView}>
          Projects
        </Link>
      </li>
      <li>
        <Link href={"#cv"} onClick={handleScrollIntoView}>
          CV
        </Link>
      </li>
    </ul>
  </nav>
);
