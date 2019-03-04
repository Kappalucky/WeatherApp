<template>
  <div>
    <!--<Navbar/>-->
    <!--<Search/>-->
    <section>
      <h1 style="backgroundColor:grey">Search Component</h1>
    </section>
    <br>
    <section class="container">
      <h1>Dashboard</h1>
      <div class="row">
        <section class="col weatherCard">
          <div class="row">
            <aside class="col-md weatherCard-tempDetails">
              <div class="tempDetails-location">{{weatherCard.name}}</div>
              <div class="tempDetails-currentTemp">
                <div class="currentTemp-image">
                  <img
                    :src="'http://openweathermap.org/img/w/' + weatherCard.weather[0].icon + '.png'"
                  >
                </div>
                <div class="currentTemp-temp">
                  {{weatherCard.main.temp}}
                  <span>°{{unit}}</span>
                </div>
              </div>
              <div class="tempDetails-weather">{{weatherCard.weather[0].description}}</div>
              <div
                class="tempDetails-date"
              >{{moment.unix(weatherCard.dt).utc().format("dddd, MMMM Do")}}</div>
              <br>
              <div class="tempDetails-stats">
                <div class="stats">
                  <div class="stats-wind">
                    <div class="wind-image">
                      <i class="fas fa-wind"></i>
                    </div>
                    <div class="wind-stat">
                      {{weatherCard.wind.speed}}
                      <span>{{windUnit}}</span>
                    </div>
                  </div>
                  <div class="stats-humidity">
                    <div class="humidity-image">
                      <img src="@/assets/img/humidity_icon.png">
                    </div>
                    <div class="humidity-stat">
                      {{weatherCard.main.humidity}}
                      <span>%</span>
                    </div>
                  </div>
                </div>
                <div class="stats-space"></div>
                <div class="stats-tempRange">
                  <div class="tempRange-high">
                    <div class="high-image">
                      <i class="fas fa-arrow-up"></i>
                    </div>
                    <div class="high-stat">
                      {{weatherCard.main.temp_max}}
                      <span>°{{unit}}</span>
                    </div>
                  </div>
                  <div class="tempRange-low">
                    <div class="low-image">
                      <i class="fas fa-arrow-down"></i>
                    </div>
                    <div class="low-stat">
                      {{weatherCard.main.temp_max}}
                      <span>°{{unit}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            <aside class="col-md weatherCard-forecast list-group">
              <template>
                <a href="#" class="list-group-item list-group-item-action">
                  <span>Image{{Image}}</span>
                  <span>DayofWeek{{dayOfWeek}}</span>
                  <span class="list-temp">
                    <span>Temp{{Temp}}</span>
                    <span>Low{{tempLow}}</span>
                  </span>
                </a>
                <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
                <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action disabled"
                  tabindex="-1"
                  aria-disabled="true"
                >Vestibulum at eros</a>
              </template>
            </aside>
          </div>
        </section>
      </div>
    </section>
    <button type="button" class="btn btn-outline-primary" @click="getWeatherNow()">Current Location</button>
    <!--<Footer/>-->
  </div>
</template>

<style>
.weatherCard {
  border: 1px solid rgb(100, 99, 99);
  border-radius: 15px;
  overflow: hidden;
  font-family: "Raleway", "Roboto", sans-serif;
}
.weatherCard-tempDetails {
  height: 100%;
  width: 100%;
}
.tempDetails-location {
  text-align: center;
  margin: 7px;
  padding: 4px;
  font-size: 3rem;
  color: rgb(87, 85, 85);
  text-transform: capitalize;
}
.tempDetails-currentTemp {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 5px;
}
.currentTemp-image {
  height: 100%;
  margin-right: 1px;
}
.currentTemp-image > img {
  height: 100px;
  width: 100px;
}
.currentTemp-temp {
  font-size: 2.2rem;
  display: flex;
  align-items: center;
}
.currentTemp-temp > span {
  font-size: 54%;
}
.tempDetails-weather {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1.5em;
  text-transform: capitalize;
}
.tempDetails-date {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1em;
}
.tempDetails-stats {
  display: flex;
  justify-content: space-evenly;
}
.stats {
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 10px;
}
.stats-wind {
  display: flex;
  flex-flow: row wrap;
  margin: 5px;
}
.wind-image {
  margin: auto 0;
}
.wind-stat {
  padding: 10px;
  font-size: 1.4em;
}
.wind-stat > span {
  font-size: 50%;
  text-transform: uppercase;
}
.stats-humidity {
  display: flex;
  flex-flow: row wrap;
  margin: 5px;
}
.humidity-image {
  margin: auto 0;
}
.humidity-image > img {
  height: 16px;
  width: 16px;
}
.humidity-stat {
  padding: 10px;
  font-size: 1.4em;
}
.humidity-stat > span {
  font-size: 50%;
}
.stats-space {
  margin: auto;
}
.stats-tempRange {
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 10px;
}
.tempRange-high {
  display: flex;
  flex-flow: row wrap;
  margin: 5px;
}
.high-image {
  margin: auto 0;
}
.high-stat {
  padding: 10px;
  font-size: 1.4em;
}
.high-stat > span {
  font-size: 70%;
}
.tempRange-low {
  display: flex;
  flex-flow: row wrap;
  margin: 5px;
}
.low-image {
  margin: auto 0;
}
.low-stat {
  padding: 10px;
  font-size: 1.4em;
}
.low-stat > span {
  font-size: 70%;
}
.weatherCard-forecast {
  border: 1px solid black;
  padding: 0;
}
.list-group > .list-group-item {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list-temp {
  display: flex;
  align-items: center;
}
.list-temp span:last-child {
  margin-top: 30px;
  margin-left: 4px;
}
</style>

<script>
import WeatherService from "@/services/WeatherService";
import moment from "moment";

export default {
  name: "WeatherDashboard",
  components: {
    // Search,
    // Navbar,
    // Footer
  },
  data() {
    return {
      weatherCard: [],
      unit: "F",
      windUnit: "mph",
      moment
    };
  },
  mounted() {
    this.getWeatherNow();
  },
  methods: {
    async getWeatherNow() {
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
      this.weatherCard = response.data;
    }
  }
};
</script>
