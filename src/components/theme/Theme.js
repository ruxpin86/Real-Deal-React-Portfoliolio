import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "./theme.css";

export default function Theme() {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="theme">
      <img src="img/sun.png" alt="" className="theme-icon" />
      <img src="img/moon.png" alt="" className="theme-icon" />
      <div
        className="theme-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
}
