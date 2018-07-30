import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import City from './views/City.vue';
import CityDetails from './views/CityDetails.vue';
import Location from './views/Locations.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/city',
      name: 'CityTest',
      component: City,
    },
    /* {
      path: '/city/:id',
      name: 'City',
      component: City,
    }, */
    {
      path: '/cityDetails',
      name: 'CityDetails',
      component: CityDetails,
    },
    {
      path: '/locations',
      name: 'Locations',
      component: Location,
    },
  ],
});
