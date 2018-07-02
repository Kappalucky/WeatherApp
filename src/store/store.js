import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // cityData: [],
    cities: {
      cityId: '',
      weatherData: [],
    },
  },
  getters: {
    // getCityId: state => state.cities.map(city => city.cityId),
    // getCityById: state => state.cities.find(city => city.cityId),
  },
  mutations: {
    addCity(state, payload) {
      state.cities.weatherData.id = payload.id;
      state.cities.weatherData.push(payload.data);
    },
    addCityData(state, payload) {
      // Add city data with id being the 'key' to find the data
      state.cityData.push(payload);
    },
  },
});
