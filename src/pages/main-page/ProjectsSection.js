import { Box, Typography } from '@mui/material'
import ProjectCarousel from '../../components/project-carousel/ProjectCarousel.js'

export function ProjectsSection() {
  const projects = [
    {
      name: 'Wishlist Organizer',
      description: 'An Angular and Spring full-stack application for users to create and share their wishlist of items for events.',
      snippet: 'Wishlists ',
      image: 'wishlist.jpg',
      tech: [ 'Java', 'Typescript', 'HTML', 'CSS', 'MySQL', 'Maven', 'Spring Framework' ],
      github: 'https://github.com/allen-nagtalon/wishlist-web-app',
      wip: 'true'
    },
    {
      name: 'Triple Triad Tracker',
      description: 'A React and Django full-stack application for users to track their Triple Triad Card collection in the MMORPG "Final Fantasy XIV.',
      snippet: 'Allows users to search through the complete collection of Triple Triad cards, view related stats and info, and mark cards that have been acquired in game.',
      image: 'ffxiv_triple_triad.png',
      tech: [ 'Python', 'Javascript', 'HTML', 'CSS', 'Django', 'React', 'JWT', 'Axios', 'Material-UI' ],
      github: 'https://github.com/allen-nagtalon/triadtracker'
    },
    {
      name: 'Flappy Bird Clone w/ NEAT Neural Network',
      description: 'A Python recreation of the mobile game Flappy Bird with an implementation of a NEAT Neural Network to play the game.',
      snippet: '',
      image: 'neat_flappy.png',
      tech: [ 'Python', 'PyGame', 'NEAT Neural Network' ],
      github: 'https://github.com/allen-nagtalon/neat_flappy'
    },
    {
      name: 'Sudoku Solver Mobile App',
      description: 'A simple Android mobile application to read Sudoku puzzles using AR that can either be played out or solved.',
      snippet: '',
      image: 'sudoku_solver.jpg',
      tech: [ 'Java', 'Kotlin', 'Android Studio', 'CameraX API', 'Google MLK', 'Gradle' ],
      github: 'https://github.com/anthony-nagtalon/SudokuWizardApp'
    },
    {
      name: 'Top-View RPG Game',
      description: 'A top-view 2D game developed in Python using Pygame to learn the basic and intermediate features of the modules. Created following the online course for Pygame development via Clear Code.',
      snippet: '',
      image: 'top_view_rpg.png',
      tech: [ 'Python', 'PyGame', 'Tiled' ],
      github: 'https://github.com/anthony-nagtalon/zelda_like_game'
    },
  ]

  return (
    <Box
      id='projects-section'
      bgcolor='silver.light'
      sx={{
        height: '650px',
        my: '150px',
        px: '5vw',
        py: '150px'
    }}>
      <ProjectCarousel projects={projects} />
    </Box>
  )
}