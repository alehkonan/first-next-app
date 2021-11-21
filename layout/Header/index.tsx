import React, { DetailedHTMLProps, FunctionComponent, HTMLAttributes, useState } from 'react';
import { AppBar, Avatar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import MenuIcon from '@material-ui/icons/Menu';
import { useSession, signIn } from 'next-auth/client';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Header: FunctionComponent<Props> = ({ className }) => {
  const [session] = useSession();

  return (
    <Box className={className} sx={{ flexGrow: 1 }}>
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

          {session ? (
            <Avatar alt="avatar" src={session.user?.image as string} />
          ) : (
            <Button variant="contained" onClick={() => signIn()}>Sign in</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
