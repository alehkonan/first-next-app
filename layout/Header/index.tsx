import React, { FunctionComponent } from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import MenuIcon from '@material-ui/icons/Menu';

export const Header: FunctionComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
              display: { xs: 'block', sm: 'none' },
              mr: 2,
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            fontFamily="inherit"
            variant="h5"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Header
          </Typography>

          <Button color="inherit" variant="text" sx={{fontFamily: 'inherit'}}>
            Login
          </Button>

        </Toolbar>
      </AppBar>
    </Box>
  )
}
