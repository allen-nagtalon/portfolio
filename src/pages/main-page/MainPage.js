import NavBar from "../../components/navbar/NavBar.js"
import Footer from "../../components/footer/Footer.js"
import { Box, Typography } from "@mui/material"
import { AboutSection } from "./AboutSection.js"
import { ProjectsSection } from "./ProjectsSection.js"
import { ExperienceSection } from "./ExperienceSection.js"

const MainPage = _ => {
  return (
    <>
      <NavBar />
      <Box sx={{ height: 120 }}/>
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <Footer />
    </>
  )
}

export default MainPage