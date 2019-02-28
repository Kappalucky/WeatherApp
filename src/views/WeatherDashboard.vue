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
            <aside class="col-sm weatherCard-tempDetails">
              <div class="tempDetails-location">LocationName{{LocationName}}</div>
              <div class="tempDetails-currentTemp row">
                <div class="currentTemp-image col-xs">Image{{Image}}</div>
                <div class="currentTemp-temp col-xs">Temp{{Temperature}}</div>
              </div>
              <div class="tempDetails-weather">Weather{{Weather}}</div>
              <div class="tempDetails-date">DayOfWeek{{dayOfWeek}}</div>
              <br>
              <div class="tempDetails-stats">
                <div class="stats-wind row">
                  <div class="wind-image col">Image{{windImage}}</div>
                  <div class="wind-stat col">Stat{{windNumber}}</div>
                </div>
                <div class="stats-humidity row">
                  <div class="humidity-image col">Image{{humidityImage}}</div>
                  <div class="humidity-stat col">Stat{{humidityNumber}}</div>
                </div>
              </div>
              <br>
              <div class="tempDetails-tempRange row">
                <div class="tempRange-high col">High{{tempHigh}}</div>
                <div class="tempRange-low col">Low{{tempLow}}</div>
              </div>
            </aside>
            <aside class="col-sm weatherCard-forecast">
              <p>Forecast</p>
            </aside>
          </div>
        </section>
      </div>
    </section>
    <!--<Footer/>-->
  </div>
</template>

<style>
.weatherCard {
  border: 1px solid black;
  border-radius: 25px;
  overflow: hidden;
}
.weatherCard-tempDetails {
  border: 1px solid black;
  background: red;
}
.tempDetails-location {
  border: 1px solid black;
  justify-content: center;
  text-align: center;
}
.tempDetails-currentTemp {
  justify-content: space-around;
  text-align: center;
  margin: auto;
}
.currentTemp-image {
  border: 1px solid black;
}
.currentTemp-temp {
  border: 1px solid black;
}
.tempDetails-weather {
  border: 1px solid black;
  text-align: center;
}
.tempDetails-date {
  border: 1px solid black;
  text-align: center;
}
.tempDetails-stats {
  border: 1px solid black;
}
.stats-wind {
  border: 1px solid black;
}
.wind-image {
  border: 1px solid black;
}
.wind-stat {
  border: 1px solid black;
}
.stats-humidity {
  border: 1px solid black;
}
.humidity-image {
  border: 1px solid black;
}
.humidity-stat {
  border: 1px solid black;
}
.tempDetails-tempRange {
  border: 1px solid black;
}
.tempRange-high {
  border: 1px solid black;
}
.tempRange-low {
  border: 1px solid black;
}
.weatherCard-forecast {
  border: 1px solid black;
  background: blue;
}
</style>

<script>
export default {
  name: "WeatherDashboard",
  components: {
    // Search,
    // Navbar,
    // Footer
  },
  data() {
    return {
      weatherCard: []
    };
  }
};
</script>
