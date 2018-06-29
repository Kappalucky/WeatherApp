<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
};
</script>

<style>
@import '../static/css/animate.css';
@import '../static/css/bootstrap.css';
@import "http://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

body {
  background-color: #DEEFFF;
}
</style>
