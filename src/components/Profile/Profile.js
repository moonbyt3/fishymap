import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';

import data from '../../assets/data';

import {
  ProfileWrapper,
  ProfileCard,
  ProfileCardImg,
  ProfileCardText,
  ProfileCardTextTitle,
} from './profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(firebase.auth().currentUser);
    // console.log(user);
  });
  return (
    <ProfileWrapper>
      {user && (
        <>
          <ProfileCard>
            <ProfileCardImg>
              <img src={user.photoURL} alt='' />
            </ProfileCardImg>
            <ProfileCardText>
              <ProfileCardTextTitle>{user.displayName}</ProfileCardTextTitle>
            </ProfileCardText>
          </ProfileCard>
          {/* <MarkerPopup data={data} /> */}
        </>
      )}
    </ProfileWrapper>
  );
};

export default Profile;
