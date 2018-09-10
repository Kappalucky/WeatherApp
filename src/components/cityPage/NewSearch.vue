<template>
  <header id="new-search">
    <div class="bar">
      <form
        class="active-purple-4 mb-4 search"
        @submit.prevent="submit">
        <div
          id="geolocation"
          class="mx-2">
          <button
            type="button"
            @click="getCurrentWeather"><font-awesome-icon icon="location-arrow"/></button>
        </div>
        <input
          v-model="cityValue.value"
          :class="{ input, error: error.status === true }"
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
            @click="getWeatherNow"><font-awesome-icon icon="search"/></button>
        </div>
      </form>
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
const zipRegExp = /^\d{5}(?:[-\s]\d{4})?$/;

export default {
  name: 'NewSearch',
  data() {
    return {
      cityValue: {
        value: '',
        valid: true,
        zip: false,
      },
      error: {
        value: '',
        status: false,
      },
      weatherDataNow: [],
      moment,
      unitStatus: {
        temp: 'F',
        speed: 'mph',
        distance: 'mi',
      },
    };
  },
  methods: {
    async getWeatherNow() {
      if (this.cityValue.zip === false) {
        try {
          const response = await WeatherService.getWeatherNow({
            city: this.cityValue.value,
          });

          this.weatherDataNow = response.data;

          // Line To Add To Vuex
          /* this.$store.commit('addCity', {
            id: response.data.id,
            data: response.data,
          }); */

          this.showModal();
        } catch (error) {
          this.error.status = true;
          this.error.value = 'The city name you entered could not be found.';
        }
      } else {
        try {
          const response = await WeatherService.getCurrentWeatherByZip({
            zip: this.cityValue.value,
          });

          this.weatherDataNow = response.data;

          // Line To Add To Vuex
          /* this.$store.commit('addCity', {
            id: response.data.id,
            data: response.data,
          }); */

          this.showModal();
        } catch (error) {
          this.error.status = true;
          this.error.value = 'Invalid text';
        }
      }
    },
    // Calls weatherService API to get weather based on geolocation
    async getCurrentWeather() {
      if (!window.navigator.geolocation) {
        this.error.status = true;
        this.error.value = 'Unable to use location, type manually.';
      } else {
        const newPosition = await new Promise((resolve) => {
          window.navigator.geolocation.getCurrentPosition(
            (position) => {
              resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            },
            (error) => {
              this.error.status = true;
              this.error.value = `${error}: no position available`;
            },
          );
        });

        const response = await WeatherService.getCurrentWeather({
          lat: newPosition.latitude,
          lon: newPosition.longitude,
        });

        /* this.$store.commit('addCity', {
          id: response.data.id,
          data: response.data,
        }); */

        this.cityId = response.data.id;

        this.weatherDataNow = response.data;

        this.showModal();
      }
    },
    submit() {
      this.validate(this.cityValue.value);
      if (this.cityValue.valid === true) {
        this.error.status = false;
        this.error.value = '';
        this.getWeatherNow();
      } else {
        this.error.status = true;
        this.error.value = 'Invalid City';
      }
    },
    // General validation
    validate(value) {
      if (
        this.cityValue.value === '' ||
        this.cityValue.value < 2 ||
        this.cityValue.value === undefined
      ) {
        this.cityValue.valid = false;
        this.error.status = true;
        this.error.value = 'Please enter a City/Location.';
      } else {
        this.cityValue.zip = this.isZip(value);
        this.error.status = false;
        this.error.value = '';
      }
    },
    // Check for valid zip
    isZip(value) {
      return zipRegExp.test(value);
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
  background-color: #ededed;
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
  text-align: center;
}
.search #search-button {
  order: 2 !important;
}
form {
  margin-top: auto;
}
</style>
