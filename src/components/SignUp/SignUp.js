import React, { useState, useContext } from 'react';
import { AuthContext } from '../../App';

import * as firebase from 'firebase';

import { Input, Button } from '@material-ui/core';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrors] = useState('');

  const Auth = useContext(AuthContext);
  const handleForm = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log('createUser', result);
        Auth.setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1 className='title-big'>Napravite nalog</h1>
      <form onSubmit={(e) => handleForm(e)}>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name='email'
          type='email'
          placeholder='email'
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          name='password'
          value={password}
          type='password'
          placeholder='password'
          style={{
            marginBottom: '15px',
          }}
        />
        <Button type='submit' variant='contained' color='primary'>
          Registrujte se
        </Button>
        <span>{error}</span>
      </form>
    </div>
  );
};

export default SignUp;
