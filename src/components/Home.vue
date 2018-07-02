<template>
      <div class="home">
        <div class="shaded-cover">
          <b-container id="select-location">
            <b-row align-v="center">
                <b-col align-self="center">
                    <div class="main-search">
                      <b-form class="form-group" @submit.prevent="getWeatherNow">
                        <h1>Search for city or use current location</h1>
                        <p>PS: U.S. Users can use zipcodes <img id="cool-shades" src='https://emojipedia-us.s3.amazonaws.com/thumbs/160/whatsapp/116/smiling-face-with-sunglasses_1f60e.png'/></p>
                        <b-form-group>
                           <b-form-input type="text" name="cityInput"
                            placeholder="Enter a city/town name..."
                            v-on:keydown.enter="getWeatherNow"
                            v-model="cityName"
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
                    <transition-group enter-active-class="animated bounceIn"
                     leave-active-class="animated bounceOut">
                      <div class="weather-detail"
                      v-for="(value, key) in weatherDataNow.cities" :key="key">
                        {{ value }}
                        <div class="more-details" v-if="weatherInfo.weather">
                          <router-link v-bind:to="{ name: 'City',
                          params: { id: weatherInfo.id, data:weatherDataNow } }">
                          More details
                          </router-link>
                          <router-link v-bind:to="{ name: 'Locations' }">City List</router-link>
                        </div>
                      </div>
                    </transition-group>
                </b-col>
            </b-row>
        </b-container>
        </div>
      </div>
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
      inputError: false,
      locationError: false,
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
      cities: state => state.cities,
    }),
  },
  methods: {
    ...mapMutations([
      'addCity',
      'addCityData',
    ]),
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
    async getWeatherNow() {
      if (this.cityInput === '') {
        this.inputError = true;
      }

      try {
        const response = await WeatherService.getWeatherNow({ city: this.cityInput });
        this.weatherDataNow = response.data;
        this.$store.commit('addCity', { id: this.weatherDataNow.id, data: this.weatherDataNow });
        // this.addCityData({ id: this.weatherDataNow.id, data: this.weatherDataNow });
      } catch (error) {
        // this.locationError = true;
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
  font-weight: 300;
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
  background-image: url(https://i.pinimg.com/originals/5b/44/f5/5b44f573214eaef443325cc014e24f56.jpg);
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
form button {
  background-color: transparent;
    border-color: white;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
    /* border-radius: 2.89px; */
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
    padding: .84rem 2.14rem;
    font-size: .81rem;
    margin: .375rem;
    cursor: pointer;
    text-transform: uppercase;
    white-space: normal;
    word-wrap: break-word;
}
form button:hover {
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
    background-color: rgba(0,0,0,.3);
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
