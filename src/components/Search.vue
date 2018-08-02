<template>
  <div id="search">
    <div class="active-purple-4 mb-4">
      <input
        class="form-control"
        type="text"
        placeholder="Enter a city or zipcode"
        aria-label="Search">
    </div>
    <div
      id="buttons"
      class="mt-3">
      <button
        type="button"
        class="btn btn-primary">Test</button>
      <button
        type="button"
        class="btn btn-outline-primary">Test2</button>
    </div>
    <!--TO-DO: Add modal to seperate container. trigger by test button click-->
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#basicExampleModal">
      Launch demo modal
    </button>
    <!-- Modal -->
    <div
      id="basicExampleModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div
        class="modal-dialog"
        role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              id="exampleModalLabel"
              class="modal-title">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal">Close</button>
            <button
              type="button"
              class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <!-- End modal -->
  </div>
</template>
<script>
import WeatherService from '@/services/WeatherService';

export default {
  name: 'Search',
  // TO-DO: Add button functions
  data() {
    return {
      cityName: '',
      hasData: false,
      locationError: false,
      error: '',
      weatherDataNow: [],
    };
  },
  methods: {
    async getWeatherNow() {
      // Temporary error checking method
      // does not change data if error, calls error using 'hasData'. logs message to 'error'
      if (this.cityName === '' || this.cityName < 2 || this.cityName === undefined) {
        this.weatherDataNow = '';
        this.hasData = false;
        this.error = 'Please enter a word.';
      }
      // If user input is not a number/zip search data for cityname
      if (isNaN(this.cityName)) {
        try {
          const response = await WeatherService.getWeatherNow({
            city: this.cityName,
          });
          this.weatherDataNow = response.data;
          this.hasData = true;
        } catch (error) {
          this.locationError = true;
          this.error = 'The city name you entered could not be found.';
        }
      } else {
        try {
          const response = await WeatherService.getCurrentWeatherByZip({
            zip: this.cityName,
          });
          this.weatherDataNow = response.data;
          this.hasData = true;
        } catch (error) {
          this.error = 'Invalid text';
        }
      }
    },

  },
};
</script>

<style scoped>
.btn {
  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
    0 2px 10px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  -webkit-border-radius: 10em;
  border-radius: 10em;
  padding: 0.84rem 2.14rem;
  font-size: 0.81rem;
}
</style>
