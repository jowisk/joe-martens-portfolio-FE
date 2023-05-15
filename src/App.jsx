import { React } from 'react'
import './App.css'

import Summary from './components/UI/organisms/Summary/Summary'
import ProjectList from './components/UI/organisms/ProjectList/ProjectList'
import Contact from './components/UI/organisms/Contact/Contact'
import Footer from './components/UI/molecules/Footer/Footer'

import pokedexSS from './components/assets/images/pokedex-cap.jpg'
import resultsSummarySS from './components/assets/images/results-summary-cap.jpg'
import iconGithub from './components/assets/images/icon-github.svg'
import iconLinkedin from './components/assets/images/icon-linkedin.svg'
import iconFrontendMentor from './components/assets/images/icon-frontend-mentor.svg'
import jowi from './components/assets/images/joe-p.jpeg'
import jowiMobile from './components/assets/images/joe-2p.png'

function App() {


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

  return (
    <>
      <div className="px-[16px] md:px-[165px] bg-[#151515] w-full h-full text-white">
        <Summary
          socials={socials}
          jowi={jowi}
          jowiMobile={jowiMobile}
          techStack={techStack}
        />

        <ProjectList
          projects={projects}
        />
      </div>

      <div className="px-[16px] bg-[#242424] md:px-[165px] w-full h-full text-white">
        <Contact />

        <Footer
          name="jowisk"
          socials={socials}
        />
      </div>
    </>

  )
}

export default App
