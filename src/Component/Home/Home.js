import React from "react";
import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

export default function Home() {
  const divStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };
  return (
    <div style={divStyle}>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
