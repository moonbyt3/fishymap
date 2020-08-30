import React, { useState, useEffect } from 'react';
import Parse from 'parse';

import MapView from './components/MapView/MapView';
import Sidebar from './components/Sidebar/Sidebar';
import AddFish from './components/AddFish/AddFish';

import WarningIcon from './components/WarningIcon/WarningIcon';

import './App.scss';

Parse.initialize(
  'e4X0mA6gyPKujy5nMcZVX3UuUfnyMv3BN0t8RCVX', // Application ID
  'XAx1ND5eWojCzGhUkH1aMo4OeotoirZvDP5qqaDC' // Javascript key
);
Parse.serverURL = 'https://parseapi.back4app.com';

let viewport = {
  height: window.innerHeight,
};

export const AuthContext = React.createContext(null);

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
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        userLocation,
        setUserLocation,
      }}
    >
      <div
        className="App"
        style={{
          height: `${viewport.height}px`,
        }}
      >
        {isLoggedIn && <AddFish />}
        {/* If user doesnt allow his geolocation deny it from accessing sidemenu and show warning icon */}
        {userLocation && <Sidebar />}
        {!userLocation && <WarningIcon />}
        <MapView />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
