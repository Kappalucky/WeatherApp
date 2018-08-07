<template>
  <header id="new-search">
    <div class="bar">
      <div class="search">
        <div
          id="geolocation"
          class="mx-2">
          <button
            type="button"
            @click="getCurrentWeather"><font-awesome-icon icon="location-arrow"/></button>
        </div>
        <input
          v-model="cityInput"
          class="form-control"
          name="cityInput"
          type="text"
          placeholder="Enter a city or zipcode"
          aria-label="Search"
          @keydown.enter.native="getWeatherNow">
        <div
          id="search-button"
          class="mx-2">
          <button
            type="button"
            @click="getCurrentWeather"><font-awesome-icon icon="search"/></button>
        </div>
      </div>
      <div class="options">
        <div class="dropdown">
          <div
            class="btn dropdown-toggle"
            type="button"
            aria-haspopup="true"
            aria-expanded="false">°F
            <div
              id="temperature-button"
              class="dropdown-menu">
              <button>°F</button>
              <button>°C</button>
              <button>°K</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import WeatherService from '@/services/WeatherService';
import moment from 'moment';

export default {
  name: 'NewSearch',
  data() {
    return {
      moment,
      cityInput: '',
      hasData: false,
      locationStatus: true,
      locationError: false,
      inputError: false,
      error: '',
      weatherDataNow: [],
    };
  },
  methods: {
    async getWeatherNow() {
      // Temporary error checking method
      // does not change data if error, calls error using 'hasData'. logs message to 'error'
      if (this.cityInput === '' || this.cityInput < 2 || this.cityInput === undefined) {
        this.weatherDataNow = '';
        this.hasData = false;
        this.error = 'Please enter a word.';
      }
      // If user input is not a number/zip search data for cityname
      if (Number.isInteger(this.cityInput) === false) {
        try {
          const response = await WeatherService.getWeatherNow({
            city: this.cityInput,
          });
          this.weatherDataNow = response.data;
          this.hasData = true;
          this.isModalVisible = true;
        } catch (error) {
          this.locationError = true;
          this.error = 'The city name you entered could not be found.';
        }
      } else {
        try {
          const response = await WeatherService.getCurrentWeatherByZip({
            zip: this.cityInput,
          });
          this.weatherDataNow = response.data;
          this.hasData = true;
          this.isModalVisible = true;
        } catch (error) {
          this.hasData = false;
          this.error = 'Invalid text';
        }
      }
    },
    // Calls weatherService API to get weather based on geolocation
    async getCurrentWeather() {
      if (!window.navigator.geolocation) {
        this.locationStatus = false;
        this.hasData = false;
      } else {
        const newPosition = await new Promise((resolve, reject) => {
          window.navigator.geolocation.getCurrentPosition(
            (position) => {
              resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            },
            () => {
              reject('no position available');
            },
          );
        });

        const response = await WeatherService.getCurrentWeather({
          lat: newPosition.latitude,
          lon: newPosition.longitude,
        });
        this.weatherDataNow = response.data;
        this.hasData = true;
        // this.showModal();
      }
    },
  },
};
</script>

<style scoped>
#new-search {
  height: 46px;
  display: inline-flex;
  width: 100%;
}
.bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  padding: 5px;
  background-color: darkgrey;
}
.search {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.search #geolocation {
  order: 0 !important;
}
.search input {
  order: 1 !important;
  width: 50%;
}
.search #search-button {
  order: 2 !important;
}
</style>
