import React, { useState, useContext } from 'react';
import { AuthContext } from '../../App';
import * as firebase from 'firebase';

import { ErrorMessage } from './login.css';

import { Button, Input } from '@material-ui/core';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrors] = useState('');

  const Auth = useContext(AuthContext);
  const handleForm = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (result) {
        if (result.user) {
          Auth.setIsLoggedIn(true);
        }
      })
      .catch((e) => {
        setErrors(e.message);
      });
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // The signed-in user info.
        if (result.user) {
          Auth.setIsLoggedIn(true);
        }
      })
      .catch(function (error) {
        // Handle Errors here.
        console.log(error);
        setErrors(error.message);
      });
  };

  return (
    <div>
      <h1 className='title-big'>Ulogujte se</h1>
      <form onSubmit={(e) => handleForm(e)}>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name='email'
          type='email'
          autoFocus={true}
          placeholder='E-mail'
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          name='password'
          value={password}
          type='password'
          placeholder='Password'
          style={{
            marginBottom: '15px',
          }}
        />

        <Button type='submit' variant='contained' color='primary'>
          Ulogujte se
        </Button>
        <hr />
        <Button className='googleBtn' onClick={handleGoogleLogin}>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
            alt='logo'
          />
          Ulogujte se sa Google
        </Button>

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </form>
    </div>
  );
};

export default LogIn;