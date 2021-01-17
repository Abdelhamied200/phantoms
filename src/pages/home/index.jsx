import React from "react";
import About from "../../containers/about";
import Events from "../../containers/events";
import Gallery from "../../containers/gallery";
import Missions from "../../containers/missions";
import NextGame from "../../containers/nextGame";
import Quote from "../../containers/quote";
import Season from "../../containers/season";

const Home = (props) => {
  return (
    <div className="page">
      <div className="home">
        <About />
        <Season />
        <Missions />
        <Gallery />
        <Quote />
        <NextGame />
        <Events />
      </div>
    </div>
  );
};

export default Home;
