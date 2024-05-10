import { Box, Fade, Slide, Typography } from "@mui/material"

export function GeneralSection() {
  return (
    <Box sx={{ height: '825px', px: '10vw', py: '150px', zIndex: 0}}>
      <Box 
        bgcolor='silver.dark'
        display='flex'
        justifyContent='center'
        sx={{
          width: '100%',
          height: '100%',
          zIndex: 1
      }}>
        <Box
          sx={{
            position: 'relative',
            width: 1000      
          }}>
          <Box
            bgcolor='melon.light'
            sx={{
              position: 'absolute',
              top: 125,
              width: 350,
              height: 700,
              pt: 10,
              pl: 10,
              pr: 7,
              zIndex: 2
          }}/>
          <Slide direction='left' in={true} timeout={1600}>
            <Box
              component='img'
              src='/imgs/side-profile.jpg'
              alt='Side-profile of Allen'
              sx={{
                position: 'absolute',
                top: 80,
                right: 0,
                height: 600,
                zIndex: 3
            }} />
          </Slide>
          <Box
            sx={{
              position: 'absolute',
              top: 125,
              width: 350,
              height: 700,
              pt: 10,
              pl: 10,
              pr: 7,
              zIndex: 4
          }}>
            <Slide direction='up' in={true} timeout={1000}>
              <Typography variant='body1'>
                <p>Hello,<br/>My name is Allen!</p>
              </Typography>
            </Slide>
            <Slide direction='up' in={true} timeout={1200}>
              <Typography variant='body2' color='silver.dark'>
                <p>I am a Software Engineer!</p>
                <p>My areas of interest include back-end development, machine learning, and general problem solving.</p>
                <p>With a detail oriented-focus, I enjoy creating simple but effective solutions to improve application performance, ease of maintenance, and user experience.</p>
                <p>Be it through work experience, curriculum, or self-lessons, I always strive to gain and build upon skills in my repertoire.</p>
              </Typography>
            </Slide>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}