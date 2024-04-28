import React from "react";
import Logo from "../Logo/Logo";
import NavbarSection from "../NavbarSection1/NavbarSection";
import NavbarMain from "../NavbarMain/NavbarMain";
import css from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={css.wrapper}>
      <Logo />
      <div className={css.navItem}>
        <NavbarSection />
        <NavbarMain />
      </div>
    </div>
  );
}

export default Navbar;
