import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const intialValue = {
  data: [],
  filteredData: [],
  singleRestaruntData: [],
  status:"",
};

const reducer = (state = intialValue, action) => {
  if (action.type === 'FETCH_DATA') {
    return {
      ...state,
      data: action.payload,

      singleRestaruntData: []
    };
  } else if (action.type === 'FILTERED_DATA') {
    return {
      ...state,
     
      filteredData: action.payload,
      singleRestaruntData: []
    };
  } else if (action.type === 'SINGLE_RESTARUNT') {
    return {
      ...state,
      singleRestaruntData: action.payload,
    };
  }
  else if(action.type==="STATUS"){
    return{
      ...state,
      status:action.payload
    }
  }
  else if(action.type==="RE_SET"){
    return intialValue
  }
  return intialValue;
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
