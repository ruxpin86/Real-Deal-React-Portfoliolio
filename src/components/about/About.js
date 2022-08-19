import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card-bg"></div>
        <div className="about-card">
          <img className="about-img" src="img/look-up.png" />
        </div>
      </div>
      <div className="about-right">
        <h2 className="about-title">Nice to meet you!</h2>
        <p className="about-body">
          At the beginning of August I completed the University of Denver's Full
          Stack Coding Boot Camp, and I am now currently seeking my first
          position as a full time web developer. As I continue to build
          projects, I am enjoying getting to focus on the aspects of front end
          design that make websites feel more dynamic and exciting for users by
          learning technologies like GSAP and Spline. In my free time I enjoy
          fly-fishing, golfing, creative writing, and hanging out with my best
          man Odie. Below you will find some examples of the work I have done
          both in my course as well as on my own!
        </p>
      </div>
    </div>
  );
}
