import Api from '@/services/Api';

const apiKey = '6e6d2d2ccd4f746698bca6b482d1507f';
export default {
  getWeather(params) {
    return Api().get(`id=${params}&APPID=${apiKey}`);
  },
};
