import React from 'react';
// import { Button } from '@mui/material';

function LoginButton({ handleLoginClick }) {
  const handleClick = () => {
    handleLoginClick();
  };

  return (
    <div className="navbar">
      <div>
        <span onClick={handleClick} className="loginicon">
          Sign in
          {/* <Button variant="outlined" onClick={handleClick}>Login</Button> */}
        </span>
      </div>
    </div>
  )
}

export default LoginButton;
