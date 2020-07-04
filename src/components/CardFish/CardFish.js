import React from 'react';

import {
  CardFishWrapper,
  CardFishTitle,
  CardFishMediaWrapper,
  CardFishMedia,
  CardFishData,
  CardFishDataItem,
  CardFishDataItemTitle,
  CardFishDataItemText,
} from './cardFish.css';

import fishImage from '../../assets/img/fish.jpg';
import avatar from '../../assets/img/icons/avatar.png';

const CardFish = (props) => {
  const { name, fishImage, avatar } = props;

  return (
    <CardFishWrapper>
      <CardFishMediaWrapper>
        <CardFishTitle>{name}</CardFishTitle>
        <CardFishMedia>
          <img src={fishImage} alt='' />
        </CardFishMedia>
      </CardFishMediaWrapper>
      <CardFishData>
        <CardFishDataItem>
          <CardFishDataItemTitle>Težina</CardFishDataItemTitle>
          <CardFishDataItemText>1.6kg</CardFishDataItemText>
        </CardFishDataItem>
        <CardFishDataItem>
          <CardFishDataItemTitle>Vrsta</CardFishDataItemTitle>
          <CardFishDataItemText>Štuka</CardFishDataItemText>
        </CardFishDataItem>
        <CardFishDataItem>
          <CardFishDataItemTitle>Vrijeme</CardFishDataItemTitle>
          <CardFishDataItemText>08:00</CardFishDataItemText>
        </CardFishDataItem>
        <CardFishDataItem>
          <img src={avatar} alt='' />
        </CardFishDataItem>
      </CardFishData>
    </CardFishWrapper>
  );
};

export default CardFish;
