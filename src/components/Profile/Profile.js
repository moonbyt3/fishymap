import React, { useState, useEffect, useContext } from "react";

import { AuthContext } from "../../App";

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

const Profile = () => {
  const Auth = useContext(AuthContext);

  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(Auth.user || null);
  }, [Auth.user]);
  console.log(user);
  return (
    <>
      {user && (
        <>
          <ProfileWrapper>
            <ProfileCard>
              <ProfileCardImg>
                {user.profilePicture._url && (
                  <img
                    src={Auth.user.profilePicture._url || ""}
                    alt="User Avatar"
                  />
                )}
              </ProfileCardImg>
              <ProfileCardText>
                <ProfileCardTextTitle>{user.username}</ProfileCardTextTitle>
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
