import axios from 'axios';
import { GET_WEATHER, SET_DATE, SET_LOADED, SET_VALUE } from '../types/type';

export const fetchWeathers = (valueCity) => (dispatch) => {
  dispatch(setLoaded(false));
  dispatch(setDate());

  const params = new URLSearchParams();
  params.append('cnt', '40');
  params.append('q', valueCity ? valueCity : 'Львів');
  params.append('units', 'metric');
  params.append('lang', 'ua');
  params.append('appid', 'd7b7b523698aafc14174d8799d56bf81');

  axios
    .get(`https://api.openweathermap.org/data/2.5/forecast?`, { params })
    .then(({ data }) => dispatch(getWeathers(data)))
    .catch((err) => {
      console.warn(err);
      alert('Введіть коректне зачення!');
    });
};

export const getWeathers = (data) => ({
  type: GET_WEATHER,
  payload: data,
});

export const setLoaded = (value) => ({
  type: SET_LOADED,
  payload: value,
});

export const setValueInputCity = (value) => ({
  type: SET_VALUE,
  payload: value,
});

export const setDate = (date, hours, days) => ({
  type: SET_DATE,
  date: date,
  hours: hours,
  days: days,
});
