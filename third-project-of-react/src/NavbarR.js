import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./NavbarR.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Hakkimizda from "./Hakkimizda";

const NavbarR = () => {
  return (
    <React.Fragment>
      <nav>
        <div class="nav-wrapper">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" className="LogoPng"/>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <Link to="/">Anasayfa</Link>
            </li>
            <li>
              <Link to="/hakkimizda">Hakkımızda</Link>
            </li>
            <li>
              <Link to="/contact">İletişim</Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavbarR;
