import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
// import Login from '@/components/Login';
import Locations from '@/components/Locations';
import City from '@/components/City';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/locations',
      name: 'Locations',
      component: Locations,
    },
    {
      path: '/loactions/location/:id',
      name: 'City',
      component: City,
    },
  ],
});
