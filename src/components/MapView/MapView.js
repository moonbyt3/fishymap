import React, { useState, useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";
import data from "../../assets/data";
import Markers from "../VenueMarkers";

import "leaflet/dist/leaflet.css";

const MapView = (props) => {
  const [currentLocation, setCurrentLocation] = useState({
    lat: 44.88017,
    lng: 18.808732,
  });
  const [zoom, useZoom] = useState(15);
  const [fishData, setFishData] = useState(null);
  useEffect(() => {
    setFishData({});
  }, []);

  return (
    <Map center={currentLocation} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="FishyMap"
      />

      <Markers venues={data.venues} />
    </Map>
  );
};

export default MapView;
