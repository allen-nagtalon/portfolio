import { Box } from '@mui/material'

const HalvedBase = _ => {
  return (
    <Box sx={{
      display: 'flex',
      height: '1000px',
      width: '100vw'
    }}>
      <Box sx={{
        bgcolor: '#F4F3EE',
        height: '100%',
        width: '50%'
      }}>
        Test 1
      </Box>
      <Box sx={{
        bgcolor: '#E0AFA0',
        height: '100%',
        width: '50%'
      }}>
        Test 2
      </Box>
    </Box>
  )
}

export default HalvedBase