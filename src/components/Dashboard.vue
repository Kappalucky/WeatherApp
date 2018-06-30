<template>
  <div class="dashboard">
    <b-container>
      <b-row>
        <b-col>
          <!--<graphs></graphs>-->
          <img src="@/assets/logo.png">
          <!-- input tag to enter city name -->
          <div class="form-group">
            <input type="text" placeholder="Enter a city/town name..." v-model="cityInput" class="form-control"/>
            <button @click="addCity" type="submit">Get Weather</button>
            <button @click="loadData" type="submit">Load Weather</button>
          </div>
          <h1>{{ cityInput }}</h1>
          <div>
            <ul>
              <li v-for="(data, index) in cityData" :key='index'>
                {{index}} {{ data }}
              </li>
              <hr>
              <li v-for="(data, index) in userData" :key='index'>
                {{index}} {{ data }}
              </li>
            </ul>
          </div>
        </b-col>
        <!--<b-col></b-col>-->
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions, } from 'vuex'
import axios from 'axios';

export default {
  name: 'Dashboard',
  data() {
    return {
      cityInput: '',
    };
  },
  mounted () {
    axios
      .get('http://api.openweathermap.org/data/2.5/forecast?id=524901&units=metric&APPID=6e6d2d2ccd4f746698bca6b482d1507f')
      .then(response => (this.info = response.data.bpi))
  },
  computed: {
    ...mapState([
      'userData',
      'cityData',
    ]),
  },
  methods: {
    ...mapMutations([
      'ADD_USER_INPUT',
    ]),
    ...mapActions([
      'LOAD_CITY_WEATHER',
    ]),
    addCity: function() {
      this.ADD_USER_INPUT(this.cityInput);
      this.cityInput = '';
    },
    loadData: function() {
      this.LOAD_CITY_WEATHER();
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
.dashboard {
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>
