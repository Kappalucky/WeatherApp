import axios from 'axios';

export default () => axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
