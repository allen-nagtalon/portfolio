import { Box, IconButton, Typography } from "@mui/material"
import Carousel from 'react-material-ui-carousel'
import IconDrawer from '../icon-drawer/IconDrawer'
import GitHubIcon from '@mui/icons-material/GitHub'

const ProjectCard = (props) => {
  return (
    <Box
      position='relative'
      display='flex' 
      sx={{
        height: '650px', 
        px: '5vw'
    }}>
      <Box 
        position='absolute' 
        bgcolor='silver.main'
        zIndex={2}
        sx={{
          right: '50%',
          width: '35vw',
          height: '100%'
      }}>
        <Box
          component='img'
          src={'/imgs/projects/' + props.project.image}
          sx={{
            objectFit: 'cover',
            height: '100%',
            width: '100%',
            opacity: 0.8
          }}
        />
      </Box>
      <Box 
        position='absolute'
        zIndex={3}
        bgcolor='melon.main'
        sx={{
          left: '45%',
          mr: '5vw',
          py: 5,
          px: 5,
          height: 'auto',
          alignSelf: 'center'
      }}>
        <Typography variant='h2' sx={{ pb: 1, pr: 2 }}>
          {props.project.name}
        </Typography>
        {
          props.project.wip ?
            <Box sx={{ pb: 2 }}>
              <Typography variant='tiny' fontStyle='italic'>
                Currently In Progress...
              </Typography>
            </Box>
            : null
        }
        <Typography variant='body2' sx={{ pb: 2 }}>
          {props.project.description}
        </Typography>
        <Box sx={{ pb: 3 }}>
          <Typography variant='tiny' fontStyle='italic'>
            {props.project.tech.join(' • ')}
          </Typography>
        </Box>
        {
          props.project.github ?
            <IconButton
              className='icon'
              component='a'
              size='small'
              target='_blank'
              href={props.project.github}
            >
              <GitHubIcon/>
            </IconButton>
            : null
        }
      </Box>
      <Box
        position='absolute'
        zIndex={1}
        bgcolor='melon.dark'
        sx={{
          right: 0,
          height: '500px',
          width: '100%',
          alignSelf: 'center'
      }}/>
    </Box>
  )
}

const ProjectCarousel = (props) => {
  return (
    <Carousel
      indicators={false}
      navButtonsAlwaysVisible={true}
      autoPlay={true}
      stopAutoPlayOnHover={true}
      duration={2000}
    >
      {
        props.projects.map( (project, i) => <ProjectCard project={project} key={i} /> )
      }
    </Carousel>
  )
}

export default ProjectCarousel