import { React } from 'react'
import './App.css'
import {
  Header,
  Summary,
  StackList,
  ProjectList,
  Contact,
  Footer,
  CurvesHeader,
  CurvesStack,
  CurvesContact,
  CurvesFooter
} from './index'

import pokedexSS from './components/assets/images/pokedex-cap.jpg'
import resultsSummarySS from './components/assets/images/results-summary-cap.jpg'
import iconGithub from './components/assets/images/icon-github.svg'
import iconLinkedin from './components/assets/images/icon-linkedin.svg'
import iconFrontendMentor from './components/assets/images/icon-frontend-mentor.svg'
import jowi from './components/assets/images/joe-2p.png'

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
      time: "2"
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
      src: resultsSummarySS,
      deploy: "https://results-summary-component-8uxr.onrender.com/",
      git: "https://github.com/jowisk/results-summary-component",
    },
    {
      name: "Pokedex",
      technologies: ["React", "Tailwind", "HTML", "Node.JS"],
      src: pokedexSS,
      deploy: "",
      git: "https://github.com/jowisk/pokedex-frontend-grupo1",
    },
  ]

  return (
    <>
      <Header
        name="jowisk"
        socials={socials}
      />

      <CurvesHeader />

      <main>

        <Summary
          socials={socials}
          jowi={jowi}
          techStack={techStack}
        />

        <CurvesStack />

        <StackList
          techStack={techStack}
        />



        <ProjectList
          projects={projects}
        />
        <CurvesContact />

        <Contact />
      </main>

      <CurvesFooter />

      <Footer
        name="jowisk"
        socials={socials}
      />
    </>

  )
}

export default App
