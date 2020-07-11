import React, { useState, useEffect } from "react";

import Parse from "parse";

import CardFish from "../CardFish/CardFish";

import {
  ProfileWrapper,
  ProfileCard,
  ProfileCardImg,
  ProfileCardText,
  ProfileCardTextTitle,
} from "./profile.css";

import fishImage from "../../assets/img/fish.jpg";
import fishIcon from "../../assets/fish.svg";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

const Profile = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // setUser(firebase.auth().currentUser);
    var userInfo = new Parse.Object("User");
    var query = new Parse.Query(userInfo);

    query.include("Addresss");
    query.include("name");

    query.equalTo("objectId", "moonbyt3");
    query.find({
      success: function (results) {
        console.log(results);
      },
      error: function (error) {
        console.error("Error: " + error.code + " " + error.message);
      },
    });

    console.log(user);
  });
  return (
    <>
      {user && (
        <>
          <ProfileWrapper>
            <ProfileCard>
              <ProfileCardImg>
                <img
                  src={
                    user.photoURL ||
                    "https://github.com/moonbyt3/fishymap/blob/master/src/assets/img/icons/avatar.png?raw=true"
                  }
                  alt=""
                />
              </ProfileCardImg>
              <ProfileCardText>
                <ProfileCardTextTitle>{user.displayName}</ProfileCardTextTitle>
              </ProfileCardText>
            </ProfileCard>
          </ProfileWrapper>
          <Card>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  style={{ background: "transparent", overflow: "initial" }}
                >
                  <img src={fishIcon} alt="" />
                </Avatar>
              }
              title="Ponton"
              subheader="14. Jul 2020."
            />
            <CardMedia
              image={fishImage}
              title="Štuka"
              style={{ height: "0", paddingTop: "56.25%" }}
            />
          </Card>
          <Card>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  style={{ background: "transparent", overflow: "initial" }}
                >
                  <img src={fishIcon} alt="" />
                </Avatar>
              }
              title="Ušće Brke i Save"
              subheader="14. Jul 2020."
            />
            <CardMedia
              image={fishImage}
              title="Štuka"
              style={{ height: "0", paddingTop: "56.25%" }}
            />
          </Card>
        </>
      )}
    </>
  );
};

export default Profile;
