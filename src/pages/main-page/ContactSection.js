import Grid from '@mui/material/Unstable_Grid2'
import { Box, Fade, Slide, Typography } from "@mui/material"
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import VisibilitySensor from 'react-visibility-sensor'

export function ContactSection(props) {
  return (
    <VisibilitySensor
      active={!props.visible}
      onChange={ (isVisible) => { if (isVisible) props.setCurrentSection(3) }}
    >
      <Box id='contact-section' sx={{ height: 'auto', px: '10vw', py: '150px' }}>
        <Grid container>
          <Grid xs={6} display='flex' alignItems='center'>
            <Box id='contact-body' sx={{ pr: '10%' }}>
              <Slide direction='right' timeout={1000} in={props.visible}>
                <Typography variant='h1' sx={{ pb: 1 }}>
                  Let's get in touch!
                </Typography>
              </Slide>
              <Slide direction='right' timeout={1000} in={props.visible}>
                <Typography variant='body1' sx={{ pb: 2 }}>
                  Feel free to contact me for any business inquiries--<br/>
                  I am available at the following socials:
                </Typography>
              </Slide>
              <Slide direction='right' timeout={1400} in={props.visible}>
                <Box display='flex' alignItems='center'>
                  <MailOutlineIcon size='small' color='dark' sx={{ pr: 1 }}/>
                  <Typography variant='body2'>
                    ant.nagtalon22@gmail.com
                  </Typography>
                </Box>
              </Slide>
              <Slide direction='right' timeout={1800} in={props.visible}>
                <Box display='flex' alignItems='center'>
                  <PhoneIphoneIcon size='small' color='dark' sx={{ pr: 1 }}/>
                  <Typography variant='body2'>
                    (310) 977-4862
                  </Typography>
                </Box>
              </Slide>
              <Slide direction='right' timeout={2200} in={props.visible}>
                <Box display='flex' alignItems='center'>
                  <LinkedInIcon size='small' color='dark' sx={{ pr: 1 }}/>
                  <Typography component='a' href='https://www.linkedin.com/in/aanagtalon/' variant='body2'>
                    linkedin.com/in/aanagtalon/
                  </Typography>
                </Box>
              </Slide>
            </Box>
          </Grid>
          <Grid xs={6} display='flex' justifyContent='center'>
            <Fade timeout={2200} in={props.visible}>
              <Box
                component='img'
                src='/imgs/laptop.jpg'
                sx={{
                  maxHeight: '450px',
                  width: '100%',
                  objectFit: 'contain'
              }}/>
            </Fade>
          </Grid>
        </Grid>
      </Box>
    </VisibilitySensor>
  )
}