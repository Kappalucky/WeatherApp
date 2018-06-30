import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cityData: {
      cityName: '',
      cityID: '',
      country: '',
      coordinates: {
        latitude: '',
        longitude: '',
      },
      weatherData: [],
      loading: true,
    },
    userData: {
      cityInput: '',
      currentLocation: {
        latitude: '',
        longitude: '',
        name: '',
      },
    },
  },
  getters: {
    // Get weather by geographical location
  },
  mutations: {
    ADD_USER_INPUT: (state, cityInput) => {
      state.userData.cityInput = cityInput;
      // Function to find cityID based on city name
    },
    SET_WEATHER_DATA: (state, { weather }) => {
      state.cityData.weatherData = weather;
    },
  },
  actions: {
    LOAD_USER_INPUT: (context, cityInput) => {
      context.commit('ADD_USER_INPUT', cityInput);
    },
    LOAD_CITY_WEATHER: function load({ commit }) {
      const API_KEY = '6e6d2d2ccd4f746698bca6b482d1507f';
      let tempUnit = 'metric';
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&units=${tempUnit}&APPID=${API_KEY}`)
        .then((response) => {
          commit('SET_WEATHER_DATA', { weather: response.data });
        }, (err) => {
          console.log(err);
        });
    },
  },
});
