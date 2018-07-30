import axios from 'axios';

// Calls unsplash.com api for photo access

export default () =>
  axios.create({
    baseURL: 'http://api.unsplash.com/photos',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Client_id: '88f81e2335d1a4d3ea1815f1f10603ab9b1ada36de51484f4e328d5c94bec9e0',
    },
  });
