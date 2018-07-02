import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import Home from '@/components/Home';
// import Login from '@/components/Login';
import Locations from '@/components/Locations';
import City from '@/components/City';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/locations',
      name: 'Locations',
      component: Locations,
    },
    {
      path: '/locations/city/:id',
      name: 'City',
      component: City,
    },
  ],
});
