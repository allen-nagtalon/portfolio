import { Box, Slide, styled, Typography } from "@mui/material"
import React, { useState } from 'react';

const experience = {
  education: [
    { key: 0, title: 'Bachelor of Computer Science', location: 'California Polytechnic State University, Pomona' }
  ],
  work: [
    { key: 1, title: 'Associate QA Engineer', location: 'Liferay Inc.' },
    { key: 2, title: 'QA Tester', location: 'Liferay Inc.' },  
  ],
  certifications: [
    { key: 3, title: 'Response Web Design', location: 'freeCodeCamp' },
    { key: 4, title: 'Back End Development and API\'s', location: 'freeCodeCamp' }
  ]
}

const CategoryTitle = styled(Typography)(({theme}) => ({
  paddingTop: 50,
  marginBottom: 10,
  fontWeight: 600,
  letterSpacing: 4
}))

const CPPSnippet = (props) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: '5vw',
        top: '150px'
    }}>
      <Slide direction='right' in={props.active} timeout={1000}>
        <Box 
          component='img'
          src='/imgs/library.jpg'
          sx={{
            width: '40vw'
        }}/>
      </Slide>
      <Slide direction='right' in={props.active} timeout={1300} appear={true}>
        <Box sx={{ pl: '5vw', '& *': { width: '80%' }}}>
          <Typography variant='h2' sx={{ mt: 5 }}>Bachelor’s Degree, Computer Science</Typography>
          <Typography variant='body2' sx={{ pb: 3 }}>
            California Polytechnic State University, Pomona<br />
            GPA: 3.65
          </Typography>
          <Typography variant='tiny'>
            Relevant coursework includes...<br />
            Software Engineering<br />
            Database Systems<br />
            Computer Architecture<br />
            Graphical User Interfaces<br />
            Game Development<br />
            ... and so on.
          </Typography>
        </Box>
      </Slide>
    </Box>
  )
}

const LRTesterSnippet = (props) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: '5vw',
        top: '150px'
    }}>
      <Slide direction='right' in={props.active} timeout={1000}>
        <Box 
          component='img'
          src='/imgs/liferay.jpg'
          sx={{
            width: '40vw'
        }}/>
      </Slide>
      <Slide direction='right' in={props.active} timeout={1300} appear={true}>
        <Box sx={{ pl: '5vw', '& *': { width: '80%' }}}>        
          <Typography variant='h2' sx={{ mt: 5 }}>Associate QA Engineer</Typography>
          <Typography variant='body2' sx={{ pb: 3 }}>
            Liferay, Inc.  |  Diamond Bar, CA
          </Typography>
          <Typography variant='tiny'>
            This is the liferay segment.
          </Typography>
        </Box>
      </Slide>
    </Box>
  )
}

export function ExperienceSection() {
  const [activeSection, setActiveSection] = useState(0)

  return (
    <Box sx={{
      display: 'flex',
      height: '1000px'
    }}>
      <Box sx={{
        width: '50vw',
        position: 'relative'
      }}>
        <LRTesterSnippet active={activeSection === 1}/>
        <CPPSnippet active={activeSection === 0} />
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
          {
            experience.education.map((edu) => (
              <Box 
                component={Typography}
                variant='body2'
                onMouseOver={() => setActiveSection(edu.key)}
                sx={{
                  py: 1,
                  '&:hover': {
                    fontWeight: 500,
                    fontSize: 16
                  }
              }}>
                {edu.title}<br />{edu.location}
              </Box>
            ))
          }
          
          <CategoryTitle>Work Experience</CategoryTitle>
          {
            experience.work.map((work) => (
              <Box 
                component={Typography}
                variant='body2'
                onMouseOver={() => setActiveSection(work.key)}
                sx={{
                  py: 1,
                  '&:hover': {
                    fontWeight: 500,
                    fontSize: 16
                  }
              }}>
                {work.title}<br />{work.location}
              </Box>
            ))
          }

          <CategoryTitle>Certifications</CategoryTitle>
          {
            experience.certifications.map((cert) => (
              <Box 
                component={Typography}
                variant='body2'
                onMouseOver={() => setActiveSection(cert.key)}
                sx={{
                  py: 1,
                  '&:hover': {
                    fontWeight: 500,
                    fontSize: 16
                  }
              }}>
                {cert.title}<br />{cert.location}
              </Box>
            ))
          }
        </Box>
      </Box>
    </Box>
  )
}