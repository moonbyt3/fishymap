import React, { useContext } from 'react';
import { AuthContext } from '../../App';
import * as firebase from 'firebase';
import Button from '@material-ui/core/Button';

const LogOut = () => {
  const Auth = useContext(AuthContext);

  const logOutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
        Auth.setIsLoggedIn(false);
      })
      .catch(function (error) {
        // An error happened.
        alert('log out ERROR');
      });
  };
  return (
    <div style={{ marginBottom: '15px' }}>
      <Button
        onClick={logOutUser}
        variant='outlined'
        color='secondary'
        size='small'
      >
        Log Out
      </Button>
    </div>
  );
};

export default LogOut;
