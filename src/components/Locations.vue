<template>
  <div class="Locations">
    <!-- City overview list component goes here -->
    <b-container id="select-location">
      <b-row>
        <b-col>
          <div class="city-overview">
              <h2>Current City Data</h2>
              <div class="data list">
                <ul>
                  <!--<li v-for="(info, index) in weatherData" :key="index">
                    <router-link v-bind:to="{ name: 'City',
                    params: { id: city, city: cityInput } }">{{ info }}
                    </router-link>
                  </li> -->
                </ul>
              </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Locations',
  data() {
    return {
      sliding: null,
      id: this.$route.params.id,
      cityName: this.cityData.name,
      cityData: this.$route.params.data,
      forecastData: this.$route.params.forecastData,
    };
  },
};
</script>

<style scoped>

</style>
