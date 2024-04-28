import React from "react";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.box}>
        <div className={css.boxWrapper} style={{ border: "none" }}>
          <h1>ABOUT US</h1>
          <p>
            To Manage Your Small To Large Enterprises Business that brings you
            modern, everyday designs. Perfectly designed for small as well as
            large scale business having multiple store Software.
          </p>
        </div>
        <div className={css.boxWrapper}>
          <h1>Contact Us</h1>
          <p>Hadapsar, Pune - 411028, MH, India</p>
          <p>   +91 8551958585, +91 8087458585</p>
          <p> info@omunim.com support@omunim.com</p>
        </div>
        <div className={css.boxWrapper}>
          <h1>Product </h1>
          <ul>
            <li>Jewellery Software</li>
            <li>Money Lending Software</li>
            <li>Nidhi Software</li>
            <li>Retail Software</li>
          </ul>
        </div>
        <div className={css.boxWrapper}>
          <h1>Links </h1>
          <ul>
            <li>Home</li>
            <li>Login</li>
            <li>Sign Up</li>
            <li> Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <div className={css.copywrite}>
        <p>2024 © All Rights Reserved - Online Munim Software</p>
      </div>
    </div>
  );
};

export default Footer;
