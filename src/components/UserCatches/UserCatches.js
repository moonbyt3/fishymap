import React, { useContext, useEffect, useState } from 'react';
import Parse from 'parse';
import { CardMedia, Avatar, Card, CardHeader } from '@material-ui/core';
import { AuthContext } from '../../App';
import moment from 'moment';

import { UserCatchesWrapper } from './UserCatches.css';

function UserCatches({ fishImage }) {
  const [userCatches, setUserCatches] = useState(null);
  const Auth = useContext(AuthContext);

  useEffect(() => {
    Parse.Cloud.run('userFishCatches', { userId: Auth.user.userId }).then(
      (results) => {
        let filteredCatches = [];
        for (let i = 0; i < results.length; i++) {
          filteredCatches.push(results[i].attributes);
        }
        setUserCatches(filteredCatches);
      }
    );
  }, []);
  return (
    <UserCatchesWrapper>
      {userCatches &&
        userCatches.map(({ name, species, fishPicture, updatedAt }, i) => {
          console.log(userCatches);
          return (
            <Card key={i}>
              <CardHeader
                title={name}
                subheader={moment(updatedAt).format('lll')}
                style={{ fontSize: '14px' }}
              />
              <CardMedia
                image={fishPicture._url}
                title={species}
                style={{ height: '0', paddingTop: '56.25%' }}
              />
            </Card>
          );
        })}
    </UserCatchesWrapper>
  );
}

export default UserCatches;
