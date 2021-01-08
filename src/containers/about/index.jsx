import React from "react";
import aboutPic from "../../assets/pics/home02.png";
import Btn from "../../components/btn";

import "./about.scoped.scss";

const About = (props) => {
  return (
    <section className="about">
      <div className="title">
        <h1>About</h1>
        <div className="pic">
          <img src={aboutPic} alt="" />
        </div>
      </div>
      <div className="content">
        <div className="subTitle">About Us</div>
        <div className="secTitle">
          <h2>#1 basketball club</h2>
        </div>
        <div className="desc">
          <p className="bold">
            Founded in 2000, SkyThrow has been the leading destination for
            aspiring basketball talents among teens and adults for over 20
            years.
          </p>
          <p>
            Our basketball club strives to assist our young athletes develop to
            their full potential as people and athletes. We believe that
            athletic participation helps students in the formation of values and
            their development as mature individuals. It also helps in dealing
            with victory and success but also with losing and failure.
          </p>
        </div>
        <Btn className="dark" link to="#">
          Read More
        </Btn>
      </div>
    </section>
  );
};

export default About;
