import React, { useState, useContext } from "react";
import { AuthContext } from "../../App";

import Parse from "parse";

import { ErrorMessage } from "./login.css";

import { Button, Input } from "@material-ui/core";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");

  const Auth = useContext(AuthContext);
  const handleForm = (e) => {
    e.preventDefault();
    // Create a new instance of the user class
    let user = Parse.User.logIn(email, password)
      .then(function (user) {
        console.log(
          "User logged in successful with name: " +
            user.get("username") +
            " and email: " +
            user.get("email")
        );
        Auth.setIsLoggedIn(true);
      })
      .catch(function (error) {
        console.log("Error: " + error.code + " " + error.message);

        setErrors(error.message);
      });
  };
  return (
    <div>
      <h1 className="title-big">Ulogujte se</h1>
      <form onSubmit={(e) => handleForm(e)}>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="text"
          autoFocus={true}
          placeholder="E-mail"
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          style={{
            marginBottom: "15px",
          }}
        />

        <Button type="submit" variant="contained" color="primary">
          Ulogujte se
        </Button>
        {/* <hr />
        <Button className="googleBtn" onClick={handleFacebookLogin}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          />
          Ulogujte se sa Facebook
        </Button> */}

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </form>
    </div>
  );
};

export default LogIn;
