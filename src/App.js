import React from 'react'
import MapView from './components/MapView/MapView'
import Navigation from './components/Navigation/Navigation'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Navigation />
      <MapView />
    </div>
  );
}

export default App;
