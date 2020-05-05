import * as actionTypes from '../actions/actionTypes';

const initalState = {
  currentWeather: {},
  forecast: {},
  loading: false,
  error: null,
  citys: [],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.GET_WEATHER_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionTypes.GET_WEATHER_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        currentWeather: action.payload.currentWeather,
        forecast: action.payload.forecast,
      };
    case actionTypes.GET_WEATHER_FAIL:
      //   console.log(action);
      return {
        ...state,
        currentWeather: {},
        forecast: {},
        loading: false,
        error: action.payload.message,
      };
    case actionTypes.ADD_SEARCHED_CITY:
      return {
        ...state,
        // citys: action.payload,
        citys: state.citys.concat(action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
