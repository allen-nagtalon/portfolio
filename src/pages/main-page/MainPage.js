import NavBar from "../../components/navbar/NavBar.js"
import Footer from "../../components/footer/Footer.js"
import { Box } from "@mui/material"
import { AboutSection } from "./AboutSection.js"
import { ProjectsSection } from "./ProjectsSection.js"
import { ExperienceSection } from "./ExperienceSection.js"
import { ContactSection } from "./ContactSection.js"
import { useState } from 'react'

const MainPage = _ => {
  const [aboutVisible, setAboutVisible] = useState(false)
  const [expVisible, setExpVisible] = useState(false)
  const [projectsVisible, setProjectsVisible] = useState(false)
  const [contactVisible, setContactVisible] = useState(false)

  return (
    <>
      <NavBar 
        aboutVisible={aboutVisible}
        expVisible={expVisible}
        projectsVisible={projectsVisible}
        contactVisible={contactVisible}
      />
      <Box sx={{ height: 120 }} />
      <AboutSection visible={aboutVisible} setVisible={setAboutVisible} />
      <ExperienceSection visible={expVisible} setVisible={setExpVisible} />
      <ProjectsSection visible={projectsVisible} setVisible={setProjectsVisible} />
      <ContactSection visible={contactVisible} setVisible={setContactVisible} />
      <Footer />
    </>
  )
}

export default MainPage