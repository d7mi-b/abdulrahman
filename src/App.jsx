import { useEffect, useState } from "react"
import { Element } from 'react-scroll'
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"
import Hero from "./pages/Hero"
import Projects from "./pages/Projects"
import Skils from "./pages/Skils"
import NavbarEN from "./components/components en/NavbarEN"
import HeroEN from './pages/pages en/HeroEN'
import AboutEN from './pages/pages en/AboutEN'
import SkilsEN from './pages/pages en/SkilsEN'
import ProjectsEN from './pages/pages en/ProjectsEN'
import ContactUsEN from './pages/pages en/ContactUsEN'
import FooterEN from "./components/components en/FooterEN"
import { useLanguageContext } from "./hooks/useLanguageContext"

function App() {
  const { lang } = useLanguageContext();

  return (
    <div className="App">

      {
        lang === 'AR' ? <Navbar /> : <NavbarEN />
      }

      <Element id='home' name='home'>
        {
          lang === 'AR' ? <Hero /> : <HeroEN />
        }
      </Element>

      <Element id="about" name="about">
        {
          lang === 'AR' ? <About /> : <AboutEN />
        }
      </Element>

      <Element id="skills" name="skills">
        {
          lang === 'AR' ? <Skils /> : <SkilsEN />
        }
      </Element>

      <Element id="projects" name="projects">
        {
          lang === 'AR' ? <Projects /> : <ProjectsEN />
        }
      </Element>
      
      <Element id="ContactMe" name="contactMe">
        {
          lang === 'AR' ? <ContactUs /> : <ContactUsEN />
        }
      </Element>
      
      {
        lang === 'AR' ? <Footer /> : <FooterEN />
      }
    </div>
  )
}

export default App
