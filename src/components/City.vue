<template>
  <div class="City">
  <section id>
    <b-jumbotron fluid container-fluid>
      <h1>City Name: {{ cityData.name }}</h1>
      <p>Weather Icon: {{ cityData.weather[0].icon }}</p>
      <p>Weather Description: {{ cityData.weather[0].description }}</p>
      <br>
      <div id="temp-data">
        <p>Current Temp: <span>{{ cityData.main.temp }}</span></p>
        <p>Max Temp: <span>{{ cityData.main.temp_max }}</span></p>
        <p>Min Temp: <span>{{ cityData.main.temp_min }}</span></p>
        <p>Humidity: <span>{{ cityData.main.humidity }}</span></p>
      </div>
      <br>
      <div id="visual-data">
        <p>Visibility: <span>{{ cityData.sys.visibility }}</span></p>
        <p>Sunset: <span>{{ cityData.sys.sunset }}</span></p>
        <p>Sunrise: <span>{{ cityData.sys.sunrise }}</span></p>
      </div>
      <br>
      <div id="wind-data">
        <p>Wind Speed: <span>{{ cityData.wind.speed }}</span></p>
        <p>Wind Direction: <span>{{ cityData.wind.deg }}</span></p>
      </div>
    </b-jumbotron>
  </section>
    <section id="carousel-container">
      <!-- May add graph data here -->
      <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">
          <!-- Slides with custom text -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
          <h1>Hello {{ cityName }}</h1>
        </b-carousel-slide>
      </b-carousel>
    </section>
    <section id="graph-container">
      <!-- Graphs about city with all details in carousel or Graphs below -->
      <div>
        <h1>Graph Section</h1>
        <div>
          <h1>Graph Two</h1>
        </div>
        <hr>
        <div>
          <h1>Graph Two</h1>
        </div>
      </div>
    </section>
    <section id="forecast-container">
      <div>
        <h1>Forecast Section</h1>
        <div id="forecast-week">
        <hr>
        <h2>Forecast 7 Week</h2>
        </div>
        <div id="forecast-month">
        <hr>
        <h2>Forecast 30 Day</h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import WeatherService from '@/services/WeatherService';

export default {
  name: 'City',
  mounted() {
    this.getForecast(this.cityName);
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      id: this.$route.params.id,
      cityName: this.$route.params.name,
      cityData: this.$route.params.data,
      forecastData: [],
    };
  },
  methods: {
    async getForecast() {
      const response = await WeatherService
        .getForecast({ city: this.cityData.name, id: this.id });
      this.forecastData = response.data;
    },
  },
};
</script>

<style scoped>
  #carousel-container {
    background-color: blue;
  }
  #graph-container {
    background-color: red;
  }
  #forecast-container {
    background-color: green;
  }
  .jumbotron {
    min-height: 550px;
  }
</style>
