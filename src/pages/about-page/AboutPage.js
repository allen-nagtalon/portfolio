import NavBar from "../../components/navbar/NavBar"
import Footer from "../../components/footer/Footer"
import { Box, Typography } from "@mui/material"
import { SectionOne, SectionTwo } from './Sections.js'

const AboutPage = _ => {
  return (
    <>
      <NavBar />
      <Box sx={{ height: 120 }}/>
      <SectionOne />
      <SectionTwo />
      <Box sx={{ height: 200 }}/>
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