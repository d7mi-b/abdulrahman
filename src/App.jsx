import { Element } from 'react-scroll'
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"
import Hero from "./pages/Hero"
import Projects from "./pages/Projects"
import Skils from "./pages/Skils"

function App() {

  return (
    <div className="App">

      <Navbar />

      <Element id='home' name='home'>
        <Hero />
      </Element>

      <Element id="about" name="about">
        <About />
      </Element>

      <Element id="skills" name="skills">
        <Skils />
      </Element>

      <Element id="projects" name="projects">
        <Projects />
      </Element>
      
      <Element id="ContactMe" name="contactMe">
        <ContactUs />
      </Element>
      
      <Footer />
    </div>
  )
}

export default App
