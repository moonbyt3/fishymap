import React, {useState} from 'react'
import * as firebase from 'firebase'
import MapView from './components/MapView/MapView'
import Navigation from './components/Navigation/Navigation'
import './App.scss'
import firebaseConfig from './firebase.config'

firebase.initializeApp(firebaseConfig)

export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }} >
      <div className="App">
        <Navigation />
        <MapView />
      </div>
     </AuthContext.Provider>
  );
}

export default App;
