import React from 'react';
import { Popup } from 'react-leaflet';

import CardFish from '../CardFish/CardFish';

import fishImage from '../../assets/img/fish.png';
import avatar from '../../assets/img/icons/avatar.png';

const MarkerPopup = (props) => {
  const { name } = props.data;

  return (
    <Popup>
      <CardFish
        data={{
          name: name,
          fishImage: fishImage,
          avatar: avatar,
        }}
      />
    </Popup>
  );
};

export default MarkerPopup;
