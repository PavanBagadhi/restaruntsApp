import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  CircularProgress,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Menu from './Menu/Menu';
import { fetchApiByRestaruntId } from '../Store/ActionCreators';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import classes from '../Components/Restarunts.module.css';

const RestaruntDetails = () => {
  const params = useParams();
  const restaruntDetails = useSelector(
    (state) => state.singleRestaruntData.result
  );
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();
  const history = useHistory();

  const backButtonHandler = () => {
    history.goBack();
  };

  console.log(restaruntDetails);
  useEffect(() => {
    dispatch({type:"RE_SET"})
    
    dispatch(fetchApiByRestaruntId(params.restaruntId));
  }, [dispatch, params]);



  return (
    <div>
      {status !== 200 && <CircularProgress className={classes.loading} />}
      {restaruntDetails && (
        <AppBar style={{ backgroundColor: '#800040' }}>
          <Toolbar>
            <Button onClick={backButtonHandler}>
              <ArrowBackIosIcon style={{ fontSize: '60px', color: 'white' }} />
            </Button>
            <Container>
              <Typography variant="h4">
                {restaruntDetails.restaurant_name}
              </Typography>
              <Typography paragraph>
                <LocationOnIcon />
                {restaruntDetails.address.formatted}
              </Typography>
            </Container>
          </Toolbar>
        </AppBar>
      )}
      {restaruntDetails && (
        <Menu menu={restaruntDetails.menus[0].menu_sections} />
      )}
    </div>
  );
};

export default RestaruntDetails;
