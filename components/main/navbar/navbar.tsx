import Link from "next/link";
import { HamburgerMenu } from "../hamburgerMenu/hamburgerMenu";
import { ModeToggle } from "../modeToggle";
import { FramerMotionNavbar } from "./components/framerMotionNavbar";
import { NavItems } from "./components/nav";
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
            <NavItems />
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
    <Link href={"/"} prefetch={true} style={{ whiteSpace: "nowrap" }}>
      <code>{"{ Stian"}</code> <code className="text-primary">{`Larsen`}</code>{" "}
      <code>{"}"}</code>
    </Link>
  );
};
