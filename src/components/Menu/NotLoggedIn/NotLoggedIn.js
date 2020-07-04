import React from 'react';
import SignUp from '../../SignUp/SignUp';
import LogIn from '../../LogIn/LogIn';
const NotLoggedIn = () => {
  return (
    <div style={{ margin: 'auto 0' }}>
      <LogIn />
      <p style={{ margin: '30% 0' }}>
        Nemate nalog?
        <br />
      </p>
      <SignUp />
    </div>
  );
};

export default NotLoggedIn;
