import React from 'react'
import { Button, Menu, MenuItem, Typography } from '@mui/material'
import { sectionsRoutes } from '../../utils/data/sectionsRoutes'
const resume = 'https://firebasestorage.googleapis.com/v0/b/proyects-screenshots.appspot.com/o/ChristianMezaResume.pdf?alt=media&token=f8698868-4e8f-4b0c-b117-bd42569e63ff'
export const MobileMenu = ({ values }) => {
  const { anchorElNav, handleCloseNavMenu } = values
  return (
    <Menu
      className="mobile--menu"
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      sx={{
        display: { xs: 'block', md: 'none' },
      }}
      style={{
        background: '#04101b80',
        padding: '0'
      }}
    >
      {sectionsRoutes.map((page) => (
        <Button key={page.section} href={ page.route } onClick={handleCloseNavMenu} style={{ 
          width: '20rem',
          backgroundColor: '#04101B',
          display: 'flex',
          justifyContent: 'center',
          color: '#FAFAFA',
          marginBottom: '1rem'
         }} >

          { page.section }

        </Button>
      ))}
      <Button onClick={handleCloseNavMenu} style={{ 
          width: '20rem',
          backgroundColor: '#04101B',
          display: 'flex',
          justifyContent: 'center',

         }} href={ resume } target="_blank">
           Resume
        </Button>
    </Menu>
  )
}
