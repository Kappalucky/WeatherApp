import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    unitStatus: '', // Default to Fahrenheit
    cities: [
      /* cityId: '',
      weatherData: [],
      forecastData: [], */
    ],
  },
  getters: {
    getcities: state => state.cities,
    getCityById: state => id => state.cities.find(item => item.id === id),
  },
  mutations: {
    ADD_CITY: (state, payload) => {
      const newCity = {
        id: payload.id,
        data: payload.data,
      };

      state.cities.unshift(newCity);
    },
    TOGGLE_CITY: (state, payload) => {
      // add new data in city
      const item = state.cities.find(city => city.id === payload);
      item.data = payload.data;
      // make if statement. if id found, change data, else ADD_CITY
    },
    DELETE_CITY: (state, payload) => {
      const index = state.cities.findIndex(city => city.id === payload);
      state.cities.splice(index, 1);
    },
    /* addCity(state, payload) {
      this.state.cities.cityId = payload.id;
      state.cities.weatherData.push(payload.data);
    },
    addCityData(state, payload) {
      // Add city data with id being the 'key' to find the data
      state.cityData.push(payload);
    },
    addForecastData(state, payload) {
      state.cities.forecastData.push(payload.data);
    },
    changeUnitStatus(state, payload) {
      this.state.unitStatus = payload.status;
    }, */
  },
  actions: {
    addCity: (context, payload) => {
      context.commit('ADD_CITY', payload);
    },
    toggleCity: (context, payload) => {
      context.commit('TOGGLE_CITY', payload);
    },
    deleteCity: (context, payload) => {
      context.commit('DELETE_CITY', payload);
    },
    convertTemp(temp) {
      // Kelvin to Fahrenheit
      if (this.state.unitStatus === 'F') {
        return (temp * (9 / 5) - 459.67).toFixed(0);
        // Kelvin to Celsius
      } else if (this.state.unitStatus === 'C') {
        return (temp - 273.15).toFixed(0);
      }
      // Default to Kelvin
      return temp.toFixed(0);
    },
  },
});
