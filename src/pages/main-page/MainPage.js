import NavBar from "../../components/navbar/NavBar.js"
import Footer from "../../components/footer/Footer.js"
import { Box, Typography } from "@mui/material"
import { GeneralSection } from "./GeneralSection.js"
import { SkillsSection } from "./SkillsSection.js"
import { ExperienceSection } from "./ExperienceSection.js"

const MainPage = _ => {
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

export default MainPage