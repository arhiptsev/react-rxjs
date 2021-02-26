import React, { useContext } from 'react';
import styled from 'styled-components';
import {  RxContext } from '../common/state';
import { useObservable } from '../hooks/useObservable';
import MailIcon from '@material-ui/icons/Mail';
import { AccountCircle } from '@material-ui/icons';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Badge, IconButton } from "@material-ui/core"

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;

export const UserInfo = ({ ...rest }) => {
  
  const {userObservable: commonObservable} = useContext(RxContext);

  const state = useObservable(commonObservable);

  if (!state) return null;

  const {notifications, messages} = state;

  return (
    <Container>
      <IconButton color="inherit">
        <Badge badgeContent={messages} color="secondary">
          <MailIcon />
        </Badge>
      </IconButton>
      <IconButton color="inherit">
        <Badge badgeContent={notifications} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-haspopup="true"
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
    </Container>
  );
}

