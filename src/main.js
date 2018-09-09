import Vue from 'vue';
import 'vue-client-table/dist/vue-client-table.min';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(window.VueClientTable);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
