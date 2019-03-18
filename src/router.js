import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

import Home from './views/Home.vue';
import City from './views/City.vue';
import WeatherDashboard from './views/WeatherDashboard.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/',
    },
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
      path: '/city/:id',
      name: 'City',
      component: City,
      children: [{ path: '/city', redirect: { name: 'home' } }],
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: WeatherDashboard,
      meta: {
        requiresData: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresData = to.matched.some(x => x.meta.requiresData);
  const hasData = store.state.weatherCard.length !== 0;

  if (requiresData && !hasData) {
    next('/');
  } else if (requiresData && hasData) {
    next();
  } else {
    next();
  }
});

export default router;
