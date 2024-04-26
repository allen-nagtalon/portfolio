import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"

const navItems = ['About', 'Projects', 'Contact']

const scrollToTop = (event) => {
  console.log('Logo clicked!')
  const anchor = (event.target.ownerDocument || document).querySelector(
    '#back-to-top-anchor'
  )

  if (anchor) {
    anchor.scrollIntoView({
      block: 'center'
    })
  }
}

const Logo = _ => {
  return (
    <Box sx={{ pl: 10, width: '50%'}}>
      <Box onClick={scrollToTop} display='block' sx={{ width: '40%' }}>
        <Typography sx={{ textAlign: 'center' }}>ALLEN ANTHONY</Typography>
        <Typography sx={{ textAlign: 'center' }}>NAGTALON</Typography>
      </Box>
    </Box> 
  )
}

const NavBar = _ => {
  return (
    <AppBar 
      component='nav'
      color='melon'
    >
      <Toolbar>
        <Box display='flex' alignItems='center' sx={{height: 120, width: '100%' }}>
          <Logo />
          <Box display='flex' justifyContent='right' sx={{ width: '50%'}}>
            {navItems.map((page) => (
              <Typography 
                component={Button} 
                variant='body2'
                disableRipple
                color='dark.main'
                sx={{
                  height: 60,
                  width: 200,
                  textTransform: 'none',
                  borderTop: 1,
                  borderRadius: 0,
                  mr: '10px',
                  py: '20px',
                  '&:hover': {
                    borderTop: 4,
                    backgroundColor: 'transparent',
                    pt: '17px',
                    fontWeight: 'bold'
                  }
              }}>
                {page}
              </Typography>
            ))}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar