import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    melon: {
      main: '#EAD1C7',
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
    }
  },
  typography: {
    fontFamily: 'Open Sans',
    h1: {
      fontSize: 50,
      letterSpacing: 3,
      fontWeight: 600
    },
    body1: {
      fontSize: 20,
      letterSpacing: 2,
      fontWeight: 300
    },
    logo: {
      fontSize: 16,
      letterSpacing: 3,
      fontWeight: 300
    }
  }
})

responsiveFontSizes(theme)

export default theme;