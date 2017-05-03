// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import axios from 'axios';
import router from './router';

Vue.config.productionTip = false
window.axios = axios;
/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  // axios,
  template: '<App/>',
  components: { App }
}).$mount('#app');

