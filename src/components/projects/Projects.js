import React from "react";
import "./projects.css";

export default function Projects({ img, link, desc, git }) {
  return (
    <div className="project">
      <div className="project-header">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="github-link">
          {/* need to figure out how to link to github here */}
          <a href={git} target="_blank" rel="noreferrer">
            Repository
          </a>
        </div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="project-img" />
      </a>
    </div>
  );
}
