import { Box, Button } from '@mui/material'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SourceOfTheTruth } from '../../context/context'
import { sectionsRoutes } from '../../utils/data/sectionsRoutes'
import { LinkTo } from './LinkTo'
const resume = 'https://firebasestorage.googleapis.com/v0/b/proyects-screenshots.appspot.com/o/ChristianMezaResume.pdf?alt=media&token=f8698868-4e8f-4b0c-b117-bd42569e63ff';
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
