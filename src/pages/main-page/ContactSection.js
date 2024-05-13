import { Box, Typography } from "@mui/material"
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export function ContactSection() {
  return (
    <Box id='contact-section' sx={{ height: '400px', px: '10vw' }}>
      <Typography variant='h1' sx={{ pb: 1 }}>
        Let's get in touch!
      </Typography>
      <Typography variant='body1' sx={{ pb: 2 }}>
        Feel free to contact me for any business inquiries--<br/>
        I am available at the following socials:
      </Typography>
      <Box display='flex' alignItems='center'>
        <MailOutlineIcon size='small' color='dark' sx={{ pr: 1 }}/>
        <Typography variant='body2'>
          ant.nagtalon22@gmail.com
        </Typography>
      </Box>
      <Box display='flex' alignItems='center'>
        <PhoneIphoneIcon size='small' color='dark' sx={{ pr: 1 }}/>
        <Typography variant='body2'>
          (310) 977-4862
        </Typography>
      </Box>
      <Box display='flex' alignItems='center'>
        <LinkedInIcon size='small' color='dark' sx={{ pr: 1 }}/>
        <Typography component='a' href='https://www.linkedin.com/in/aanagtalon/' variant='body2'>
          linkedin.com/in/aanagtalon/
        </Typography>
      </Box>
    </Box>
  )
}