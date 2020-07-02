import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import MapView from './components/MapView/MapView';
import Sidebar from './components/Sidebar/Sidebar';
import './App.scss';
import firebaseConfig from './firebase.config';
import AddBoxIcon from '@material-ui/icons/AddBox';

firebase.initializeApp(firebaseConfig);

export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    firebase.auth().currentUser || false
  );
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      setIsLoggedIn(true);
      setUser({ user: user });
    });
  }, []);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <div className='App'>
        {isLoggedIn && (
          <AddBoxIcon
            fontSize='large'
            style={{
              position: 'fixed',
              top: '90px',
              right: '36px',
              zIndex: '1000',
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
