<template>
  <section id="week-forecast">
    <hr>
    <div id="forecast" class="py-4">
      <h4>Weekly Forecast:</h4>
      <div id="summary">
        <h3><span>Cloudy with a chance of meatballs</span></h3>
      </div>
        <table class="table table-borderless table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Icon</th>
              <th scope="col">Day</th>
              <th scope="col">Low/High</th>
              <th scope="col">Feels like</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><img class="weather-icon" src="https://png.icons8.com/metro/100/000000/sun.png"></th>
              <td>Sunday</td>
              <td>75˚F/90˚F</td>
              <td>96˚F</td>
            </tr>
            <tr>
              <th scope="row">Cloudy</th>
              <td>Monday</td>
              <td>75˚F/90˚F</td>
              <td>96˚F</td>
            </tr>
            <tr>
              <th scope="row">Sun</th>
              <td>Tuesday</td>
              <td>75˚F/90˚F</td>
              <td>96˚F</td>
            </tr>
            <tr>
              <th scope="row">Overcast</th>
              <td>Wednesday</td>
              <td>75˚F/90˚F</td>
              <td>96˚F</td>
            </tr>
            <tr>
              <th scope="row">Cloudy</th>
              <td>Thursday</td>
              <td>75˚F/90˚F</td>
              <td>96˚F</td>
            </tr>
            <tr>
              <th scope="row">Thunder</th>
              <td>Friday</td>
              <td>75˚F/90˚F</td>
              <td>96˚F</td>
            </tr>
            <tr>
              <th scope="row">Rain</th>
              <td>Saturday</td>
              <td>75˚F/90˚F</td>
              <td>96˚F</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'WeekForecast',
};
</script>
<style scoped>
#forecast h4 {
  color: grey;
  font-family: 'Nixie One';
  text-decoration: underline;
  padding-left: 5px;
}
#summary h3 {
  color: rgb(137, 145, 151);
  font-family: 'Courier New', Courier, monospace;
  letter-spacing: -2px;
  font-size: 1.5em;
}

#summary {
  text-align: center;
}
th img {
  width: 40px;
  height: 40px;
}
</style>
