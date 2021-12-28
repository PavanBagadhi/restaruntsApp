import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import classes from '../Header/Header.module.css';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import SearchFeild from '../Header/SearchFeild';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const data = useSelector((state) => state.data);
  return (
    <AppBar
      style={{
        backgroundColor: '#800040',
      }}
    >
      <Toolbar>
        <Link to="/restarunts">
          <RestaurantIcon style={{ fontSize: '60px', color: 'white' }} />
        </Link>
        <Typography variant="h4" className={classes.headerName}>
          Restarunts
        </Typography>
        {data.length !== 0 && <SearchFeild />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
