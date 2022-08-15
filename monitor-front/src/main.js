import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import router from '../router'
import http from 'axios'
import '../api/mock.js'
import dataV from '@jiaminghi/data-view'
import store from '../store'

Vue.use(dataV)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = http

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
