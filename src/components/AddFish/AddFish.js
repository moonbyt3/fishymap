import React, {useState, useContext} from 'react';

import Parse from 'parse';

import { slide as AddFishMenu } from 'react-burger-menu';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Input } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import { AuthContext } from '../../App';

import {
  AddFishWrapper,
  AddFishForm,
  AddFishPicture,
  AddFishButtonWrap,
} from './addFish.css';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  tabIcon: {
    minWidth: 'auto',
  },
  input: {
    display: 'none',
  },
}));

const AddFish = () => {
  const classes = useStyles();
  const [picture, setPicture] = useState(null);
  const [pictureName, setPictureName] = useState('');
  const [placeName, setPlaceName] = useState('');
  const [fishSpecies, setFishSpecies] = useState('');

  const Auth = useContext(AuthContext);

  // Function for converting image to base64 format
  const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
  }

  const handlePictureSelect = (event) => {
    setPictureName(event.target.files[0].name);
    // convert image to base64
    getBase64(event.target.files[0], (imgBase64) => {
      setPicture(imgBase64);
    })
  };

  const handleFishPlace = (event) => {
    setPlaceName(event.target.value);
  }

  const handleFishName = (event) => {
    setFishSpecies(event.target.value);
  }

  const handleFishSubmit = (e) => {
    e.preventDefault();
    const fishImage = new Parse.File(pictureName, {base64: picture});
    const FishCatch = Parse.Object.extend('fishCatches');
    const fishCatch = new FishCatch();
    fishCatch.set('name', placeName);
    fishCatch.set('species', fishSpecies);
    fishCatch.set('userId', Auth.user.userId);
    fishCatch.set('fishPicture', fishImage);
    fishCatch.set('coordinates', Auth.userLocation);
    
    fishCatch.save().then((data) => {
      console.log('Fish catch sucessifully saved to the database.');
      setPicture(null);
      setPictureName('')
      setPlaceName('')
      setFishSpecies('')
    }, (error) => {
      alert('Failed to create new object, with error code: ' + error.message);
    })
  };

  return (
    <AddFishWrapper>
      <AddFishMenu right>
        <AddFishForm onSubmit={handleFishSubmit}>
          <span style={{ display: 'block', margin: '50px 0 30px' }}>
            Dodajte novi ulov
          </span>
          <Input
            placeholder='Ime mjesta ulova'
            style={{ marginBottom: '15px' }}
            onChange={handleFishPlace}
            value={placeName}
          />
          <AddFishPicture style={{ marginBottom: '15px' }}>
            <img style={{display: 'block', maxHeight: '130px', padding: '0 15px', margin: '0 auto 15px'}} src={picture && picture} />

            <input
              accept='image/*'
              className={classes.input}
              id='contained-button-file'
              multiple
              type='file'
              onChange={handlePictureSelect}
            />
            <label htmlFor='contained-button-file'>
              <Button variant='contained' color='primary' component='span'>
                Fotografija
                <PhotoCamera style={{ marginLeft: '5px' }} />
              </Button>
            </label>
          </AddFishPicture>
          <Input placeholder='Vrsta ribe' style={{ marginBottom: '15px' }} value={fishSpecies} onChange={handleFishName} />
          <AddFishButtonWrap>
            <Button variant='contained' color='primary' type='submit'>
              Pošalji
            </Button>
          </AddFishButtonWrap>
        </AddFishForm>
      </AddFishMenu>
    </AddFishWrapper>
  );
};

export default AddFish;
