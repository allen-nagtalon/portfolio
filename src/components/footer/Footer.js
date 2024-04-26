import { Box, IconButton, Typography } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import './style.css'

const Footer = _ => {
  return (
    <Box bgcolor='silver.main' display='flex' justifyContent='space-between' sx={{ px: 20, height: 100 }}>
      <Box alignContent='center' sx={{ height: 'inherit' }}>
        <Typography variant='tiny' display='block' color='white.main' sx={{ pb: 1 }}>©2024 Allen A Nagtalon</Typography>
        <Typography variant='tiny' display='block' color='white.main'>Powered by React</Typography>
      </Box>
      <Box className='icon_box' alignContent='center' sx={{ height: 'inherit' }}>
        <IconButton
          className='icon'
          color='white'
          size='large'
          component='a'
          href='https://www.linkedin.com/in/aanagtalon/'
        >
          <LinkedInIcon/>
        </IconButton>
        <IconButton
          className='icon'
          color='white'
          size='large'
          component='a'
          href='https://github.com/allen-nagtalon'
        >
          <GitHubIcon/>
        </IconButton>
      </Box>
    </Box>
  )
}

export default Footer