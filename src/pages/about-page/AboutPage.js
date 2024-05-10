import NavBar from "../../components/navbar/NavBar"
import Footer from "../../components/footer/Footer"
import { Box, Typography } from "@mui/material"
import { GeneralSection } from "./GeneralSection.js"
import { SkillsSection } from "./SkillsSection.js"
import { ExperienceSection } from "./ExperienceSection.js"

const AboutPage = _ => {
  return (
    <>
      <NavBar />
      <Box sx={{ height: 120 }}/>
      <GeneralSection />
      <ExperienceSection />
      <SkillsSection />
      <Footer />
    </>
  )
}

export default AboutPage