import { React } from 'react'
import './App.css'

import NavBar from './components/UI/molecules/NavBar/NavBar'
import Summary from './components/UI/organisms/Summary/Summary'
import ProjectList from './components/UI/organisms/ProjectList/ProjectList'
import Contact from './components/UI/organisms/Contact/Contact'
import Footer from './components/UI/molecules/Footer/Footer'

import pokedexSS from './components/assets/images/pokedex-cap.jpg'
import resultsSummarySS from './components/assets/images/results-summary-cap.jpg'
import iconGithub from './components/assets/images/icon-github.svg'
import iconLinkedin from './components/assets/images/icon-linkedin.svg'
import iconFrontendMentor from './components/assets/images/icon-frontend-mentor.svg'
import jowi from './components/assets/images/joe-2p.png'
import CurvesNav from './components/UI/organisms/design/CurvesNav'
import Curves from './components/UI/organisms/design/Curves'
import CurvesContact from './components/UI/organisms/design/CurvesContact'

function App() {

  // "#4EE1A0" => main color

  const footerCurve = `M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z`
  const contactCurve = "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"

  const socials = [
    {
      icon: iconGithub,
      url: "https://www.github.com/jowisk"
    },
    {
      icon: iconLinkedin,
      url: "https://www.linkedin.com/in/joe-marten5"
    },
    {
      icon: iconFrontendMentor,
      url: "https://www.frontendmentor.io/profile/jowisk"
    }
  ]

  const techStack = [
    {
      name: "React",
      time: "1.5"
    },
    {
      name: "HTML",
      time: "2.5"
    },
    {
      name: "Testing",
      time: "3"
    },
    {
      name: "Node.js",
      time: "1"
    },
    {
      name: "Accessibility",
      time: "4"
    },
    {
      name: "Tailwind",
      time: "1.5"
    },
  ]

  const projects = [
    {
      name: "results summary",
      technologies: ["React", "Tailwind", "HTML"],
      src: resultsSummarySS
    },
    {
      name: "Pokedex",
      technologies: ["React", "Tailwind", "HTML", "Node.JS"],
      src: pokedexSS
    },
  ]

  console.log("projects", projects)
  return (
    <>
      <div className="px-[16px] md:px-[165px] bg-[#151515] w-full h-full text-white relative">


        <NavBar
          name="jowisk"
          socials={socials}
        />

        <CurvesNav />

        <Summary
          socials={socials}
          jowi={jowi}
          techStack={techStack}
        />



        <ProjectList
          projects={projects}
        />
        <CurvesContact
          color="#242424"
          curve={contactCurve}
        />
      </div>


      <div className="px-[16px] bg-[#242424] md:px-[165px] w-full h-full text-white relative">


        <Contact />

        <Curves
          color="#4EE1A0"
          curve={footerCurve}
        />

        <Footer
          name="jowisk"
          socials={socials}
        />

      </div>
    </>

  )
}

export default App
