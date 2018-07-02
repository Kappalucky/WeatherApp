import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
      state.cities.cityId = payload.id;
      state.cities.weatherData.push(payload.data);
    },
    addCityData(state, payload) {
      // Add city data with id being the 'key' to find the data
      state.cityData.push(payload);
    },
  },
});
