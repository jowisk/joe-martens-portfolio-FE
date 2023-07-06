import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
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
} from '../index'

import iconGithub from '../components/assets/images/icon-github.svg'
import iconLinkedin from '../components/assets/images/icon-linkedin.svg'
import iconFrontendMentor from '../components/assets/images/icon-frontend-mentor.svg'
import jowi from '../components/assets/images/joe-2p.png'

const MainPage = () => {

  const navigate = useNavigate

  const [isEditing, setIsEditing] = useState(false)

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
    },
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

  return (
    <>
      <Header
        name="jowisk"
        socials={socials}
        login={true}
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
          isEditing={isEditing}
          setIsEditing={setIsEditing}
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

export default MainPage
