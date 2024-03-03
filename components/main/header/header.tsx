import { HeaderH1Title } from "./components/h1";
import { ScrollDownIcon } from "./components/scrollDownIcon/scrollDownIcon";

import "./header.css";

export const Header = () => {
  return (
    <>
      <section className="main-header">
        <div className="main-header__wrapper">
          <HeaderH1Title className="main-header__wrapper__h1" />
        </div>
        <ScrollDownIcon />
      </section>
    </>
  );
};
