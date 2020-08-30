import React, { useContext } from 'react';
import { WarningIconWrapper } from './WarningIcon.css';

import { AuthContext } from '../../App';

const WarningIcon = () => {
  const Auth = useContext(AuthContext);
  const getGeoLocation = () => {
    navigator.permissions
      .query({
        name: 'geolocation',
      })
      .then(function (result) {
        if (result.state == 'prompt') {
          navigator.geolocation.getCurrentPosition((data) => {
            let position = [data.coords.latitude, data.coords.longitude];
            Auth.setUserLocation(position);
            console.log(position);
          });
        } else if (result.state == 'denied') {
          alert('Go to browser settings and enable GeoLocation');
        }
      });
  };

  return (
    <WarningIconWrapper
      title="Please enable browser GeoLocation"
      onClick={getGeoLocation}
    >
      !
    </WarningIconWrapper>
  );
};

export default WarningIcon;
