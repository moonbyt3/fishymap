import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import Markers from './VenueMarkers';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 44.87278, lng: 18.80833 },
      zoom: 15,
    };
  }

  render() {
    const { currentLocation, zoom } = this.state;

    return (
      <Map center={currentLocation} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="FishyMap"
        />

        <Markers venues={data.venues} />
      </Map>
    );
  }
}

export default MapView;
