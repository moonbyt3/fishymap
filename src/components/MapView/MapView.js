import React, { useState, useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";
import data from "../../assets/data";
import Markers from "../VenueMarkers";

import Parse from "parse";

import "leaflet/dist/leaflet.css";

const MapView = (props) => {
  const [currentLocation, setCurrentLocation] = useState({
    lat: 44.88017,
    lng: 18.808732,
  });
  const [zoom, useZoom] = useState(15);
  const [fishData, setFishData] = useState([]);

  useEffect(() => {
    const fishCatches = Parse.Object.extend("fishCatches");
    const query = new Parse.Query(fishCatches);
    query.find().then(
      (results) => {
        // You can use the "get" method to get the value of an attribute
        // Ex: response.get("<ATTRIBUTE_NAME>")
        let data = [];
        results.map((fishCatch) => {
          data.push({
            name: fishCatch.get("name"),
            description: fishCatch.get("description"),
            geometry: fishCatch.get("coordinates"),
            createdAt: fishCatch.get("createdAt"),
            species: fishCatch.get("species"),
          });
        });

        if (typeof document !== "undefined") setFishData(data);
      },
      (error) => {
        if (typeof document !== "undefined")
          document.write(
            `Error while fetching fishCatches: ${JSON.stringify(error)}`
          );
        console.error("Error while fetching fishCatches", error);
      }
    );
  }, []);

  return (
    <Map center={currentLocation} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="FishyMap"
      />

      <Markers venues={fishData} />
    </Map>
  );
};

export default MapView;
