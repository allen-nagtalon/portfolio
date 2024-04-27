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
      <SkillsSection />
      <ExperienceSection />
      <Footer />
      <Typography
        variant='sideText'
        sx={{
          rotate: '270deg',
          position: 'fixed',
          left: '0',
          top: '30vh'
      }}>
        Who Am I?
      </Typography>
    </>
  )
}

export default AboutPage