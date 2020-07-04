import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';

import CardFish from '../CardFish/CardFish';

import {
  ProfileWrapper,
  ProfileCard,
  ProfileCardImg,
  ProfileCardText,
  ProfileCardTextTitle,
} from './profile.css';

import fishImage from '../../assets/img/fish.jpg';
import avatar from '../../assets/img/icons/avatar.png';
import fishIcon from '../../assets/fish.svg';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const Profile = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(firebase.auth().currentUser);
    // console.log(user);
  });
  return (
    <>
      {user && (
        <>
          <ProfileWrapper>
            <ProfileCard>
              <ProfileCardImg>
                <img src={user.photoURL} alt='' />
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
                  aria-label='recipe'
                  style={{ background: 'transparent', overflow: 'initial' }}
                >
                  <img src={fishIcon} alt='' />
                </Avatar>
              }
              title='Ponton'
              subheader='14. Jul 2020.'
            />
            <CardMedia
              image={fishImage}
              title='Štuka'
              style={{ height: '0', paddingTop: '56.25%' }}
            />
          </Card>
          <Card>
            <CardHeader
              avatar={
                <Avatar
                  aria-label='recipe'
                  style={{ background: 'transparent', overflow: 'initial' }}
                >
                  <img src={fishIcon} alt='' />
                </Avatar>
              }
              title='Ušće Brke i Save'
              subheader='14. Jul 2020.'
            />
            <CardMedia
              image={fishImage}
              title='Štuka'
              style={{ height: '0', paddingTop: '56.25%' }}
            />
          </Card>
        </>
      )}
    </>
  );
};

export default Profile;
