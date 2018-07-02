<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Firebase from 'firebase';

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
const cityRef = db.ref('cities');

export default {
  name: 'App',
  firebase: {
    cities: cityRef,
  },
  components: {
    AppHeader,
  },
  data() {
    return {
      requestCity: 'requested_city',
    };
  },
};
</script>

<style>
@import './assets/css/animate.css';
@import './assets/css/bootstrap.css';
@import "http://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

body {
  background-color: #DEEFFF;
  background-color: rgba(255, 255, 255, 1);
  height: 100vh;
}
#header {
  top: 0;
  left: 0;
}
#footer {
  bottom: 0;
  left: 0;
}
</style>
