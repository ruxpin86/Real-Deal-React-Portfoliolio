import React from "react";
import "./intro.css";
import Me from "../../img/headshot.png";
import { CgScrollV } from "react-icons/cg";

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
                <div className="intro-titles-item">UX/UI Guy</div>
                <div className="intro-titles-item">HTML/CSS</div>
                <div className="intro-titles-item">React</div>
                <div className="intro-titles-item">JavaScript</div>
                <div className="intro-titles-item">Node.js</div>
                <div className="intro-titles-item">SQL</div>
                <div className="intro-titles-item">Bartender</div>
                <div className="intro-titles-item">DIY Guy</div>
                <div className="intro-titles-item">Problem Solver</div>
              </div>
            </div>
            <p className="intro-description">
              I am a recently minted bootcamp graduate, motivated to begin a new
              career in the tech industry after spending years in service. I
              enjoy creating stylish and responsive front ends that feel sleak
              and fun, as well as push me to learn skills.
            </p>
          </div>
          <div className="intro-scroll">
            <CgScrollV />
          </div>
        </div>
        <div className="intro-right">
          <div className="intro-shape-wrap">
            <div className="intro-shape"></div>
          </div>
          <img src={Me} alt="photo of Ted" className="me-image"></img>
        </div>
      </div>
    </>
  );
};

export default intro;
