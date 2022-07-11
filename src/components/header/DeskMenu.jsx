import { Box, Button } from '@mui/material'
import React from 'react'
import { sectionsRoutes } from '../../utils/data/sectionsRoutes'
const resume = 'https://firebasestorage.googleapis.com/v0/b/proyects-screenshots.appspot.com/o/ChristianMezaResume.pdf?alt=media&token=c6d48a38-6324-40ad-841a-681dc579a0e8';
export const DeskMenu = ({ values }) => {
  const { anchorElNav } = values
  // const navigate = useNavigate()

  // const handleNavigate = ( route ) => {
  //   navigate(route, { replace: false })
  // }
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
      {sectionsRoutes.map((page) => (
        <Button
          key={page.section}
          // onClick={handleCloseNavMenu}
          sx={{ my: 2, color: 'white', display: 'block' }}
          href={ page.route }
          style={{  textAlign: 'center' }}
        >          
          {page.section}
        </Button>
      ))}
      <Button href={ resume } target="_blank">Resume</Button>
    </Box>
  )
}
