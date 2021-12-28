import axios from 'axios';

export const storeData = (data) => {
  return { type: 'FETCH_DATA', payload: data };
};

export const singleRestruntData = (data) => {
  return { type: 'SINGLE_RESTARUNT', payload: data };
};

export const setUpStatus = (status) => {
  return { type: 'STATUS', payload: status };
};
export const fetchApi = (state_code) => {
  // 'https://api.documenu.com/v2/restaurants/search/geo?lat=40.688072&lon=-73.997385&distance=1&fullmenu&key=ab4ebe1991d8098458d20afa6cb41991'
  return (dispatch) => {
    axios
      .get(
        `https://api.documenu.com/v2/restaurants/state/${state_code}?key=88d5dc0703ad861f63f9d2330366700c`
      )
      .then((res) => {
        if (res.status === 200) {
          dispatch(setUpStatus(res.status));
        }
        dispatch(storeData(res.data.data));
      });
  };
};

export const fetchApiByRestaruntId = (restaruntId) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.documenu.com/v2/restaurant/${restaruntId}?key=88d5dc0703ad861f63f9d2330366700c`
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(res, "response")
          dispatch(setUpStatus(res.status));
        }
        dispatch(singleRestruntData(res.data));
      });
  };
};

export const fetchApiByCurrentLocation = (lat, long) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.documenu.com/v2/restaurants/search/geo?lat=${lat}&lon=${long}&distance=1&fullmenu&key=88d5dc0703ad861f63f9d2330366700c`
      )
      .then((res) => {
        if (res.status === 200) {
          dispatch(setUpStatus(res.status));
        }
        dispatch(storeData(res.data.data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};
