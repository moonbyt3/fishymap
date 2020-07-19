import React, { useState, useEffect, useContext } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import Markers from '../VenueMarkers';

import { AuthContext } from '../../App';

import Parse from 'parse';

import 'leaflet/dist/leaflet.css';

const MapView = (props) => {
  const Auth = useContext(AuthContext);
  const [currentLocation, setCurrentLocation] = useState({
    lat: 44.88017,
    lng: 18.808732,
  });
  const [zoom, useZoom] = useState(15);
  const [fishData, setFishData] = useState([]);

  useEffect(() => {
    const fishCatches = Parse.Object.extend('fishCatches');
    const query = new Parse.Query(fishCatches);
    query.find().then(
      (results) => {
        let data = [];
        console.log(props);
        results.map((fishCatch) => {
          return data.push({
            name: fishCatch.get('name'),
            description: fishCatch.get('description'),
            geometry: fishCatch.get('coordinates'),
            createdAt: fishCatch.get('createdAt'),
            species: fishCatch.get('species'),
          });
        });

        if (typeof document !== 'undefined') setFishData(data);
      },
      (error) => {
        if (typeof document !== 'undefined')
          document.write(
            `Error while fetching fishCatches: ${JSON.stringify(error)}`
          );
        console.error('Error while fetching fishCatches', error);
      }
    );
  }, []);

  return (
    <Map center={currentLocation} zoom={zoom}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='FishyMap'
      />

      <Markers venues={fishData} />
    </Map>
  );
};

export default MapView;
