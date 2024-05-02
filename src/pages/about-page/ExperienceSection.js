import { Box, styled, Typography } from "@mui/material"

const education = [
  { title: 'Bachelor of Computer Science', location: 'California Polytechnic State University, Pomona' }
]

const work = [
  { title: 'Associate QA Engineer', location: 'Liferay Inc.' },
  { title: 'QA Tester', location: 'Liferay Inc.' },  
]

const certifications = [
  { title: 'Response Web Design', location: 'freeCodeCamp' },
  { title: 'Back End Development and API\'s', location: 'freeCodeCamp' }
]

const CategoryTitle = styled(Typography)(({theme}) => ({
  paddingTop: 50,
  marginBottom: 10,
  fontWeight: 600,
  letterSpacing: 4
}))

const ExperienceItem = (exp) => {
  return (
    <Box 
      component={Typography}
      variant='body2'
      sx={{
        py: 1,
        '&:hover': {
          fontWeight: 500
        }
    }}>
      {exp.title}<br />{exp.location}
    </Box>
  )
}

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
      <Box
        display='flex'
        alignItems='center'
        textAlign='end'
        sx={{
          bgcolor: 'melon.dark',
          width: '40vw',
          pr: '10vw'
      }}>
        <Box sx={{ width: '100%' }}>
          <CategoryTitle>Eductation</CategoryTitle>
          <Box>
            {
              education.map((edu) => (
                <ExperienceItem {...edu} />
              ))
            }
          </Box>
          
          <CategoryTitle>Work Experience</CategoryTitle>
          <Box>
            {
              work.map((work) => (
                <ExperienceItem {...work} />
              ))
            }
          </Box>

          <CategoryTitle>Certifications</CategoryTitle>
          <Box>
            {
              certifications.map((cert) => (
                <ExperienceItem {...cert} />
              ))
            }
          </Box>
        </Box>
      </Box>
    </Box>
  )
}