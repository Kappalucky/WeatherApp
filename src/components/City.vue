<template>
  <div class="city" :style="{ backgroundImage: `url('${backgroundLink}')` }">
    <div class="shaded-cover">
      <div class="forecast">
        <b-card no-body header="header">
          <h3 slot="header">{{ cityData.name }}</h3>
          <b-list-group flush>
            <template v-for="data in forecastData.list">
              <b-list-group-item @click="collapse = !collapse"
              :class="collapse ? 'collapsed' : null"
              aria-controls="data.id" :aria-expanded="collapse ? 'true' : 'false'"
               :key="data.id" href="#">
                <div class="weather">
                  <div class="visuals">
                    <span class="weather-icon" v-for="amount in weather" :key="amount.id">
                        <i :class="'wi-owm-' + amount.id"></i>
                    </span>
                    <span class="day-of-week">
                      {{ moment.unix(data.dt).utc().format("ddd, hA") }}</span>
                  </div>
                  <div class="breakline"></div>
                  <div class="temp-data">
                    <span class="temp-big">
                      {{ convertTemp(data.main.temp) }}°{{unitStatus}}</span>
                      <span v-for="amount in weather" :key="amount.id">
                        {{ data.amount.description }}</span>
                    <span class="temp-sum">
                      <span class="high-temp-sum">
                          <span class="high-label">High: </span>
                          {{ convertTemp(data.main.temp_max) }}°{{unitStatus}}
                      </span>
                      <span class="low-temp-sum">
                        <span class="low-label">Low:</span>
                          {{ convertTemp(data.main.temp_min) }}°{{unitStatus}}
                      </span>
                    </span>
                  </div>
                </div>
              </b-list-group-item>
              <transition-group enter-active-class="animated slideInDown"
              leave-active-class="animated slideInUp" :key="data.id">
              <b-collapse class="mt-2" :key="data.id" v-model="collapse">
                <div class="weather-details">
                  <span class="weather-icon">
                      <!--<i :class="'owf owf-' + weatherDataNow.cod"></i>-->
                  </span>
                  <span class="day-of-week">day</span>
                  <div class="breakline"></div>
                  <div class="temp-data">
                    <span class="temp-big">87deg Description word</span>
                    <span class="temp-sum">
                      <span class="high-temp-sum">
                          <span class="high-label">High:</span>
                          80
                      </span>
                      <span class="low-temp-sum">
                        <span class="low-label">Low:</span>
                          60
                      </span>
                    </span>
                  </div>
                </div>
              </b-collapse>
              </transition-group>
            </template>
          </b-list-group>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import WeatherService from '@/services/WeatherService';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'City',
  mounted() {
    this.getForecast(this.cityName);
  },
  computed: {
    ...mapState({
      cities: state => state.cities,
    }),
  },
  data() {
    return {
      moment,
      slide: 0,
      sliding: null,
      unitStatus: 'F',
      id: this.$route.params.id,
      cityName: this.$route.params.name,
      cityData: this.$route.params.data,
      backgroundLink: this.$route.params.link,
      forecastData: [],
      collapse: false,
    };
  },
  ...mapMutations([
    'addForecastData',
  ]),
  methods: {
    async getForecast() {
      const response = await WeatherService
        .getForecast({ city: this.cityData.name, id: this.id });
      this.forecastData = response.data;
      this.$store.commit('addForecastData', { id: this.id, data: this.forecastData });
    },
    convertTemp(temp) {
      if (this.unitStatus === 'F') {
        return ((temp * (9 / 5)) - (459.67)).toFixed(0);
      }
      if (this.unitStatus === 'C') {
        return (temp - 273.15).toFixed(0);
      }
      return temp.toFixed(0);
    },
  },
  beforeMount() {
    this.getForecast();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  color: black;
}
.weather {
  display: inline-flex;
  justify-content: space-evenly;
}
.breakline {
  padding: 0 3%;
}
.temp-big {
  font-weight: bold;
}
.weather > span {
  padding: 0 2%;
}
.card-title {
  color: black;
}
.list-group {
  overflow-y: scroll;
}
.current-temp {
  color: #2B2524;
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
h1, h2 {
  font-weight: 300;
}

.city {
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

.forecast {
  display: flex;
  height: 50%;
  margin: auto;
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
button:hover {
  background-color: transparent;
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
</style>
