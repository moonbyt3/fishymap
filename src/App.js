import React, { useState, useEffect } from "react";
import Parse from "parse";
import MapView from "./components/MapView/MapView";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.scss";
import AddBoxIcon from "@material-ui/icons/AddBox";

Parse.serverURL = "https://parseapi.back4app.com";
Parse.initialize(
  "e4X0mA6gyPKujy5nMcZVX3UuUfnyMv3BN0t8RCVX", // Application ID
  "XAx1ND5eWojCzGhUkH1aMo4OeotoirZvDP5qqaDC" // Javascript key
);

let viewport = {
  height: window.innerHeight,
};

export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [fishCatches, setFishCatches] = useState(null);
  useEffect(() => {
    setFishCatches({});
    let getUser = Parse.User.current();
    if (getUser) {
      setUser({ user: getUser });
      setIsLoggedIn(true);
    }
    console.log(getUser);
  }, []);

  // console.log(fishCatches);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <div
        className="App"
        style={{
          height: `${viewport.height}px`,
        }}
      >
        {isLoggedIn && (
          <AddBoxIcon
            fontSize="large"
            style={{
              position: "fixed",
              top: "60px",
              right: "10px",
              zIndex: "1000",
            }}
          />
        )}
        <Sidebar />
        <MapView />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
