import { Box, Typography } from '@mui/material'
import ProjectCarousel from '../../components/project-carousel/ProjectCarousel.js'

export function ProjectsSection() {
  return (
    <Box
      bgcolor='silver.light'
      sx={{
        height: '650px',
        my: '150px',
        px: '5vw',
        py: '150px'
    }}>
      <ProjectCarousel />
    </Box>
  )
}