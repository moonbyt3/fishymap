import React, { useState, useEffect } from 'react';
import Parse from 'parse';

import MapView from './components/MapView/MapView';
import Sidebar from './components/Sidebar/Sidebar';
import AddFish from './components/AddFish/AddFish';
import './App.scss';
import AddBoxIcon from '@material-ui/icons/AddBox';

Parse.initialize(
  'e4X0mA6gyPKujy5nMcZVX3UuUfnyMv3BN0t8RCVX', // Application ID
  'XAx1ND5eWojCzGhUkH1aMo4OeotoirZvDP5qqaDC' // Javascript key
);
Parse.serverURL = 'https://parseapi.back4app.com';

let viewport = {
  height: window.innerHeight,
};

export const AuthContext = React.createContext(null);

//function that gets the location and returns it
function getLocation() {}
//function that retrieves the position
function showPosition(position) {
  var location = {
    longitude: position.coords.longitude,
    latitude: position.coords.latitude,
  };
}
//request for location
getLocation();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    let currentUser = Parse.User.current();
    if (currentUser) {
      setUser({
        userId: currentUser.id,
        username: currentUser.get('username'),
        profilePicture: currentUser.get('profilePicture'),
      });
      setIsLoggedIn(true);
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((data) => {
        let position = [data.coords.latitude, data.coords.longitude];
        setUserLocation(position);
      });
    } else {
      alert('Geo Location not supported by browser');
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, user, setUser, userLocation }}
    >
      <div
        className="App"
        style={{
          height: `${viewport.height}px`,
        }}
      >
        {isLoggedIn && <AddFish />}
        <Sidebar />
        <MapView />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
