import React, { useState, useContext } from "react";
import { AuthContext } from "../../App";

import * as firebase from 'firebase'

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");

  const Auth = useContext(AuthContext);
  const handleForm = e => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
      console.log('createUser', result);
      
    }).catch((error) => {
      console.log(error);
      
    })
    // Auth.setIsLoggedIn(true);
  };

  return (
    <div>
      <p>
        Dont have an account?
        <br />
        
      </p>
      <h1>SignUp</h1>
      <form onSubmit={e => handleForm(e)}>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="email"
        />
        <input
          onChange={e => setPassword(e.target.value)}
          name="password"
          value={password}
          type="password"
          placeholder="password"
        />
        <hr />
        <button type="submit">Sign Up</button>

        <span>{error}</span>
      </form>
    </div>
  );
};

export default SignUp;