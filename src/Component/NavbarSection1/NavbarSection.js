import React, { useState, useRef, useEffect } from "react";
import css from "./NavbarSection.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";

function NavbarSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={css.mainWrapper}>
      <div className={css.rateWrapper}>
        <p className={css.gold}>Gold 58.33 | 40831</p>
        <p className={css.maxGold}>MAX Gold | 71486</p>
        <p className={css.maxSilver}>MAX Silver | 80662</p>
      </div>
      <div className={css.wrapper}>
        <button onClick={() => console.log("form")}>ONLINE MUN</button>
        <Dropdown
          show={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className={css.dropdownWrapper}>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className={css.dropdown}>
            All Firms
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">SKJ</Dropdown.Item>
            <Dropdown.Item href="#/action-2">VKJ</Dropdown.Item>
            <Dropdown.Item href="#/action-3">AJ</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default NavbarSection;

// <Dropdown.Divider />
// <Dropdown.Item>
//   Nested Dropdown
//   <Dropdown.Menu>
//     <Dropdown.Item>Action</Dropdown.Item>
//     <Dropdown.Item>Another action</Dropdown.Item>
//     <Dropdown.Item>Something else</Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown.Item>
