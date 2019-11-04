import Vue from 'vue'
import App from './App.vue'
import router from './routers/router'
import axios from 'axios'

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.prototype.$axios = axios

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
