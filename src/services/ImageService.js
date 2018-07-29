import ImagesAPI from '@/services/ImagesAPI';
import axios from 'axios';

const clientId = 'Client_id 88f81e2335d1a4d3ea1815f1f10603ab9b1ada36de51484f4e328d5c94bec9e0';

export default {
  getRandom() {
    return axios.get('https://api.unsplash.com/photos/random?landscape?query=star+sky&client_id=88f81e2335d1a4d3ea1815f1f10603ab9b1ada36de51484f4e328d5c94bec9e0');
  },
  getRandomByWeather(params) {
    return ImagesAPI.get(`random?orientation=landscape&query=${params.type}?client_id=${clientId}`);
  },
};
