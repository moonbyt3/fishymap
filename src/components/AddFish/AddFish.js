import React from 'react';

import { slide as AddFishMenu } from 'react-burger-menu';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Input } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

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

const handleFishSubmit = (e) => {
  e.preventDefault();
  console.log('submit');
  alert('To be developed...');
};

const AddFish = () => {
  const classes = useStyles();
  const [picture, setPicture] = React.useState({ file: '' });

  const handlePictureUpload = (event) => {
    setPicture({
      file: URL.createObjectURL(event.target.files[0]),
    });
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
          />
          <AddFishPicture style={{ marginBottom: '15px' }}>
            <img src={picture.file || ''} />

            <input
              accept='image/*'
              className={classes.input}
              id='contained-button-file'
              multiple
              type='file'
              onChange={handlePictureUpload}
            />
            <label htmlFor='contained-button-file'>
              <Button variant='contained' color='primary' component='span'>
                Fotografija
                <PhotoCamera style={{ marginLeft: '5px' }} />
              </Button>
            </label>
          </AddFishPicture>
          <Input placeholder='Vrsta ribe' style={{ marginBottom: '15px' }} />
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
