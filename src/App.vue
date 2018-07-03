<template>
  <div id="app">
    <!--<AppHeader></AppHeader>-->
    <router-view/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import 'bootstrap-vue/dist/bootstrap-vue.css';
/* import Firebase from 'firebase';
 Firebase database will be used to validate city name information
const config = {
  apiKey: 'AIzaSyCkim2LV8O1HBvv-pQHlXY91SjC6vvhxDA',
  authDomain: 'sweather-app.firebaseapp.com',
  databaseURL: 'https://sweather-app.firebaseio.com',
  projectId: 'sweather-app',
  storageBucket: 'sweather-app.appspot.com',
  messagingSenderId: '308411867996',
};

const app = Firebase.initializeApp(config);
const db = app.database();
const cityRef = db.ref('cities'); */

export default {
  name: 'App',
  /* firebase: {
    cities: cityRef,
  }, */
  components: {
    AppHeader,
  },
};
</script>

<style>
@import './assets/css/owfont-regular.css';
@import './assets/css/animate.css';
@import './assets/css/bootstrap.css';
@import "http://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
@import 'https://fonts.googleapis.com/css?family=Arima+Madurai:100|Nixie+One|Scope+One';

body {
  background-color: #DEEFFF;
  background-color: rgba(255, 255, 255, 1);
  height: 100vh;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Nixie One', serif;
}
p, ul, li {
  font-family: 'Scope One', cursive;
}
span, em, small {
  font-family: 'Arima Madurai', cursive;
}
#footer {
  bottom: 0;
  left: 0;
}
</style>
