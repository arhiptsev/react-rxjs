import React from 'react';
import { AppBar,  IconButton, Toolbar, Typography } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import { UserInfo } from './UserInfo';



export const Header = ({ ...rest }) => {

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          Rxjs in React
        </Typography>
        <UserInfo/>
      </Toolbar>
    </AppBar>
  );
}

