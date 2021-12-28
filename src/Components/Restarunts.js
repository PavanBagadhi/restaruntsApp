import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi, fetchApiByCurrentLocation } from '../Store/ActionCreators';
import Classes from '../Components/Restarunts.module.css';
import { CircularProgress, Container, Typography } from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';
import LocationOnOutlined from '@material-ui/icons/LocationOnOutlined';
import Header from './Header/Header';
import { NavLink, useParams } from 'react-router-dom';
import { states } from '../db.json';

const Restarunts = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const filteredData = useSelector((state) => state.filteredData);
  const status = useSelector((state) => state.status);
  console.log(params);

  useEffect(() => {
    dispatch({type:"RE_SET"})
    if (params.state === 'currentLocation') {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(
          fetchApiByCurrentLocation(
            position.coords.latitude,
            position.coords.longitude
          )
        );
      });
    } else {
      const filteredState = states.find((val) => val.state === params.state);
      console.log(filteredState);

      dispatch(fetchApi(filteredState.state_code));
    }
  }, [dispatch]);
  console.log(status)
  return (
    <div>
      <Header />
      {status !== 200 && <CircularProgress className={Classes.loading} />}
      <ul className={Classes.ul}>
        {filteredData.map((restarunt) => {
          return (
            <NavLink to={`/restarunts/details/${restarunt.restaurant_id}`}>
              <li key={restarunt.restaurant_id} className={Classes.li}>
                <Container>
                  <Typography variant="h5" className={Classes.RestaruntName}>
                    {restarunt.restaurant_name}
                  </Typography>
                  <Typography paragraph className={Classes.para}>
                    {restarunt.restaurant_phone}
                    <span>
                      <CallIcon
                        fontSize={'small'}
                        style={{ marginLeft: '10px', color: 'grey' }}
                      />
                    </span>
                  </Typography>
                </Container>
                <Typography paragraph className={Classes.address}>
                  <LocationOnOutlined />
                  {`${restarunt.address.formatted}`}
                </Typography>
              </li>
            </NavLink>
          );
        })}
      </ul>
      {(status === 200) & (filteredData.length === 0) && (
        <Typography paragraph className={Classes.noRestarunts}>
          No Restarunts found in your Location
        </Typography>
      )}
    </div>
  );
};
export default Restarunts;
