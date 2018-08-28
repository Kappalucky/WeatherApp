<template>
  <div id="search">

    <!-- Error Message Field -->
    <transition enter-active-class="animated fadeInUp shake" leave-active-class="animated fadeOutDown">
      <div v-show="!error.status" class="error-message">
        <span>{{ error.value }}</span>
      </div>
    </transition>

    <!-- Input Field -->
    <form class="active-purple-4 mb-4" @submit.prevent="submit">

      <input
      v-model="cityValue.value"
      :class="{ input, error: !cityValue.valid }"
      class="form-control"
      name="cityInput"
      type="text"
      placeholder="Enter a city or zipcode"
      aria-label="Search"
      @keydown.enter.native="getWeatherNow">

    </form>

    <!-- Button Field -->
    <div class="mt-3" id="buttons">

      <button
       v-if="locationStatus"
       type="button"
       class="btn btn-outline-primary"
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

    <!-- Modal -->
    <modal v-show="isModalVisible" @close="closeModal">

      <div slot="header">

        <h1 v-if="weatherInfo" id="city-name">
          {{ weatherDataNow.name }}
        </h1>

        <h4 v-if="weatherInfo" id="dateNow">
          {{ moment.unix(weatherDataNow.dt).utc().format("ddd, hA") }}
        </h4>

      </div>

      <div slot="body">

        <div id="current-temp">

          <!--
          <img 
           width="150"
           :src="'http://openweathermap.org/img/w/' + weatherDataNow.weather[0].icon + '.png'">
           -->

          <div id="temp-now">
            <span v-if="weatherInfo">{{ weatherDataNow.main.temp }}°
              <span>K</span>
            </span>
          </div>

          <div id="temp-range">

            <p>High/Low</p>

            <small v-if="weatherInfo">
              {{ weatherDataNow.main.temp_max }}
              <span>°F</span>
            </small>

            <p>/</p>

            <small v-if="weatherInfo">
              {{ weatherDataNow.main.temp_min }}
              <span>°F</span>
            </small>

          </div>

        </div>

      </div>

      <div slot="footer">

        <router-link :to="{ path: 'City' }">
          <button type="button" class="btn btn-secondary">
            Forecast
          </button>
        </router-link>

        <router-link :to="{ path: 'Locations' }">
          <button type="button" class="btn btn-primary">
            Full Details
          </button>
        </router-link>

      </div>
      
    </modal>
    <!-- End modal -->

  </div>
</template>
<script>
import WeatherService from '@/services/WeatherService';
import modal from '@/components/Modal.vue';
import moment from 'moment';
import { mapState, mapMutations } from 'vuex';

const zipRegExp = '';
const Ascii = '';

export default {
  name: 'Search',
  components: {
    modal,
  },
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
      isModalVisible: false, // Modal data
      cityInput: '', // Variable for user input
      weatherDataNow: [], // Array to hold called data from weatherService API
      // moment,
      // hasData: false, // If function calls data
      // locationStatus: true, // If browser is able to call geolocation API
      // locationError: false, // No location data will return false
      // inputError: false,
      // error: '', // Variable for error messages
      // cityId: '',
      // weatherForecast: [],
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
      unitStatus: state => state.unitStatus,
    }),
  },
  created: {
    async getWeatherNow() {
      const response = await WeatherService.getWeatherNow({
        city: 'brooklyn',
      });
      this.weatherDataNow = response.data;
    },
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
          this.hasData = true;
          this.$store.commit('addCity', {
            id: response.data.id,
            data: response.data,
          });
          this.showModal();
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
          this.hasData = true;
          this.$store.commit('addCity', {
            id: response.data.id,
            data: response.data,
          });
          this.showModal();
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
        this.hasData = true;
        this.$store.commit('addCity', {
          id: response.data.id,
          data: response.data,
        });
        this.cityId = response.data.id;
        this.weatherDataNow = response.data;
        this.showModal();
      }
    },

    // Add errors to view
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
    submit() {
      if (this.cityValue.valid === true) {
        this.error.status = false;
        // getWeatherNow with error checks
      } else {
        this.error.status = true;
        this.error.value = 'Invalid City';
      }
    },

    // Modal data below
    showModal() {
      this.isModalVisible = true;
    },

    closeModal() {
      this.isModalVisible = false;
    },
    // Modal data above

    // General validation
    validate(value) {
      if (type === 'email') {
        this.email.valid = this.isEmail(value);
      }
    },
    // Check for valid email
    isZip(value) {
      return zipRegExp.test(value);
    },
    // Vuex implementation
    /* ...mapMutations(['addCity', 'addCityData']),
addCity: function() {
  this.$store.dispatch('addCity', this);
},
deleteCity: function(id) {
  this.$store.dispatch('deleteCity', id);
}, */
  },
  watch: {
    'email.value': function (value) {
      this.validate('email', value);
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

.btn-outline-primary {
  color: white !important;
}

.modal {
  display: flex;
}

form .error {
  border-color: #e94b35 !important;
}
</style>
