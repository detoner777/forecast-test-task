import * as actionTypes from './actionTypes';
import axios from '../../services/axios-weather';
const KEY = '114bb1a39ac2c5de08d0cab14d69ca83';
export const getWeatherStart = () => {
  return {
    type: actionTypes.GET_WEATHER_START,
  };
};

export const getWeatherSuccess = (currentWeather, forecast) => {
  return {
    type: actionTypes.GET_WEATHER_SUCCESS,
    payload: {
      currentWeather,
      forecast,
    },
  };
};

export const getWeatherFail = (error) => {
  return {
    type: actionTypes.GET_WEATHER_FAIL,
    payload: error,
  };
};

const getCurrentWeather = (name) => {
  return axios.get(`/weather?q=${name}&appid=${KEY}&units=metric`);
};
const getForecast = (name) => {
  return axios.get(`/forecast?q=${name}&appid=${KEY}&units=metric`);
};

export const getWeather = (name) => {
  return (dispatch) => {
    dispatch(getWeatherStart());
    Promise.all([getCurrentWeather(name), getForecast(name)])
      .then((res) => {
        dispatch(getWeatherSuccess(res[0].data, res[1].data));
      })
      .catch((error) => {
        dispatch(getWeatherFail(error));
      });
  };
};
