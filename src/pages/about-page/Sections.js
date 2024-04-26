import { Box, Typography } from "@mui/material"

export function SectionOne() {
  return (
    <Box sx={{ height: '825px', px: '10vw', py: '150px' }}>
      <Box 
        bgcolor='silver.dark'
        display='flex'
        justifyContent='center'
        sx={{
          width: '100%',
          height: '100%'
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
              pr: 7
          }}>
            <Typography variant='body1'>
              <p>Hello,<br/>My name is Allen!</p>
            </Typography>
            <Typography variant='body2' color='silver.dark'>
              <p>I'm a Bachelor of Computer Science, graduated from Cal Poly Pomona.</p>
              <p>My area's of interest include back-end development, machine learning, and general problem solving.</p>
              <p>With a detail oriented-focus, I enjoy creating simple but effective solutions to improve application performance, ease of maintenance, and user experience.</p>
            </Typography>
          </Box>
          <Box
            component='img'
            src='/imgs/side-profile.jpg'
            alt='Side-profile of Allen'
            sx={{
              position: 'absolute',
              top: 80,
              right: 0,
              height: 600
          }} />
        </Box>
      </Box>
    </Box>
  )
}

export function SectionTwo() {
  return (
    <Box sx={{
      display: 'flex',
      height: '1000px',
      width: '100vw'
    }}>
      <Box sx={{ width: '50%' }}>
        
      </Box>
      <Box sx={{
        bgcolor: 'melon.dark',
        width: '50%'
      }}>
        
      </Box>
    </Box>
  )
}