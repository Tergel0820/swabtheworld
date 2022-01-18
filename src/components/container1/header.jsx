import React from "react";
import { Navbar } from "react-bootstrap";
import "../../styles/header.scss";
import "../../styles/global.scss";

const Header = ({ menuPos }) => {
  return (
    <div className="swab-header center">
      <div className="swab-header-item d-flex align-items-center justify-content-between w-100">
        <Navbar.Brand href="/" className="logo">
          <div>SWAB THE</div>
          <div>WORLD</div>
        </Navbar.Brand>
        <div className="swab-header-center d-flex justify-content-between">
          <div className="left-header link">Support our mission</div>
          <div className="right-header link">Become a donor</div>
        </div>
        <div className="right-header link fr">FR</div>
      </div>
      <div style={{ top: menuPos }} className="menu-btn center d-flex flex-column bg-white">
        <div className="menu-icon"></div>
        <div style={{ marginTop: "6px" }} className="menu-icon"></div>
      </div>
    </div>
  );
};

export { Header };