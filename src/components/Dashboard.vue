<template>
  <div class="dashboard">
    <b-container id="select-location">
      <b-row>
        <b-col>
          <!--<graphs></graphs>-->
          <!-- input tag to enter city name -->
          <div class="form-group">
            <input type="text" placeholder="Enter a city/town name..." v-model="cityInput" class="form-control"/>
              <div>
                <b-button variant="outline-success" @click="addCity" type="submit">Get Weather</b-button>
                <b-button variant="outline-success" @click="loadData" type="submit">Load Weather</b-button>
              </div>
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
    addCityId: function() {
      this.ADD_CITY_ID(this.cityInput);
    },
    loadData: function() {
      this.LOAD_CITY_WEATHER();
    },
    findCityId: function(cityInput) {
      var ref = db.ref('cities');
      ref.orderByChild('name').equalTo(cityInput).on('child_added', function(snapshot) {
        console.log(snapshot.key);
      });
    },
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
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
}
#select-location {
  display: flex;
  justify-content: center;
  height: 50vh;
}
input {
  border: 1px solid grey;
}
</style>
