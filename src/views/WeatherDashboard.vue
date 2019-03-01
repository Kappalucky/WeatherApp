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
              <div class="tempDetails-location">LocationName{{LocationName}}</div>
              <div class="tempDetails-currentTemp">
                <div class="currentTemp-image">Image{{Image}}</div>
                <div class="currentTemp-temp">Temp{{Temperature}}</div>
              </div>
              <div class="tempDetails-weather">Weather{{Weather}}</div>
              <div class="tempDetails-date">DayOfWeek{{dayOfWeek}}</div>
              <br>
              <div class="tempDetails-stats">
                <div class="stats">
                  <div class="stats-wind">
                    <div class="wind-image">Image{{windImage}}</div>
                    <div class="wind-stat">Stat{{windNumber}}</div>
                  </div>
                  <div class="stats-humidity">
                    <div class="humidity-image">Image{{humidityImage}}</div>
                    <div class="humidity-stat">Stat{{humidityNumber}}</div>
                  </div>
                </div>
                <br>
                <div class="stats-tempRange">
                  <div class="tempRange-high">High{{tempHigh}}</div>
                  <div class="tempRange-low">Low{{tempLow}}</div>
                </div>
              </div>
            </aside>
            <aside class="col-md weatherCard-forecast list-group">
              <template>
                <a href="#" class="list-group-item list-group-item-action active">Cras justo odio</a>
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
}
.tempDetails-location {
  border: 1px solid black;
  text-align: center;
  margin: 10px;
  padding: 5px;
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
  border: 1px solid black;
  padding: 25px;
  height: 100px;
  width: 100px;
  margin-right: 1em;
}
.currentTemp-temp {
  border: 1px solid black;
  font-size: 2em;
  padding: 5px;
  font-style: italic;
}
.tempDetails-weather {
  border: 1px solid black;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.tempDetails-date {
  border: 1px solid black;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.tempDetails-stats {
  border: 1px solid black;
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  margin: auto;
}
.stats {
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 10px;
}
.stats-wind {
  border: 1px solid black;
  display: flex;
  flex-flow: row wrap;
  margin: 5px;
}
.wind-image {
  border: 1px solid black;
  /*height: 25px;*/
  /*width: 25px;*/
  padding: 5px;
  /*margin-right: 5px;*/
}
.wind-stat {
  border: 1px solid black;
  padding: 10px;
  margin-left: 2px;
}
.stats-humidity {
  border: 1px solid black;
  display: flex;
  flex-flow: row wrap;
  margin: 5px;
}
.humidity-image {
  border: 1px solid black;
  padding: 5px;
}
.humidity-stat {
  border: 1px solid black;
  padding: 10px;
  margin-left: 2px;
}
.stats-tempRange {
  border: 1px solid black;
  padding: 25px;
}
.tempRange-high {
  border: 1px solid black;
  padding: 10px;
}
.tempRange-low {
  border: 1px solid black;
  padding: 10px;
}
.weatherCard-forecast {
  border: 1px solid black;
  padding: 0;
}

.list-group > .list-group-item {
  flex: 1;
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
