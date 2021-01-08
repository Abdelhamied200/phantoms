import React from "react";
import About from "../../containers/about";
import Missions from "../../containers/missions";
import Season from "../../containers/season";

const Home = (props) => {
  return (
    <div className="page">
      <div className="home">
        <About />
        <Season />
        <Missions />
      </div>
    </div>
  );
};

export default Home;
