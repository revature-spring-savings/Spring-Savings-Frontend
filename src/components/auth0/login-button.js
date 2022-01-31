import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./Auth.scss";
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <li
      className="active"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </li>
  );
};

export default LoginButton;