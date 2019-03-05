import Vue from 'vue';
import Vuex from 'vuex';
import WeatherService from '@/services/WeatherService';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    unit: {
      speed: 'mph',
      temp: 'F',
    },
    weatherCard: [], // Max 5
    weatherForecast: [], // Max 5
    errors: {},
  },
  mutations: {
    // Weather Data
    ADD_WEATHER_CARD(state, payload) {
      if (state.weatherCard.length < 5) {
        this.dispatch('getForecast', payload.id);
        state.weatherCard.unshift(payload);
      } else {
        state.errors.weatherCard = "You've reached the max amount of cards you can have";
      }
    },
    ADD_FORECAST(state, payload) {
      state.weatherForecast.unshift(payload);
    },
    // End Weather Data

    // Errors
    CLEAR_ERROR(state) {
      state.errors = {};
    },
    ADD_ERROR(state, payload) {
      state.errors = payload;
    },
    // End Errors

    // Old Data Below
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
    // Old Data Above
  },
  actions: {
    async getWeatherByName({ commit }, params) {
      try {
        const response = await WeatherService.getWeatherNow({
          city: params,
        });

        commit('CLEAR_ERROR');
        commit('ADD_WEATHER_CARD', response.data);
      } catch (error) {
        console.log(error);
        const e = 'name issue';
        commit('ADD_ERROR', e);
      }
    },
    async getWeatherById({ commit }, params) {
      try {
        const response = await WeatherService.getCurrentWeatherById({
          id: params,
        });

        commit('CLEAR_ERROR');
        commit('ADD_WEATHER_CARD', response.data);
      } catch (error) {
        console.log(error);
        const e = 'id issue';
        commit('ADD_ERROR', e);
      }
    },
    async getWeatherByZip({ commit }, params) {
      try {
        const response = await WeatherService.getCurrentWeatherByZip({
          zip: params,
        });

        commit('CLEAR_ERROR');
        commit('ADD_WEATHER_CARD', response.data);
      } catch (error) {
        console.log(error);
        const e = 'zip issue';
        commit('ADD_ERROR', e);
      }
    },
    async getWeatherByGeolocation({ commit }) {
      const newPosition = await new Promise((resolve, reject) => {
        window.navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            console.log(error);
            const e = 'location issue';
            commit('ADD_ERROR', e);
          },
        );
      });
      const response = await WeatherService.getCurrentWeather({
        lat: newPosition.latitude,
        lon: newPosition.longitude,
      });
      commit('ADD_WEATHER_CARD', response.data);
    },
    async getForecast({ commit }, params) {
      try {
        const response = await WeatherService.getForecast({
          id: params,
        });

        commit('CLEAR_ERROR');
        commit('ADD_FORECAST', response.data);
      } catch (error) {
        console.log(error);
        commit('ADD_ERROR', error);
      }
    },
  },
  getters: {
    forecastById: state => id => state.weatherForecast[id],
    forecastByDate: state => id =>
      state.weatherForecast[id].map(item => item.dt_txt.includes('00:00:00')),
  },
});

export default store;
