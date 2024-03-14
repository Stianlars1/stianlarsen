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
          <div className="flex items-center justify-between topleftLogo">
            <TopleftLogo />
          </div>

          <div className="ul-wrapper navbar-items">
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
    <a href={"/"} style={{ whiteSpace: "nowrap" }}>
      <code>{"{ Stian"}</code> <code className="text-primary">{`Larsen`}</code>{" "}
      <code>{"}"}</code>
    </a>
  );
};
