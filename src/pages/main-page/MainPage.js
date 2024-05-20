import NavBar from "../../components/navbar/NavBar.js"
import Footer from "../../components/footer/Footer.js"
import { Box } from "@mui/material"
import { AboutSection } from "./AboutSection.js"
import { ProjectsSection } from "./ProjectsSection.js"
import { ExperienceSection } from "./ExperienceSection.js"
import { ContactSection } from "./ContactSection.js"
import { useState } from 'react'

const MainPage = _ => {
  const [currentSection, setCurrentSection] = useState(0)

  return (
    <>
      <NavBar currentSection={currentSection} />
      <Box sx={{ height: 120 }} />
      <AboutSection visible={currentSection === 0} setCurrentSection={setCurrentSection} />
      <ExperienceSection visible={currentSection === 1} setCurrentSection={setCurrentSection} />
      <ProjectsSection visible={currentSection === 2} setCurrentSection={setCurrentSection} />
      <ContactSection visible={currentSection === 3} setCurrentSection={setCurrentSection} />
      <Footer />
    </>
  )
}

export default MainPage