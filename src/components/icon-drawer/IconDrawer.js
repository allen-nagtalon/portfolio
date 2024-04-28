import { Box, Paper, Typography, styled } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';

const IconItem = styled(Paper)(({ theme }) => ({
  width: 96,
  borderRadius: 20,
  aspectRatio: 1 / 1
}))

const IconImage = styled(Box)(({ theme }) => ({
  maxHeight: 48,
  aspectRatio: 1 / 1,
  marginLeft: 24,
  marginTop: 10
}))

const IconTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: 0,
  marginTop: 5
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
        columnSpacing={4}
        sx={{
          height: 'auto',
          px: 5
      }}>
        {skills.map((skill) => (
          <Grid>
            <IconItem>
              <IconImage component='img' src={skill.icon}/>
              <IconTitle>{skill.title}</IconTitle>
            </IconItem>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default IconDrawer