import Api from '@/services/Api';

const apiKey = '6e6d2d2ccd4f746698bca6b482d1507f';
export default {
  getWeatherNow(params) {
    // return Api().get(`id=${params}&APPID=${apiKey}`);
    return Api().get(`weather?q=${params.city}&APPID=${apiKey}`);
  },
  getForecast(params) {
    return Api().get(`forecast?id=${params.id}&APPID=${apiKey}`);
  },
};
