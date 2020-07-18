import React from "react";
import { Popup } from "react-leaflet";

import CardFish from "../CardFish/CardFish";

import fishImage from "../../assets/img/fish.jpg";

const MarkerPopup = (props) => {
  const { name, species, createdAt } = props.data;
  console.log(props.data);

  return (
    <Popup>
      <CardFish
        name={name}
        fishImage={fishImage}
        fishSpecies={species}
        time={createdAt}
        avatar="https://github.com/moonbyt3/fishymap/blob/master/src/assets/img/icons/fishing.svg"
      />
    </Popup>
  );
};

export default MarkerPopup;
