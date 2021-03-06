import React, { Fragment } from 'react';
import { Marker } from 'react-leaflet';
import { VenueLocationIcon } from './MarkerIcon';
import MarkerPopup from './MarkerPopup/MarkerPopup';

const VenueMarkers = (props) => {
  const { venues } = props;

  const markers = venues.map((venue, index) => {
    console.log('ven', venue.geometry);
    return (
      venue.geometry && (
        <Marker key={index} position={venue.geometry} icon={VenueLocationIcon}>
          <MarkerPopup data={venue} />
        </Marker>
      )
    );
  });

  return <Fragment>{markers}</Fragment>;
};

export default VenueMarkers;
