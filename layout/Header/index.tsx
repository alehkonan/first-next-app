import React, { DetailedHTMLProps, FunctionComponent, HTMLAttributes, useState } from 'react';
import { AppBar, Avatar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import MenuIcon from '@material-ui/icons/Menu';
import { useSession, signIn, signOut } from 'next-auth/client';

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Header: FunctionComponent<HeaderProps> = ({ className }) => {
  const [session] = useSession();
  const [showLogOut, setShowLogOut] = useState(false);

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
          {/* {session && <Button variant="contained" onClick={() => signOut()}>Sing out</Button>} */}

        </Toolbar>
      </AppBar>
    </Box>
  )
}
