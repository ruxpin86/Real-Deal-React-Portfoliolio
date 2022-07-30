import React from "react";
import "./intro.css";

const intro = () => {
  return (
    <>
      <div className="intro-body">
        <div className="intro-left">
          <div className="intro-left-wrap">
            <h2 className="greeting">Hi, my name is</h2>
            <h1 className="intro-name">Ted Glynn</h1>
            <div className="intro-titles">
              <div className="intro-titles-wrap">
                <div className="intro-titles-item">DU Bootcamp Grad</div>
                <div className="intro-titles-item">Web Developer</div>
                <div className="intro-titles-item">UX/UI Enthusiast</div>
                <div className="intro-titles-item">Bartender</div>
                <div className="intro-titles-item">Good Human</div>
              </div>
            </div>
          </div>
        </div>
        <div className="intro-right">right</div>
      </div>
    </>
  );
};

export default intro;
