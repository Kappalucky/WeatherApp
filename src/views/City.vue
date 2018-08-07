<template>
  <section id="city">
    <new-search/>
    <info-banner/>
    <current-temp/>
    <!--<time-chart/>
    <weather-map/>-->
    <week-forecast/>
    <div id="see_more">
      <!--Link to page with full forcast info-->
      <!--Link to see page with multiple city data-->
      <router-link :to="{ path: 'City' }">
        <button
          type="button"
          class="btn btn-secondary">
          Full Forecast
        </button>
      </router-link>
      <router-link :to="{ path: 'Locations' }">
        <button
          type="button"
          class="btn btn-primary">
          compare to other locations
        </button>
      </router-link>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import CurrentTemp from '@/components/cityPage/CurrentTemp.vue';
import InfoBanner from '@/components/cityPage/InfoBanner.vue';
import NewSearch from '@/components/cityPage/NewSearch.vue';
import TimeChart from '@/components/cityPage/TimeChart.vue';
import WeatherMap from '@/components/cityPage/WeatherMap.vue';
import WeekForecast from '@/components/cityPage/WeekForecast.vue';

export default {
  name: 'City',
  components: {
    CurrentTemp,
    InfoBanner,
    TimeChart,
    WeatherMap,
    WeekForecast,
    NewSearch,
  },
};
</script>

<style scoped>
#see_more {
  text-align: center;
  margin-bottom: 15px;
}
</style>
