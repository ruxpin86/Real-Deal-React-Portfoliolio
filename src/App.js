import Intro from "./components/intro/Intro.js";
import About from "./components/about/About";
import ProjectsList from "./components/projectsList/ProjectsList.js";
import Contact from "./components/contact/Contact.js";
import Theme from "./components/toggle/Theme.js";
import "./styles/globals.css";

const App = () => {
  return (
    <div>
      <Theme />
      <Intro />
      <About />
      <ProjectsList />
      <Contact />
    </div>
  );
};

export default App;
