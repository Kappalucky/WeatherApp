import WeatherAPI from '@/services/WeatherAPI';
import env from '@/.env.local';

/* Using WeatherAPI call varies functions to get specific data
from OpenWeather API */

export default {
  // Return Current weather data by city name
  getWeatherNow(params) {
    // return Api().get(`id=${params}&APPID=${apiKey}`);
    return WeatherAPI().get(`weather?q=${params.city}&APPID=${env.VUE_API_KEY}`);
  },
  getCurrentWeatherById(params) {
    return WeatherAPI().get(`weather?id=${params.id}&APPID=${env.VUE_API_KEY}`);
  },
  getCurrentWeatherByZip(params) {
    return WeatherAPI().get(`weather?zip=${params.zip},us&APPID=${env.VUE_API_KEY}`);
  },
  // Return Current weather data by geolocation
  getCurrentWeather(params) {
    return WeatherAPI().get(`weather?lat=${params.lat}&lon=${params.lon}&APPID=${env.VUE_API_KEY}`);
  },
  getForecast(params) {
    return WeatherAPI().get(`forecast?id=${params.id}&APPID=${env.VUE_API_KEY}`);
  },
  getForecastTwoWeek(params) {
    return WeatherAPI().get(`forecast?id=${params.id}&APPID=${env.VUE_API_KEY}`);
  },
};
