import React from 'react'
import {Popup} from 'react-leaflet'

import {
  MarkerPopupWrapper,
  MarkerPopupTitle,
  MarkerPopupMediaWrapper,
  MarkerPopupMedia,
  MarkerPopupData,
  MarkerPopupDataItem,
  MarkerPopupDataItemTitle,
  MarkerPopupDataItemText,
} from './markerPopup.css';

import FishImage from '../../assets/img/fish.png'
import Avatar from '../../assets/img/icons/avatar.png'

const MarkerPopup = (props) => {
  const { name } = props.data;
  console.log(name);

  return  (
    <Popup>
      <MarkerPopupWrapper>
        <MarkerPopupMediaWrapper>
          <MarkerPopupTitle>{name}</MarkerPopupTitle>
          <MarkerPopupMedia>
            <img src={FishImage} alt=""/>
          </MarkerPopupMedia>
        </MarkerPopupMediaWrapper>
        <MarkerPopupData>
          <MarkerPopupDataItem>
            <MarkerPopupDataItemTitle>Težina</MarkerPopupDataItemTitle>
            <MarkerPopupDataItemText>1.6kg</MarkerPopupDataItemText>
          </MarkerPopupDataItem>
          <MarkerPopupDataItem>
            <MarkerPopupDataItemTitle>Vrsta</MarkerPopupDataItemTitle>
            <MarkerPopupDataItemText>Štuka</MarkerPopupDataItemText>
          </MarkerPopupDataItem>
          <MarkerPopupDataItem>
            <MarkerPopupDataItemTitle>Vrijeme</MarkerPopupDataItemTitle>
            <MarkerPopupDataItemText>08:00</MarkerPopupDataItemText>
          </MarkerPopupDataItem>
          <MarkerPopupDataItem>
            <img src={Avatar} alt=""/>
          </MarkerPopupDataItem>
        </MarkerPopupData>
        
      </MarkerPopupWrapper>
    </Popup>
  );
};

export default MarkerPopup;
