import React from 'react';
import { Popup } from 'react-leaflet';

import CardFish from '../CardFish/CardFish';

import fishImage from '../../assets/img/fish.jpg';

const MarkerPopup = (props) => {
  const { name } = props.data;

  return (
    <Popup>
      <CardFish
        name={name}
        fishImage={fishImage}
        avatar="https://github.com/moonbyt3/fishymap/blob/master/src/assets/img/icons/avatar.png?raw=true"
      />
    </Popup>
  );
};

export default MarkerPopup;
