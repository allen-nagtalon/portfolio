import { Box, Button, Fade, Paper, Slide, Typography } from '@mui/material'

import '../../assets/fonts.css'

const animTimeout = 2000;

const Hero = _ => {
  return (
    <Box 
      sx={{
        display: 'flex',
        bgcolor: 'silver.light'
    }}>
      <Box 
        sx={{
          bgcolor: 'melon.dark',
          height: '350px',
          width: '65vw',
          py: '175px'
      }}/>
      <Slide direction='left' in={true} {...{ timeout: 2000 }}>
        <Box
          alignContent={'end'}
          sx={{
            position: 'absolute',
            left: '30vw',
            top: '150px',
            height: '300px',
            width: '50vw',
            bgcolor: 'silver.main'
        }}/>
      </Slide>
      <Fade in={true} {...{ timeout: animTimeout }}>     
        <Box
          sx={{
            position:'absolute',
            top: '185px',
            left: '48vw'
          }}>
          <Typography variant='body1' color='dark.main'>I am</Typography>
          <Typography variant='h1' color='dark.main' sx={{ my: '10px' }} >[Allen Nagtalon]</Typography>
          <Typography variant='body1' color='dark.main' sx={{ mb: '55px' }}>a software developer.</Typography>
          <Button
            color='dark'
            variant='outlined'
            sx={{ width: '150px' }}>Explore</Button>
        </Box>
      </Fade>
      <Fade in={true} {...{ timeout: animTimeout }}>
        <Paper
          elevation={7}
          component='img'
          src='/imgs/mountain.jpg'
          alt='Image of Allen standing with a mountain backdrop.'
          sx={{
            position: 'absolute',
            right: '55vw',
            top: '100px',
            height: '500px'
          }}
        />
      </Fade>
    </Box>
  )
}

export default Hero