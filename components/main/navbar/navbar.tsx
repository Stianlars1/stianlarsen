import Link from "next/link";
import { HamburgerMenu } from "../hamburgerMenu/hamburgerMenu";
import { ModeToggle } from "../modeToggle";
import { FramerMotionNavbar } from "./components/framerMotionNavbar";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <FramerMotionNavbar />

      <header className="navbar-header">
        <div className="navbar">
          {/* <Image alt={"Stian Larsen - website logo"} /> */}
          <div className="flex items-center justify-between topleftLogo">
            <TopleftLogo />
          </div>

          <div className="flex justify-between items-center gap-4 ul-wrapper">
            <nav>
              <ul className="hidden justify-between align-middle gap-4  md:flex">
                <li>
                  <Link href={"/about-me"}>About me</Link>
                </li>
                <li>
                  <Link href={"/projects"}>Projects</Link>
                </li>
                <li>
                  <Link href={"/cv"}>CV</Link>
                </li>
              </ul>
            </nav>
            <ModeToggle />
            <HamburgerMenu />
          </div>
        </div>
      </header>
    </>
  );
};

const TopleftLogo = () => {
  return (
    <Link href={"/"}>
      <code>{"{ Stian"}</code> <code className="text-primary">{`Larsen`}</code>{" "}
      <code>{"}"}</code>
    </Link>
  );
};
