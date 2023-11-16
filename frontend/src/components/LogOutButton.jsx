import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../hooks';

const LogOutButton = () => {
  const { loggedIn, logOut } = useAuth();

  return loggedIn ? <Button className="btn btn-primary" onClick={logOut}>Выйти</Button> : null;
};

export default LogOutButton;
