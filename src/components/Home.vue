<template>
  <!--<div
    :style="{ backgroundImage: `url('${backgroundLink}')` }"
    class="home">
    <div class="shaded-cover">
      <div
        id="select-location"
        class="container">
        <div
          class="row"
          align-v="center">
          <div
            class="col"
            align-self="center">
            <div class="main-search">
              <div class="form-group">
                <h1>Search for city or use current location</h1>
                <p>PS: U.S. Users can use zipcodes <img
                  id="cool-shades"
                  src="https://emojipedia-us.s3.amazonaws.com/thumbs/160/whatsapp/116/smiling-face-with-sunglasses_1f60e.png"></p>
                <div class="form-group">
                  <input
                    v-model="cityName"
                    class="form-input"
                    type="text"
                    name="cityName"
                    placeholder="Enter a city or zipcode..."
                    class="form-control"
                    @keydown.enter.native="getWeatherNow">
                </div>
                <div class="weather-check">
                  <button
                    v-if="locationStatus"
                    id="find-location"
                    variant="outline-success"
                    type="submit"
                    @click="getCurrentWeather">Current Location</button>
                  <button
                    id="get-weather"
                    variant="outline-success"
                    type="submit"
                    @click="getWeatherNow">Search Location</button>
                </div>
              </div>
            </div>
            <transition
              enter-active-class="animated bounceIn"
              leave-active-class="animated bounceOut">
              <template v-if="hasData">
                <div class="card">
                  <div class="card-body">
                    <div class="location-name">
                      <h2
                        id="city-name"
                        class="card-title">{{ weatherDataNow.name }}</h2>
                      <h2
                        id="date"
                        class="card-text">
                        {{ moment.unix(weatherDataNow.dt).utc().format("ddd, hA") }}</h2>
                    </div>
                    <div class="current-temp">
                      <img
                        :src="'http://openweathermap.org/img/w/' + weatherDataNow.weather[0].icon + '.png'"
                        width="150">
                      <i :class="'owf owf-' + weatherDataNow.cod"></i>-->
  <!--<p
                        id="temp-now"
                        class="card-text">{{ weatherDataNow.main.temp }}°
                      <span>K</span></p>
                    </div>
                    <div class="container">
                      <div class="row">
                        <div class="col">
                          <div class="temp-min-max">
                            <span id="headline">High/Low</span>
                            <small
                              id="temp-high"
                              class="card-text">{{ convertTemp(weatherDataNow.main.temp_max) }}°
                            <span>F</span></small>
                            <small
                              id="temp-low"
                              class="card-text">{{ convertTemp(weatherDataNow.main.temp_min) }}°
                            <span>F</span></small>
                          </div>
                        </div>
                        <div class="col">
                          <div class="wind-data">
                            <span id="headline">Wind</span>
                            <small
                              id="wind-speed"
                              class="card-text">Speeds <span>
                                {{ weatherDataNow.wind.speed }}</span></small>
                            <small
                              id="wind-direct"
                              class="card-text">direction<span>
                                {{ weatherDataNow.wind.deg }}</span></small>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="description">
                          <p class="card-text">Currently
                            {{ weatherDataNow.weather[0].description }}.</p>
                          <p>With a {{ weatherDataNow.main.humidity }} of humidity...</p>
                          <p class="card-text">Looking like a beautiful day</p>
                          <span>If chance of rain < 40%
                                  <p class="card-text">Looking like a beautiful day</p>
                                      If > 40% < 65%
                                  <p class="card-text">You should probably bring an umbrella</p>
                                      if > 65%
                                  <p class="card-text">Finna rain sis <img id="cool-shades" src='https://emojipedia-us.s3.amazonaws.com/thumbs/160/whatsapp/116/umbrella_2602.png'/></p>
                                  </span>
                                  </p>
                                  <p class="card-text"></p> -->
  <!--</div>
                      </div>
                    </div>
                    <div class="forecast-btn">
                      <button
                        :to="{ name: 'City',
                               params: { id: weatherInfo.id, data:
                        weatherDataNow, link: backgroundLink }}">7 Day</button>
                      <b-button
                        :to="{ name: 'CityDetails',
                               params: { id: weatherInfo.id, data:weatherDataNow,
                                         forcast:weatherForecast }}">Full details</button>
                    </b-button></div>
                  </div>
                </div>
              </template>
              Errors will be placed in template below
                        <template v-else><p>no data</p></template>-->
  <!--</transition>
          </div>
        </div>
      </div>
    </div>
  </div>-->
  <div>
    <h1>Home Page</h1>
  </div>
</template>

