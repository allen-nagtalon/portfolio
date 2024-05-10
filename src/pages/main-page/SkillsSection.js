import { Box, Typography } from "@mui/material"
import IconDrawer from "../../components/icon-drawer/IconDrawer"

const skills = [
  { title: 'Java', icon: '/imgs/icons/java.png'},
  { title: 'Python', icon: '/imgs/icons/python.png'},
  { title: 'Kotlin', icon: '/imgs/icons/kotlin.png'},
  { title: 'HTML', icon: '/imgs/icons/html.png'},
  { title: 'CSS', icon: '/imgs/icons/css.png'},
  { title: 'Javascript', icon: '/imgs/icons/javascript.png'},
  { title: 'SQL', icon: '/imgs/icons/sql.png'},
  { title: 'MongoDB', icon: '/imgs/icons/mongodb.png'},
  { title: 'React', icon: '/imgs/icons/react.png'},
  { title: 'Django', icon: '/imgs/icons/django.png'},
  { title: 'Spring', icon: '/imgs/icons/spring-boot.png'},
  { title: 'Node', icon: '/imgs/icons/node.png'},
  { title: 'Express', icon: '/imgs/icons/express.png'},
]

export function SkillsSection() {
  return (
    <Box
      bgcolor='melon.light' 
      sx={{
        height: '1000px',
        my: '150px'
    }}>
      <IconDrawer skills={skills} />
    </Box>
  )
}