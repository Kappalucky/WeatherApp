import WeatherAPI from '@/services/WeatherAPI';

const apiKey = '6e6d2d2ccd4f746698bca6b482d1507f';

export default {
  // Return Current weather data by city name
  getWeatherNow(params) {
    // return Api().get(`id=${params}&APPID=${apiKey}`);
    return WeatherAPI().get(`weather?q=${params.city}&APPID=${apiKey}`);
  },
  getCurrentWeatherById(params) {
    return WeatherAPI().get(`weather?id=${params.id}&APPID=${apiKey}`);
  },
  getCurrentWeatherByZip(params) {
    return WeatherAPI().get(`weather?zip=${params.zip}&APPID=${apiKey}`);
  },
  getCurrentWeather(params) {
    return WeatherAPI().get(`weather?lat=${params.lat}&lon=${params.lon}&APPID=${apiKey}`);
  },
  getForecast(params) {
    return WeatherAPI().get(`forecast?id=${params.id}&APPID=${apiKey}`);
  },
  getForecastTwoWeek(params) {
    return WeatherAPI().get(`forecast?id=${params.id}&APPID=${apiKey}`);
  },
};
