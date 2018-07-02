<template>
        <b-container id="select-location" class="home">
            <b-row align-v="center">
                <b-col align-self="center">
                    <div class="main-search">
                      <b-form class="form-group">
                        <h2>Search for city or use current location</h2>
                        <b-form-group>
                           <b-form-input type="text" placeholder="Enter a city/town name..."
                            v-on:keydown.enter="getWeatherNow"
                            v-model="cityInput"
                            class="form-control"/>
                        </b-form-group>
                        <b-form-group>
                          <b-button variant="outline-success"
                            @click="getCurrentWeather" v-if="locationStatus"
                            type="submit" id="find-location">Current Weather</b-button>
                            <b-button variant="outline-success"
                            @click="getWeatherNow"
                            type="submit">Get Weather</b-button>
                        </b-form-group>
                      </b-form>
                    </div>
                    <div class="weather-description">
                        {{ weatherInfo.weather || error }}
                        <div class="more-details" v-if="weatherInfo.weather">
                            <router-link v-bind:to="{ name: 'City',
                            params: { id: weatherInfo.id, name: cityInput, data:weatherDataNow } }">
                            More details
                            </router-link>
                            <router-link v-bind:to="{ name: 'Locations' }">City List</router-link>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
</template>

<script>
import WeatherService from '@/services/WeatherService';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      cityInput: '',
      weatherDataNow: [],
      weatherForecast: [],
      error: '',
      locationStatus: true,
    };
  },
  computed: {
    weatherInfo() {
      if (this.weatherDataNow.weather) {
        return this.weatherDataNow;
      }
      return '';
    },
    ...mapState({
      cityData: state => state.cityData,
      cities: state => state.cities,
    }),
  },
  methods: {
    ...mapMutations([
      'addCity',
      'addCityData',
    ]),
    async getWeatherNow() {
      if (this.cityInput === '') {
        this.weatherDataNow = '';
        this.error = 'Please enter a word.';
      }

      try {
        const response = await WeatherService.getWeatherNow({ city: this.cityInput });
        this.weatherDataNow = response.data;
        this.$store.commit('addCity', { id: this.weatherDataNow.id, data: this.weatherDataNow });
        // this.addCityData({ id: this.weatherDataNow.id, data: this.weatherDataNow });
      } catch (error) {
        this.error = 'The city name you entered could not be found.';
      }
    },
    async getForecast() {
      const response = await WeatherService.getForecast({ city: this.weatherDataNow.id });
      this.weatherForecast = response.data;
    },
    async getCurrentWeather() {
      if (!window.navigator.geolocation) {
        this.locationStatus = false;
      } else {
        const newPosition = await new Promise((resolve, reject) => {
          window.navigator.geolocation.getCurrentPosition(
            (position) => {
              resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            }, () => {
              reject('no position available');
            },
          );
        });

        const response = await WeatherService
          .getCurrentWeather({ lat: newPosition.latitude, lon: newPosition.longitude });
        this.weatherDataNow = response.data;
        this.$store.commit('addCity', { id: this.weatherDataNow.id, data: this.weatherDataNow });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
.home {
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
}

#select-location {
  display: flex;
  justify-content: center;
}
input {
  border: 1px solid grey;
}
</style>
