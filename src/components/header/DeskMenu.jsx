import { Box, Button } from '@mui/material'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SourceOfTheTruth } from '../../context/context'
import { sectionsRoutes } from '../../utils/data/sectionsRoutes'
import { LinkTo } from './LinkTo'

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
    </Box>
  )
}
