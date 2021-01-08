import React from "react";
import Btn from "../../components/btn";

import "./season.scoped.scss";

const Season = (props) => {
  return (
    <section className="season">
      <div className="content">
        <div className="row">
          <p className="small">season</p>
          <h1>2020</h1>
          <h3 className="bold">
            we
            <br />
            create
          </h3>
        </div>
        <h1 className="colored">New stars</h1>
        <Btn link to="#">
          Join Now
        </Btn>
      </div>
    </section>
  );
};

export default Season;
