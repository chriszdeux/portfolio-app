import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { icons } from '../../utils/icons/icons';
import { MenuFade } from '../helpers/MenuFade';
import { MobileMenu } from './MobileMenu';
import { DeskMenu } from './DeskMenu';

const pages = ['Skills', 'Projects', 'About', 'Interested', 'Contact']
export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { menu_icon } = icons
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <AppBar position="fixed"  style={{ backgroundColor: 'rgba(0,0,0,0)', boxShadow: 'none' }}>
      <Container maxWidth="xl" style={{ backgroundColor: 'none' }}>
        <Toolbar disableGutters style={{ backgroundColor: 'none' }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Christian Meza Portfolio
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            CM Portfolio
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }} style={{ backgroundColor: 'none' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {
                menu_icon
              }
            </IconButton>
            <MobileMenu values={{ anchorElNav, handleCloseNavMenu }}/>
          </Box>
          <DeskMenu values={{ anchorElNav }}/>
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
    <MenuFade />
    </>
  )
}
