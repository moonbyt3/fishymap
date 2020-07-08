import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import MapView from './components/MapView/MapView';
import Sidebar from './components/Sidebar/Sidebar';
import './App.scss';
import firebaseConfig from './firebase.config';
import AddBoxIcon from '@material-ui/icons/AddBox';

firebase.initializeApp(firebaseConfig);

let viewport = {
  height: window.innerHeight,
};

export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    firebase.auth().currentUser || false
  );
  const [user, setUser] = useState(null);
  const [fishCatches, setFishCatches] = useState(null);
  useEffect(() => {
    setFishCatches(
      firebase.database().ref("/fishCatches").once("value").then(
        (snapshot) => {
          setFishCatches(snapshot.val());
        }
      )
    );

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setIsLoggedIn(true);
        setUser({ user: user });
      }
    });
  }, []);

  // console.log(fishCatches);
  
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <div
        className='App'
        style={{
          height: `${viewport.height}px`,
        }}
      >
        {isLoggedIn && (
          <AddBoxIcon
            fontSize='large'
            style={{
              position: 'fixed',
              top: '60px',
              right: '10px',
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
