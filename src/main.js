import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$api = axios.create({
  baseURL : 'https://allweb.fun/coop/api/',
  params : {
    test : 'true'
  },
  headers : {'Authorization' : '0aea1d1e8425b6bc9f0aca610ca91d21337fc4dd'}
});
Vue.prototype.$bus = new Vue();

Vue.prototype.$api.interceptors.request.use(function (config) {
  console.log(config);
  if(store.state.token){
    config.params.token= store.state.token;
  }
  return config;
});

Vue.config.productionTip = false

//Vue.component('Navigation', ()=> import('@/components/Navigation.vue'))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
