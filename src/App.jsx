import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Stars from "./components/Stars";
const App = () => {
  return (
    <>
      <Stars />
      <div className="pt-[6.25rem] overflow-hidden" id="home"></div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
