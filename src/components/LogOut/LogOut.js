import React, { useContext } from "react";
import Parse from "parse";

import { AuthContext } from "../../App";
import Button from "@material-ui/core/Button";

const LogOut = () => {
  const Auth = useContext(AuthContext);

  const logOutUser = () => {
    Parse.User.logOut();
    Auth.setUser({});
  };
  return (
    <div style={{ marginBottom: "15px" }}>
      <Button
        onClick={logOutUser}
        variant="outlined"
        color="secondary"
        size="small"
      >
        Log Out
      </Button>
    </div>
  );
};

export default LogOut;
