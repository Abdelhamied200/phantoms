import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/pics/logo.png";
import MenuIco from "../MenuIco";

import "./nav.scoped.scss";

const Nav = (props) => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="phantoms" />
      </div>
      <div className="menu">
        <div className="ico">
          <MenuIco></MenuIco>
        </div>
      </div>
      <div className="list">
        <ul>
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
