import { Box, Typography } from "@mui/material"

export function ExperienceSection() {
  return (
    <Box sx={{
      display: 'flex',
      height: '1000px'
    }}>
      <Box sx={{
        width: '40vw',
        pl: '10vw'
      }}>
        
      </Box>
      <Box sx={{
        bgcolor: 'melon.dark',
        width: '40vw',
        pr: '10vw'
      }}>
        <Typography variant='body1'>Eductation</Typography>
        <Typography variant='body2'>Bachelor of Computer Science<br/>California Polytechnic State University, Pomona</Typography>

        <Typography variant='body1'>Work Experience</Typography>
        <Typography variant='body2'>Associate QA Engineer - Liferay (7/23 - 12/23)</Typography>
        <Typography variant='body2'>QA Tester - Liferay (1/23 - 7/23)</Typography>

        <Typography variant='body1'>Certifications</Typography>
        <Typography>Associate QA Engineer - Liferay (07/23 - 12/23)</Typography>
        <Typography>Associate QA Engineer - Liferay (07/23 - 12/23)</Typography>
      </Box>
    </Box>
  )
}