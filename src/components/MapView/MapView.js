import React, { useState } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import data from '../../assets/data';
import Markers from '../VenueMarkers';

import useLongPress from '../../helpers/longPress';

import 'leaflet/dist/leaflet.css';

const alertMessage = () => {
  return console.log('long click press');
};

const MapView = (props) => {
  const [currentLocation, setCurrentLocation] = useState({
    lat: 44.87278,
    lng: 18.80833,
  });
  const [zoom, useZoom] = useState(15);

  const clickLongPress = useLongPress(alertMessage, 1000);

  return (
    <Map center={currentLocation} zoom={zoom} {...clickLongPress}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="FishyMap"
      />

      <Markers venues={data.venues} />
    </Map>
  );
};

export default MapView;
