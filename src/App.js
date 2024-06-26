import Hero from './pages/hero-page/Hero'
import MainPage from './pages/main-page/MainPage'

import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
