import axios from 'axios';
import env from '@/.env.local';

// Calls unsplash.com api for photo access

export default () =>
  axios.create({
    baseURL: 'https://api.unsplash.com/photos/',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Client-ID ${env.VUE_APP_CLIENT_ID}`,
    },
  });
