import { Box, Slide, styled, Typography } from "@mui/material"
import React, { useState } from 'react'

const experience = {
  work: [
    {
      key: 1,
      title: 'Associate QA Engineer - Search and Publications Team',
      location: 'Liferay Inc.',
      snippets: [
        { variant: 'h2', text: ['Associate QA Engineer, Search and Publications'] },
        { variant: 'body2', text: ['Liferay Inc. | Diamond Bar, CA'] },
      ],
      image: 'liferay_logo.png',
      snippet: <>
        <Typography variant='h2' sx={{ pb: 1 }}>
          Associate QA Engineer
        </Typography>
        <Typography variant='body2' fontStyle='italic'>
          Search and Publications Component Team
        </Typography>
        <Typography variant='body2'>
          Liferay Inc. • Diamond Bar, CA • 9/2023 - 12/2023
        </Typography>
        <Box sx={{ py: 2 }}>
          <Typography variant='tiny'>
            Collaborated with developers of two component teams--"Search" and "Publications"--for the Liferay Portal product.
            Contributed to the improvement of testing processes of each component, as well as enhancing overall efficiency and product quality.
          </Typography>
        </Box>
        <Box sx={{ pb: 2 }}>
          <Typography variant='tiny'>
            Responsible for the daily analysis of the components' 14 suites of tests across various application servers, databases, and product versions, with detailed bug reports and analysis communicated to the Dev and QA teams for appropriate refactoring.
            Additionally, worked with the developer teams via Pull Request Analysis, Quarterly Sprint Planning, and creation/refactoring of Selenium functional tests.
          </Typography>
        </Box>
        <Box>
          <Typography variant='tiny' fontStyle='italic'>
            Java • Selenium • ElasticSearch • MySQL • PostgreSQL • Tomcat • RCA • Gradle • JSON • Agile • Sprint • Git • Jira • VSCode
          </Typography>
        </Box>
      </>
    },
    {
      key: 2,
      title: 'Associate QA Engineer - QA Flex',
      location: 'Liferay Inc.',
      snippets: [
        { variant: 'h2', text: ['Associate QA Engineer, QA Flex'] },
        { variant: 'body2', text: ['Liferay Inc. | Diamond Bar, CA'] },
      ],
      image: 'liferay.jpg',
      snippet: <>
        <Typography variant='h2' sx={{ pb: 1 }}>
          Associate QA Engineer
        </Typography>
        <Typography variant='body2' fontStyle='italic'>
          QA Flex Team
        </Typography>
        <Typography variant='body2'>
          Liferay Inc. • Diamond Bar, CA • 7/2023 - 9/2023
        </Typography>
        <Box sx={{ py: 2 }}>
          <Typography variant='tiny'>
            Upkept analysis of the overall test coverage of Liferay Portal, alongside members of QA Flex across the globe.
            Assisted in creating and updating detailed bug reports with steps to reproduce, screenshots, logs, root cause analysis, and severity levels.
            Maintained concise communication with 20+ component developer and QA teams to discuss bug/test fixes for the health of the product.
          </Typography>
        </Box>
        <Box sx={{ pb: 2 }}>
          <Typography variant='tiny'>
            Accomplishments outside of general responsibilities include developing/refactoring dozens of functions with the Core Infrastructure team for the in-house Selenium WebDriver framework, as well as
            creating ANT, Python, and Bash scripts to optimize turnaround on QA processes used throughout the company.
          </Typography>
        </Box>
        <Box>
          <Typography variant='tiny' fontStyle='italic'>
            Java • Python • Selenium • MySQL • Docker • Tomcat • ANT • RCA • Gradle • REST API • XPath • Bash • Git • Jira • VSCode
          </Typography>
        </Box>
      </>
    },
    {
      key: 3,
      title: 'QA Tester - QA Flex',
      location: 'Liferay Inc.',
      snippets: [
        { variant: 'h2', text: ['QA Tester, QA Flex'] },
        { variant: 'body2', text: ['Liferay Inc. | Diamond Bar, CA'] },
      ],
      image: 'liferay_office.jpg',
      snippet: <>
        <Typography variant='h2' sx={{ pb: 1 }}>
          QA Tester
        </Typography>
        <Typography variant='body2' fontStyle='italic'>
          QA Flex Team
        </Typography>
        <Typography variant='body2'>
          Liferay Inc. • Diamond Bar, CA • 1/2023 - 7/2023
        </Typography>
        <Box sx={{ py: 2 }}>
          <Typography variant='tiny'>
            Conducted manual testing to identify bugs in the Liferay Portal product, as well as verify fixes applied against reported issues to ensure resolution accuracy.           
          </Typography>
        </Box>
        <Box sx={{ pb: 2 }}>
          <Typography variant='tiny'>
            Designed automated functional tests using an in-house Selenium WebDriver framework.
            Additionally, refactored outdated test suites to match new product behavior, follow established coding conventions, and improve runtime efficiency by up to 200%.
          </Typography>
        </Box>
        <Box>
          <Typography variant='tiny' fontStyle='italic'>
            Java • Selenium • MySQL • Docker • Tomcat • XPath • Git • Jira • VSCode
          </Typography>
        </Box>
      </>
    },
  ],
  education: [
    {
      key: 0,
      title: 'Bachelor of Computer Science',
      location: 'California Polytechnic State University, Pomona',
      image: 'library.jpg',
      snippet: <>
        <Typography variant='h2' sx={{ pb: 1 }}>
          Bachelor's Degree, Computer Science
        </Typography>
        <Typography variant='body2'>
          California Polytechnic State University, Pomona • 9/2014 - 6/2018<br/>
          GPA: 3.65
        </Typography>
        <Box sx={{ py: 2 }}>
          <Typography variant='tiny'>
            Graduated with expertise in software development, algorithms, and data structures. 
            Built a solid foundation in computer science principles and practical skills applicable to various technology domains.
          </Typography>
        </Box>
        <Box sx={{ pb: 2 }}>
          <Typography variant='tiny'>
            Completed projects across the curriculum with experience in technologies such as Java Spring, MySQL, Android Studio, Google API's, and so on.
            4 years worth of experience in Java, with courses covering development in Python and C++ as well.
          </Typography>
        </Box>
        <Box>
          <Typography variant='tiny'>
            Notable coursework includes:<br/>
            ‣ Software Engineering<br/>
            ‣ Database Systems<br/>
            ‣ Graphical User Interfaces<br/>
            ‣ Computer Architecture<br/>
            ‣ Design & Analysis of Algorithms<br/>
          </Typography>
        </Box>
      </>
    },
  ],
  certifications: [
    {
      key: 4,
      title: 'Responsive Web Design',
      location: 'freeCodeCamp',
      snippets: [
        { variant: 'h2', text: ['Responsive Web Design'] },
        { variant: 'body2', text: ['freeCodeCamp'] },
      ],
      image: 'freecodecamp.png',
      snippet: <>
        <Typography variant='h2' sx={{ pb: 1 }}>
          Response Web Design
        </Typography>
        <Typography variant='body2'>
          freeCodeCamp.org • 4/2024
        </Typography>
        <Box sx={{ py: 2 }}>
          <Typography variant='tiny'>
            Built projects following prompts that demonstrate proficiency in the fundamentals of HTML and CSS, as well as advanced techniques and practices avaialble in HTML5 and CSS3.
            Displayed a strong understanding for responsive design and accessibility principles in web application development.
          </Typography>
        </Box>
        <Box sx={{ pb: 2 }}>
          <Typography variant='tiny'>
            HTML5 • CSS • Flexbox • SASS
          </Typography>
        </Box>
        <Typography component='a' href='https://www.freecodecamp.org/certification/allen-nagtalon/responsive-web-design' target='_blank' variant='tiny'>
          Link to Certification
        </Typography>
      </>
    },
    { 
      key: 5,
      title: 'Back End Development and API\'s',
      location: 'freeCodeCamp',
      snippets: [
        { variant: 'h2', text: ['Back End Development and API\'s'] },
        { variant: 'body2', text: ['freeCodeCamp'] },
      ],
      image: 'backend.jpg',
      snippet: <>
        <Typography variant='h2' sx={{ pb: 1 }}>
          Back End Development and API's
        </Typography>
        <Typography variant='body2'>
          freeCodeCamp.org • 4/2024
        </Typography>
        <Box sx={{ py: 2 }}>
          <Typography variant='tiny'>
            Demonstrated experience in creating dynamic web applications and services by completing microservice projects prompted in the certification test.
            Strengthened knowledge of data serialization, database design, and security practices for back-end development of web applications.
          </Typography>
        </Box>
        <Box sx={{ pb: 2 }}>
          <Typography variant='tiny' fontStyle='italic'>
            Node.js • Express.js • MongoDB • Mongoose • REST API • JSON
          </Typography>
        </Box>
        <Typography component='a' href='https://www.freecodecamp.org/certification/allen-nagtalon/back-end-development-and-apis' target='_blank' variant='tiny'>
          Link to Certification
        </Typography>
      </>
    }
  ]
}

