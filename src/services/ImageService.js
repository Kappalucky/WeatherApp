import ImagesAPI from '@/services/ImagesAPI';

/* Using ImagesAPI call varies functions to get specific data
from Unsplash API */

export default {
  getRandom() {
    return ImagesAPI().get('https://api.unsplash.com/photos/random?landscape?query=star+sky');
  },
  getRandomByWeather(params) {
    return ImagesAPI().get(`random?orientation=landscape&query=${params}`);
  },
};
