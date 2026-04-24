import Navbar from "./components/Navbar";
import AboutMe from "./sections/Aboutme";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <AboutMe />
      <Experience />
    </div>
  );
}

export default App;
