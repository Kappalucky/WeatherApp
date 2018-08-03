<template>
  <div id="search">
    <div class="active-purple-4 mb-4">
      <input
        v-model="cityInput"
        class="form-control"
        name="cityInput"
        type="text"
        placeholder="Enter a city or zipcode"
        aria-label="Search"
        @keydown.enter.native="getWeatherNow">
    </div>
    <div
      id="buttons"
      class="mt-3">
      <button
        v-if="locationStatus"
        type="button"
        class="btn btn-primary"
        @click="getCurrentWeather">
        Current Location
      </button>
      <button
        type="button"
        class="btn btn-outline-primary"
        @click="getWeatherNow">
        Search Location
      </button>
    </div>
    <!-- TO-DO: Add modal to seperate container. trigger by test button click -->
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#basicExampleModal">
      Launch demo modal
    </button>
    <!-- Modal -->
    <div
      id="basicExampleModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div
        class="modal-dialog"
        role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              id="exampleModalLabel"
              class="modal-title">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal">Close</button>
            <button
              type="button"
              class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <!-- End modal -->
  </div>
</template>
<script>
import WeatherService from '@/services/WeatherService';

export default {
  name: 'Search',
  // TO-DO: Add button functions
  data() {
    return {
      cityInput: '', // Variable for user input
      hasData: false, // If function calls data
      locationStatus: true, // If browser is able to call geolocation API
      locationError: false, // No location data will return false
      inputError: false,
      error: '', // Variable for error messages
      weatherDataNow: [], // Array to hold called data from weatherService API
    };
  },
  methods: {
    // Calls weatherService API to get weather based on user input
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
      }
    },
    addError() {
      if (this.inputError === true) {
        this.error = 'Please enter a word.';
      }
      if (this.locationError === true) {
        this.error = 'The city name you entered could not be found.';
      }
      setTimeout(() => {
        this.error = '';
        this.inputError = false;
        this.locationError = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
.btn {
  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
    0 2px 10px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  -webkit-border-radius: 10em;
  border-radius: 10em;
  padding: 0.84rem 2.14rem;
  font-size: 0.81rem;
}
</style>
