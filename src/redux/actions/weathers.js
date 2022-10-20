import { GET_WEATHER, SET_DATE, SET_LOADED, SET_VALUE } from "../types/type";
import axios from 'axios';

export const fetchWeathers = (valueCity) => (dispatch) => {
   dispatch(setLoaded(false));
   dispatch(setDate());
   axios.get(`https://api.openweathermap.org/data/2.5/forecast?cnt=40&q=${valueCity ? valueCity : 'Львів'}&units=metric&lang=ua&appid=d7b7b523698aafc14174d8799d56bf81`)
      .then(({ data }) => dispatch(getWeathers(data)))
      .catch((err) => {
         console.warn(err)
         alert('Введіть коректне зачення!')
      })
};

export const getWeathers = (data) => ({
   type: GET_WEATHER,
   payload: data
})

export const setLoaded = (value) => ({
   type: SET_LOADED,
   payload: value
})

export const setValueInputCity = (value) => ({
   type: SET_VALUE,
   payload: value,

})

export const setDate = (date, hours, days) => ({
   type: SET_DATE,
   date: date,
   hours: hours,
   days: days
})