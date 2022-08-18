import Intro from "./components/intro/Intro.js";
import About from "./components/about/About";
import "./styles/globals.css";
import ProjectsList from "./components/projectsList/ProjectsList.js";

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProjectsList />
    </div>
  );
};

export default App;
