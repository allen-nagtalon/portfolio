import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"

const navItems = ['About', 'Experience', 'Projects', 'Contact']

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
    <Box>
      <Box onClick={scrollToTop}>
        <Typography display='block' variant='logo' sx={{ textAlign: 'center', pb: 1 }}>ALLEN ANTHONY</Typography>
        <Typography display='block' variant='logo' sx={{ textAlign: 'center' }}>NAGTALON</Typography>
      </Box>
    </Box> 
  )
}

const NavBar = (props) => {
  return (
    <AppBar component='nav' color='melon' elevation={0} sx={{ paddingLeft: 5 }}>
      <Toolbar>
        <Box display='flex' alignItems='center' justifyContent='space-between' sx={{ height: 120, width: '100%' }}>
          <Logo />
          <Box display='flex'>
            {
              navItems.map((page, i) => (
                <Typography 
                  component={Button}
                  href={ '#' + page.toLowerCase() + '-section' }
                  variant='body2'
                  disableRipple
                  color='dark.main'
                  sx={{
                    height: 60,
                    width: 180,
                    mr: '10px',
                    py: '20px',
                    textTransform: 'none',
                    borderRadius: 0,
                    borderTop: 1,
                    '&:hover': {
                      borderTop: 4,
                      backgroundColor: 'transparent',
                      pt: '17px',
                      fontWeight: 'bold'
                    },
                    ...(props.currentSection == i && {
                      borderTop: 4,
                      pt: '17px',
                      fontWeight: 'bold'
                    })
                }}>
                  {console.log(props.currentSection)}
                  {page}
                </Typography>
              ))
            }
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar