import React from "react";
import "./intro.css";
import Me from "../../img/me.jpg";

const intro = () => {
  return (
    <>
      <div className="intro-body">
        <div className="intro-left">
          <div className="intro-left-wrap">
            <h2 className="greeting">Hi! My name is</h2>
            <h1 className="intro-name">Ted Glynn</h1>
            <div className="intro-titles">
              <div className="intro-titles-wrap">
                <div className="intro-titles-item">DU Bootcamp Graduate</div>
                <div className="intro-titles-item">Web Developer</div>
                <div className="intro-titles-item">UX/UI Enthusiast</div>
                <div className="intro-titles-item">Bartender</div>
                <div className="intro-titles-item">DIY Guy</div>
                <div className="intro-titles-item">Problem Solver</div>
              </div>
            </div>
            <div className="intro-description">
              I am a recently minted bootcamp graduate, motivated to begin a new
              career in the tech industry after spending years in service. I
              enjoy creating stylish and responsive front ends that feel sleak
              and fun, as well as push me to learn skills.
            </div>
          </div>
        </div>
        <div className="intro-right">right</div>
      </div>
    </>
  );
};

export default intro;
