import { Menu, MenuItem, Typography } from '@mui/material'
import React from 'react'
import { sectionsRoutes } from '../../utils/data/sectionsRoutes'

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
        <MenuItem key={page.section} onClick={handleCloseNavMenu} style={{ 
          width: '20rem',
          backgroundColor: '#04101B',
          display: 'flex',
          justifyContent: 'center',

         }} >

            <a href={ page.route } style={{ fontSize: '1.6rem', textDecoration: 'none', color: '#FAFAFB' }}>{ page.section }</a>

        </MenuItem>
      ))}
    </Menu>
  )
}
