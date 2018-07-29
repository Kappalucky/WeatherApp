import Vue from 'vue';
import moment from 'moment';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.use(moment);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
