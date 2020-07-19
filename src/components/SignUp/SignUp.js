import React, { useState, useContext } from "react";
import { AuthContext } from "../../App";
import Parse from "parse";

import { Input, Button } from "@material-ui/core";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [error, setErrors] = useState("");

  const Auth = useContext(AuthContext);
  const handleForm = (e) => {
    e.preventDefault();
    // Create a new instance of the user class
    var user = new Parse.User();
    user.set("username", username);
    user.set("password", password);
    user.set("email", email);

    // other fields can be set just like with Parse.Object
    // user.set("phone", "415-392-0202");

    user
      .signUp()
      .then(function (user) {
        console.log(
          "User created successful with name: " +
            user.get("username") +
            " and email: " +
            user.get("email")
        );
        Auth.setUser(user);
      })
      .catch(function (error) {
        console.log("Error: " + error.code + " " + error.message);
        setErrors(error.message);
      });
  };

  return (
    <div>
      <h1 className="title-big">Napravite nalog</h1>
      <form onSubmit={(e) => handleForm(e)}>
        <Input
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          value={username}
          type="text"
          placeholder="username"
          style={{
            marginBottom: "15px",
          }}
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="email"
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          value={password}
          type="password"
          placeholder="password"
          style={{
            marginBottom: "15px",
          }}
        />
        <Button type="submit" variant="contained" color="primary">
          Registrujte se
        </Button>
        <span>{error}</span>
      </form>
    </div>
  );
};

export default SignUp;
