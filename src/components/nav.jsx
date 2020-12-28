import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <Link to="/">home</Link>
      <Link to="/dum">dummy</Link>
    </nav>
  );
};

export default Nav;
