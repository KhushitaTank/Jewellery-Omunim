import React from "react";
import arrowSvg from "../../assests/SVG/arrow.svg";
import searchSVG from "../../assests/SVG/search.svg";
import css from "./NavbarMain.module.css";

function NavbarMain() {
  return (
    <div className={css.Wrapper}>
      <div className={css.menu}>
        <p>Home</p>
        <p>Stock</p>
        <p>Sell</p>
        <p>Order</p>
        <p>
          More <img src={arrowSvg} />
        </p>
      </div>
      <div className={css.navWrapper}>
        <div className={css.searchWrapper}>
          <input placeholder="SEARCH PRODUCT/CUSTOMER..." type={"text"} />
          <div className={css.img}>
            <img src={searchSVG} alt="search" />
          </div>
        </div>
        <p>EN</p>
        <p>HELP</p>
        <button>LOGO-OUT</button>
      </div>
    </div>
  );
}

export default NavbarMain;
