import React from "react";

import "./social.scoped.scss";

const Social = ({ to, type }) => {
  switch (type) {
    case "fb":
      return fb;
    case "gp":
      return gp;
    case "pt":
      return pt;
    case "tw":
      return tw;
    case "yt":
      return yt;

    default:
      return;
  }
};
const fb = <a className="social-link icon fab fa-facebook-f" href={"#"} />;
const gp = <a className="social-link icon fab fa-google-plus-g" href={"#"} />;
const pt = <a className="social-link icon fab fa-pinterest-p" href={"#"} />;
const tw = <a className="social-link icon fab fa-twitter" href={"#"} />;
const yt = <a className="social-link icon fab fa-youtube" href={"#"} />;

export default Social;
