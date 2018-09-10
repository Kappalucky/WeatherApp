<template>
  <section id="week-forecast">
    <hr>
    <div
      id="forecast"
      class="py-4">
      <h4>Day Forecast:</h4>
      <div id="summary">
        <!--<h3><span>Cloudy with a chance of meatballs</span></h3>-->
      </div>
      <table class="table table-borderless table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Icon</th>
            <th scope="col">Day</th>
            <th scope="col">Low/High</th>
            <th scope="col">Current Temp</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in weeklyForecast"
            :key="item.index" >
            <th scope="row">
              <img :src="'http://openweathermap.org/img/w/' + item.weather[0].icon + '.png'">
            </th>
            <td>{{ formatDate(item.dt) }}</td>
            <td>{{ convertTemp(item.main.temp_min) }}˚F/{{ convertTemp(item.main.temp_max) }}˚F</td>
            <td>{{ convertTemp(item.main.temp) }}˚F</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script>
import WeatherService from '@/services/WeatherService';
import moment from 'moment';

export default {
  name: 'WeekForecast',
  props: {
    cityId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      cityForecastData: [],
      unitStatus: {
        temp: 'F',
        speed: 'mph',
        distance: 'mi',
      },
      weeklyForecast: [],
    };
  },
  beforeMount() {
    this.getForecast();
  },
  methods: {
    async getForecast() {
      const response = await WeatherService.getForecast({
        id: this.cityId,
      });
      this.cityForecastData = response.data;
      this.getDayForecast();
    },
    // Filters forecast data for current date weather
    getDayForecast() {
      this.weeklyForecast = this.cityForecastData.list
        .filter(item => item.dt_txt.includes(this.getTodaysDate()));
    },
    // Gets current date in 'yyyy-mm-dd' format
    getTodaysDate() {
      let month = 0;

      if (moment().get('month') + 1 < 9) {
        month = moment().get('month') + 1;
      } else {
        month = `0${moment().get('month') + 1}`;
      }

      const today = `${moment().get('year')}-${month}-${moment().get('date')}`;

      return today;
    },
    // Format unix date to date & Time, EX: Sunday, 12pm
    formatDate(date) {
      let day = moment.unix(date);
      day = day.format('dddd, ha');
      //console.log(day);
      return day;
    },
    convertTemp(temp) {
      if (this.unitStatus.temp === 'F') {
        return ((temp * (9 / 5)) - (459.67)).toFixed(0);
      }
      if (this.unitStatus.temp === 'C') {
        return (temp - 273.15).toFixed(0);
      }
      return temp.toFixed(0);
    },
  },
};
</script>
<style scoped>
#forecast h4 {
  color: grey;
  font-family: 'Nixie One';
  text-decoration: underline;
  padding-left: 5px;
  text-align: center;
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
