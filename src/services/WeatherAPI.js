import axios from 'axios';

// Calls openweathermap.org api for weather data based on search query

export default () =>
  axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
