import Hero from './components/hero/Hero'
import AboutPage from './pages/about-page/AboutPage'

import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AboutPage />
    </ThemeProvider>
  );
}

export default App;
