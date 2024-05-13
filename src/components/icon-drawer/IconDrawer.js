import { Box, Paper, Typography, styled } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';

const iconList = {
  CSS: 'css.png',
  Django: 'django.png',
  Express: 'express.png',
  HTML: 'html.png',
  Java: 'java.png',
  Javascript: 'javascript.png',
  Kotlin: 'kotlin.png',
  MongoDB: 'mongodb.png',
  Node: 'node.png',
  Python: 'python.png',
  React: 'react.png',
  Spring: 'spring-boot.png',
  SQL: 'sql.png',
}

const IconItem = styled(Paper)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 72,
  borderRadius: 20,
  aspectRatio: 1 / 1
}))

const IconImage = styled(Box)(({ theme }) => ({
  position: 'absolute',
  maxHeight: 48,
  aspectRatio: 1 / 1
}))

const IconTitle = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  textAlign: 'center',
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: 0
}))

const IconDrawer = ({ skills }) => {
  return (
    <>
      <Grid 
        container
        display='flex'
        alignItems='center'
        justifyContent='center'
        rowSpacing={1}
        columnSpacing={3}
        sx={{ height: 'auto' }}>
        {skills.map((skill) => (
          <Grid item>
            <IconItem>
              <IconImage component='img' src={ '/imgs/icons/' + iconList[skill]}/>
            </IconItem>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default IconDrawer