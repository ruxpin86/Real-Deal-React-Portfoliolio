import React from "react";
import "./intro.css";
import { CgScrollV } from "react-icons/cg";

const intro = () => {
  return (
    <>
      <div className="intro-body">
        <div className="intro-left">
          <div className="intro-left-wrap">
            <h2 className="greeting">Hi! I'm...</h2>
            <h1 className="intro-name">Ted</h1>
            <div className="intro-titles">
              <div className="intro-titles-wrap">
                <div className="intro-titles-item">Web Developer</div>
                <div className="intro-titles-item">HTML/CSS</div>
                <div className="intro-titles-item">JavaScript</div>
                <div className="intro-titles-item">React</div>
                <div className="intro-titles-item">Node.js</div>
                <div className="intro-titles-item">SQL</div>
                <div className="intro-titles-item">MERN/SERN</div>
                <div className="intro-titles-item">UX/UI Guy</div>
                <div className="intro-titles-item">Bartender</div>
                <div className="intro-titles-item">DIY Guy</div>
                <div className="intro-titles-item">Problem Solver</div>
              </div>
            </div>
            <p className="intro-description">
              Full stack web developer with extensive experience in the service
              industry at all levels, providing exceptional soft-skills and a
              customer focused approach to developing responsive web
              applications.
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
          <img src="img/headshot.webp" alt="Ted" className="me-image"></img>
        </div>
      </div>
    </>
  );
};

export default intro;
