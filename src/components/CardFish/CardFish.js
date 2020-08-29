import React from 'react';
import moment from 'moment';
import 'moment/locale/sr';

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

const CardFish = (props) => {
  const { name, fishImage, avatar, fishSpecies, time } = props;
  console.log(props);
  return (
    <CardFishWrapper>
      <CardFishMediaWrapper>
        <CardFishTitle>{name}</CardFishTitle>
        <CardFishMedia>
          <img src={fishImage._url} alt="" />
        </CardFishMedia>
      </CardFishMediaWrapper>
      <CardFishData>
        <CardFishDataItem>
          <CardFishDataItemTitle>Težina</CardFishDataItemTitle>
          <CardFishDataItemText>1.6kg</CardFishDataItemText>
        </CardFishDataItem>
        <CardFishDataItem>
          <CardFishDataItemTitle>Vrsta</CardFishDataItemTitle>
          <CardFishDataItemText>{fishSpecies}</CardFishDataItemText>
        </CardFishDataItem>
        <CardFishDataItem>
          <CardFishDataItemTitle>Vrijeme</CardFishDataItemTitle>
          <CardFishDataItemText>
            <span title={moment(time).startOf('day').fromNow()}>
              {moment(time).format('LT')}
            </span>
          </CardFishDataItemText>
        </CardFishDataItem>
        <CardFishDataItem>
          <img src={avatar} alt="" />
        </CardFishDataItem>
      </CardFishData>
    </CardFishWrapper>
  );
};

export default CardFish;
