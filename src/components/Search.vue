<template>
  <div id="search">
    <!-- Error Message Field -->
    <transition
      enter-active-class="animated fadeInUp shake"
      leave-active-class="animated fadeOutDown"
    >
      <div v-show="error.status === true" class="error error-message">
        <span>{{ error.value }}</span>
      </div>
    </transition>

    <!-- Input Field -->
    <form class="active-purple-4 mb-4" @submit.prevent="submit">
      <input
        v-model="cityValue.value"
        :class="{ input, error: error.status === true }"
        class="form-control"
        name="cityInput"
        type="text"
        placeholder="Enter a city or zipcode"
        aria-label="Search"
        @keydown.enter.native="getWeatherNow"
      >
    </form>

    <!-- Button Field -->
    <div id="buttons" class="mt-3">
      <button
        type="button"
        class="btn btn-outline-primary"
        @click="getCurrentWeather"
      >Current Location</button>
      
      <button type="button" class="btn btn-outline-primary" @click="getWeatherNow">Search Location</button>
    </div>

    <!-- Modal -->
    <modal v-show="isModalVisible" @close="closeModal">
      <div slot="header">
        <h1 id="city-name">{{ weatherDataNow.name }}</h1>

        <h5 id="dateNow">{{ moment.unix(weatherDataNow.dt).utc().format("dddd, MMMM Do") }}</h5>
      </div>

      <div slot="body">
        <div class="container">
          <div class="row">
            <div id="current-temp" class="col">
              <div id="weather-icon">
                <img
                  :src="'http://openweathermap.org/img/w/' + weatherDataNow.weather[0].icon + '.png'"
                >
              </div>
              <div id="temp-now">
                <span>
                  {{ convertTemp(weatherDataNow.main.temp) }}°
                  <span>{{ unitStatus.temp }}</span>
                </span>
              </div>
            </div>
          </div>
          <div class="row">
            <div id="temp-high" class="col">
              <p>High</p>
              <small>
                {{ convertTemp(weatherDataNow.main.temp_max) }}°
                <span>{{ unitStatus.temp }}</span>
              </small>
            </div>
            <div id="temp-low" class="col">
              <p>Low</p>
              <small>
                {{ convertTemp(weatherDataNow.main.temp_min) }}°
                <span>{{ unitStatus.temp }}</span>
              </small>
            </div>
          </div>
        </div>
      </div>

      <div slot="footer">
        <router-link
          :to="{ name: 'City', params: { id: weatherDataNow.id, data: weatherDataNow } }"
        >
          <button type="button" class="btn btn-secondary">Forecast</button>
        </router-link>

        <!--<router-link :to="{ path: 'Locations' }">
          <button
            type="button"
            class="btn btn-primary">
            Full Details
          </button>
        </router-link>-->
      </div>
    </modal>
    <!-- End modal -->
  </div>
</template>
<script>
import WeatherService from "@/services/WeatherService";
import modal from "@/components/Modal.vue";
import moment from "moment";
// import { mapState, mapMutations } from 'vuex';

const zipRegExp = /^\d{5}(?:[-\s]\d{4})?$/;

export default {
  name: "Search",
  components: {
    modal
  },
  data() {
    return {
      cityValue: {
        value: "",
        valid: true,
        zip: false
      },
      error: {
        value: "",
        status: false
      },
      isModalVisible: false, // Modal data
      weatherDataNow: [], // Array to hold called data from weatherService API
      moment,
      cityId: "",
      unitStatus: {
        temp: "F",
        speed: "mph",
        distance: "mi"
      }
    };
  },
  watch: {
    "cityValue.value": function(value) {
      this.validate(value);
    }
  },
  mounted() {
    this.getCurrentWeather();
  },
  methods: {
    // Calls weatherService API to get weather based on user input
    async getWeatherNow() {
      if (this.cityValue.zip === false) {
        try {
          const response = await WeatherService.getWeatherNow({
            city: this.cityValue.value
          });

          this.weatherDataNow = response.data;

          // Line To Add To Vuex
          /* this.$store.commit('addCity', {
            id: response.data.id,
            data: response.data,
          }); */
          this.$store.dispatch("addData", this.weatherDataNow);
          this.showModal();
        } catch (error) {
          this.error.status = true;
          this.error.value = "The city name you entered could not be found.";
        }
      } else {
        try {
          const response = await WeatherService.getCurrentWeatherByZip({
            zip: this.cityValue.value
          });

          this.weatherDataNow = response.data;

          // Line To Add To Vuex
          /* this.$store.commit('addCity', {
            id: response.data.id,
            data: response.data,
          }); */
          this.$store.dispatch("addData", this.weatherDataNow);
          this.showModal();
        } catch (error) {
          this.error.status = true;
          this.error.value = "Invalid text";
        }
      }
    },

    // Calls weatherService API to get weather based on geolocation
    async getCurrentWeather() {
      if (!window.navigator.geolocation) {
        this.error.status = true;
        this.error.value = "Unable to use location, type manually.";
      } else {
        const newPosition = await new Promise(resolve => {
          window.navigator.geolocation.getCurrentPosition(
            position => {
              resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              });
            },
            error => {
              this.error.status = true;
              this.error.value = `${error}: no position available`;
            }
          );
        });

        const response = await WeatherService.getCurrentWeather({
          lat: newPosition.latitude,
          lon: newPosition.longitude
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
        this.error.value = "";
        this.getWeatherNow();
      } else {
        this.error.status = true;
        this.error.value = "Invalid City";
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
      if (
        this.cityValue.value === "" ||
        this.cityValue.value < 2 ||
        this.cityValue.value === undefined
      ) {
        this.cityValue.valid = false;
        this.error.status = true;
        this.error.value = "Please enter a City/Location.";
      } else {
        this.cityValue.zip = this.isZip(value);
        this.error.status = false;
        this.error.value = "";
      }
    },
    // Check for valid zip
    isZip(value) {
      return zipRegExp.test(value);
    },
    convertTemp(temp) {
      if (this.unitStatus.temp === "F") {
        return (temp * (9 / 5) - 459.67).toFixed(0);
      }
      if (this.unitStatus.temp === "C") {
        return (temp - 273.15).toFixed(0);
      }
      return temp.toFixed(0);
    }
    // Vuex implementation
    /* ...mapMutations(['addCity', 'addCityData']),
addCity: function() {
  this.$store.dispatch('addCity', this);
},
deleteCity: function(id) {
  this.$store.dispatch('deleteCity', id);
}, */
  }
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
.error-message {
  color: #e94b35;
  padding-bottom: 0.4em;
}
#current-temp {
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 2em;
}
#weather-icon img {
  width: 100px;
  height: 100px;
}
#temp-now {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
