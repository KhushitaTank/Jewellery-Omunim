import React from "react";
import LogoImg from "../../assests/IMG/image.png";
import css from "./Logo.module.css";

function Logo() {
  return (
    <div className={css.wrapper}>
      <img src={LogoImg} alt="Logo" />
    </div>
  );
}

export default Logo;