const CategoryTitle = styled(Typography)(({theme}) => ({
  paddingTop: 50,
  marginBottom: 10,
  fontWeight: 600,
  letterSpacing: 4
}))

const ExperienceSnippet = (props) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: '5vw',
        top: '150px'
    }}>
      <Slide direction='right' in={props.active} timeout={1000} unmountOnExit>
        <Box 
          component='img'
          src={ '/imgs/' + props.exp.image }
          sx={{
            width: '40vw',
            height: '200px',
            objectFit: 'cover',
            pb: 3
        }}/>
      </Slide>
      <Slide direction='right' in={props.active} timeout={1300} appear={true} unmountOnExit>
        <Box sx={{ pl: '3vw', '& *': { width: '80%' }}}>        
          { props.exp.snippet ? props.exp.snippet : '' }
        </Box>
      </Slide>
    </Box>
  )
}

export function ExperienceSection() {
  const [activeSection, setActiveSection] = useState(1)

  return (
    <Box sx={{
      display: 'flex',
      height: '1000px'
    }}>
      <Box sx={{
        width: '50vw',
        position: 'relative'
      }}>
        { experience.education.map((edu) => (<ExperienceSnippet exp={edu} active={activeSection === edu.key} />)) }
        { experience.work.map((work) => (<ExperienceSnippet exp={work} active={activeSection === work.key} />)) }
        { experience.certifications.map((cert) => (<ExperienceSnippet exp={cert} active={activeSection === cert.key} />)) }
      </Box>
      <Box
        display='flex'
        alignItems='center'
        textAlign='end'
        sx={{
          bgcolor: 'melon.dark',
          width: '35%',
          pl: '5%',
          pr: '10%'
      }}>
        <Box sx={{ width: '100%' }}>
          <CategoryTitle>Work Experience</CategoryTitle>
          {
            experience.work.map((work) => (
              <Box sx={{ py: 1 }}>
                <Typography
                  variant={ (activeSection === work.key ? 'active' : 'inactive') }
                  onMouseOver={() => setActiveSection(work.key)}
                >
                 {work.title}<br />{work.location}
                </Typography>
              </Box>
            ))
          }
          <CategoryTitle>Eductation</CategoryTitle>
          {
            experience.education.map((edu) => (
              <Box sx={{ py: 1 }}>
                <Typography
                  variant={ (activeSection === edu.key ? 'active' : 'inactive') }
                  onMouseOver={() => setActiveSection(edu.key)}
                >
                 {edu.title}<br />{edu.location}
                </Typography>
              </Box>
            ))
          }
          <CategoryTitle>Certifications</CategoryTitle>
          {
            experience.certifications.map((cert) => (
              <Box sx={{ py: 1 }}>
                <Typography
                  variant={ (activeSection === cert.key ? 'active' : 'inactive') }
                  onMouseOver={() => setActiveSection(cert.key)}
                >
                 {cert.title}<br />{cert.location}
                </Typography>
              </Box>
            ))
          }
        </Box>
      </Box>
    </Box>
  )
}