import React from "react";
import "./theme.css";

export default function Theme() {
  return (
    <div className="theme">
      <img src="img/sun.png" alt="" className="theme-icon" />
      <img src="img/moon.png" alt="" className="theme-icon" />
      <div className="theme-button"></div>
    </div>
  );
}