<script>
/*
import { mapState, mapMutations } from 'vuex';
import moment from 'moment';
import WeatherService from '../services/WeatherService';
import ImageService from '../services/ImageService';

export default {
  name: 'Home',
  data() {
    return {
      moment,
      unitStatus: 'F',
      cityName: '',
      weatherDataNow: [],
      weatherForecast: [],
      error: '',
      locationStatus: true,
      inputError: false,
      locationError: false,
      hasData: false,
      backgroundLink: '',
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
    ...mapMutations(['addCity', 'addCityData']),
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
    // Get todays weather by searching for location
    async getWeatherNow() {
      if (this.cityName === '' || this.cityName < 2 || this.cityName === undefined) {
        this.weatherDataNow = '';
        // this.inputError = true;
        this.hasData = false;
        this.error = 'Please enter a word.';
      }
      if (isNaN(this.cityName)) {
        try {
          const response = await WeatherService.getWeatherNow({ city: this.cityName });
          this.weatherDataNow = response.data;
          this.$store.commit('addCity', { id: this.weatherDataNow.id, data: this.weatherDataNow });
          this.hasData = true;
          this.addCityData({ id: this.weatherDataNow.id, data: this.weatherDataNow });
        } catch (error) {
          this.locationError = true;
          this.error = 'The city name you entered could not be found.';
        }
      } else {
        try {
          const response = await WeatherService.getCurrentWeatherByZip({ zip: this.cityName });
          this.weatherDataNow = response.data;
          this.$store.commit('addCity', { id: this.weatherDataNow.id, data: this.weatherDataNow });
          this.hasData = true;
          this.addCityData({ id: this.weatherDataNow.id, data: this.weatherDataNow });
        } catch (error) {
          this.error = 'Invalid text';
        }
      }
    },
    // call for 7 day forecast of location selected
    async getForecast() {
      const response = await WeatherService.getForecast({ city: this.weatherDataNow.id });
      this.weatherForecast = response.data;
    },
    // Todays weather by geolocation call
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
        this.$store.commit('addCity', { id: this.weatherDataNow.id, data: this.weatherDataNow });
        this.hasData = true;
      }
    },
    // Image Background
    async getRandom() {
      const response = await ImageService.getRandom();
      this.backgroundLink = response.data.urls.full;
    },
    convertTemp(temp) {
      if (this.unitStatus === 'F') {
        return (temp * (9 / 5) - 459.67).toFixed(0);
      }
      if (this.unitStatus === 'C') {
        return (temp - 273.15).toFixed(0);
      }
      return temp.toFixed(0);
    },
  },
  beforeMount() {
    this.getRandom();
  },
}; */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  color: black;
}
.card-title {
  color: black;
}
.current-temp {
  color: #2b2524;
  display: inline-block;
  font-size: 4em;
}

#headline {
  display: block;
  font-size: 85%;
}
.temp-min-max {
  display: grid;
  justify-content: left;
  justify-items: center;
  font-size: 2em;
}
.wind-data {
  display: grid;
  justify-content: right;
  justify-items: center;
  font-size: 2em;
}
#temp-now {
  font-size: 3.4rem;
}
.description p {
  margin: 0;
}
h1,
h2 {
  font-weight: 300;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

.home {
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
  background-image: url(https://images.unsplash.com/photo-1506444187582-b55b5c08d677?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjMwNDQwfQ&s=d38ed9af72cd9d09972eed80efbf7a19);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
}

#select-location {
  display: flex;
  justify-content: center;
  color: white;
}
form h1 {
  margin-bottom: 1.5rem;
}
.forecast-btn button {
  background-color: #4c4b4b;
  border-color: black;
}
.forecast-btn button:hover {
  background-color: #42b983;
}
.description {
  display: inline-flex;
  margin: 0 auto;
  text-transform: capitalize;
  font-style: italic;
}
.weather-check button {
  color: black;
}
.weather-check button:hover {
  color: white;
}
button {
  background-color: transparent;
  border-color: white;
  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
    0 2px 10px 0 rgba(0, 0, 0, 0.12);
  /* border-radius: 2.89px; */
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 0.84rem 2.14rem;
  font-size: 0.81rem;
  margin: 0.375rem;
  cursor: pointer;
  text-transform: uppercase;
  white-space: normal;
  word-wrap: break-word;
}
button:hover {
  background-color: transparent;
}
input {
  border: 1px solid grey;
}
.alert {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -20px;
}
.shaded-cover {
  display: flex;
  position: absolute;
  top: 0;
  width: 100%;
  background-attachment: fixed;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.3);
  align-items: center;
  -webkit-box-align: center;
  justify-content: center;
}
#cool-shades {
  width: 20px;
  height: 20px;
  margin-bottom: 2px;
}
</style>
