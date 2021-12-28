import { Button, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { states } from '../../db.json';

import classes from './Homepage.module.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FreeSolo from '../UI/FreeSolo';

const Homepage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [locationInput, setLocationInput] = useState();

  const selectHandler = (event) => {
    setLocationInput(event.target.value);
  };

  const clickHandler = () => {
    if (!locationInput) {
      alert('Enter your location');
      return;
    }
    history.push(`/restarunts/${locationInput}`);
  };

  const currentLocationHandler = () => {
    history.push(`/restarunts/currentLocation`);
  };

  useEffect(() => {
    dispatch({ type: 'RE_SET' });
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className={classes.backGround}>
        <FreeSolo states={states} selectHandler={selectHandler} />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          onClick={clickHandler}
          style={{
            backgroundColor: '#800040',
            borderRadius: 0,
            padding: '15px',
            position: 'absolute',
            left: '850px',
            top: '250px',
          }}
        >
          Find Restarunts
        </Button>
        <Typography
          paragraph
          style={{
            borderRadius: 0,
            padding: '15px',
            position: 'absolute',
            left: '650px',
            top: '300px',
            color: '#800040',
          }}
        >
          OR
        </Typography>
        <Button
          variant="outlined"
          color="secondary"
          onClick={currentLocationHandler}
          style={{
            borderRadius: 0,
            padding: '15px',
            position: 'absolute',
            left: '350px',
            top: '350px',
            width: '650px',
            color: '#800040',
          }}
        >
          Locate Me
        </Button>
      </div>
    </>
  );
};

export default Homepage;
