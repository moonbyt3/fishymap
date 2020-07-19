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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    let currentUser = Parse.User.current();
    if (currentUser) {
      setUser(currentUser.attributes);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
      <div
        className='App'
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
