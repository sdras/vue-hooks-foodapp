import Vue from 'vue';
import { hooks } from 'vue-hooks';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false

Vue.use(hooks)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
