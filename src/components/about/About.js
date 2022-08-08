import React from "react";
import "./about.css";
import Img from "../../img/look-up.png";

export default function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card-bg"></div>
        <div className="about-card">
          <img className="about-img" src={Img} />
        </div>
      </div>
      <div className="about-right"></div>
    </div>
  );
}
