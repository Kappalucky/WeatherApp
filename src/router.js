import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Locations from "./views/Locations.vue";
import City from "./views/City.vue";
import CityDetails from "./views/CityDetails.vue";
import CityForecast from "./views/CityForecast.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/city/:id",
      name: "City",
      component: City
    },
    { path: "", redirect: { name: "Home" } }, // 7 week forecast
    { path: "forecast", name: "CityForecast", component: CityForecast }, // 16 week forecast
    { path: "details", name: "CityDetails", component: CityDetails }, // full data page
    {
      path: "/locations",
      name: "Locations",
      component: Locations
    }
  ]
});
