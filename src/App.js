import Intro from "./components/intro/Intro.js";
import About from "./components/about/About";
import ProjectsList from "./components/projectsList/ProjectsList.js";
import Contact from "./components/contact/Contact.js";
import Theme from "./components/theme/Theme.js";
import "./styles/globals.css";
import { useContext } from "react";
import { ThemeContext } from "./context.js";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#1d1e2c" : "rgb(183,183,183)",
        color: darkMode && "#e8e9eb",
      }}
    >
      <Theme />
      <Intro />
      <About />
      <ProjectsList />
      <Contact />
    </div>
  );
};

export default App;
