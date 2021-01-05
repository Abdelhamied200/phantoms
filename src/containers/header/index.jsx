import React from "react";
import Btn from "../../components/btn";
import Nav from "../../components/nav";

import "./header.scoped.scss";

const Header = (props) => {
  return (
    <header>
      <Nav />
      <div className="content">
        <div className="quote">
          <h4>the lifestyle</h4>
          <h1 className="offMarg">that keeps</h1>
          <div className="comp">
            <h1>you</h1>
            <h4 className="colored">Energized</h4>
          </div>
        </div>
        <p className="desc">
          SkyThrow Basketball Club offers you first-class training facilities,
          the best gear, and specialized skill development in all areas of the
          game.
        </p>
        <Btn link to="/">
          read more
        </Btn>
      </div>
    </header>
  );
};

export default Header;
