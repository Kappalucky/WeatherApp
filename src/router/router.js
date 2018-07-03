import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
// import Login from '@/components/Login';
import Locations from '@/components/Locations';
import City from '@/components/City';
import CityDetails from '@/components/CityDetails';
import CityForecast from '@/components/CityForecast';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/city/:id',
      name: 'City',
      component: City,
      children: [
        { path: '/city', redirect: { name: 'Home' } },
        { path: 'forecast', name: 'CityForecast', component: CityForecast },
        { path: 'details', name: 'CityDetails', component: CityDetails },
      ],
    },
    {
      path: '/locations',
      name: 'Locations',
      component: Locations,
    },
  ],
});
