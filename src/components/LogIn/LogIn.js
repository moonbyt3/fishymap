import React, { useState, useContext } from "react";
import { AuthContext } from "../../App";
import * as firebase from 'firebase'

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");

  const Auth = useContext(AuthContext);
  const handleForm = e => {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {
        // This gives you a Google Access Token.
        console.log('AUAUAUAU', result);

        if (result.user) {
            Auth.setIsLoggedIn(true)
        }
    })
    .catch(e => {
        console.log('ERRPOR', e);
        setErrors(e.message);
        
    });
  };

  return (
    <div>
      <h1>LogIn</h1>
      <form >
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
        <button className="googleBtn" type="button" >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          />
          LogIn With Google
        </button>
        <button type="submit" onClick={e => handleForm(e)}>LogIn</button>
        <span>{error}</span>
      </form>
    </div>
  );
};

export default LogIn;