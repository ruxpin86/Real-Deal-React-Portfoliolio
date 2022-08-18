import React from "react";
import "./projectsList.css";
import Projects from "../projects/Projects";

export default function ProjectsList() {
  return (
    <div className="projects-list">
      <div className="project-texts">
        <h1 className="project-title">Check out my work to date!</h1>
        <p className="project-desc">
          Here are some examples of projects that I have completed to date. I am
          currently working on a couple more, so this will be updated regularly
          over the coming weeks as I prepare for interviews with potential
          employers like yourselves. I hope you enjoy!
        </p>
      </div>
      <div className="project-ul">
        <Projects />
        <Projects />
        <Projects />
        <Projects />
      </div>
    </div>
  );
}
