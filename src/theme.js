import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    melon: {
      main: '#EAD1C7',
      light: '#EED9D1',
      dark: '#E3B6A9'
    },
    silver: {
      main: '#BCB8B1',
      light: '#F4F3EE',
      dark: '#8A817C'
    },
    dark: {
      main: '#463F3A',
      dark: '#000000'
    },
    white: {
      main: '#FFFFFF'
    }
  },
  typography: {
    fontFamily: 'Open Sans',
    h1: {
      fontSize: '2.5rem',
      letterSpacing: 3,
      fontWeight: 600
    },
    h2: {
      fontSize: '1.4rem',
      letterSpacing: 4,
      fontWeight: 500
    },
    body1: {
      fontSize: '1.3rem',
      letterSpacing: 2,
      fontWeight: 300
    },
    body2: {
      fontSize: '0.9rem',
      letterSpacing: 2,
      fontWeight: 300
    },
    logo: {
      fontSize: '1.1rem',
      letterSpacing: 5,
      fontWeight: 300
    },
    tiny: {
      fontSize: '0.8rem',
      letterSpacing: 2,
      fontWeight: 300
    },
    active: {
      fontSize: '1.0rem',
      letterSpacing: 2,
      fontWeight: 'bold'
    },
    inactive: {
      fontSize: '0.9rem',
      letterSpacing: 2,
      fontWeight: 300,
      '&:hover': {
        fontWeight: 'bold'
      }
    }
  }
})

responsiveFontSizes(theme)

export default theme;