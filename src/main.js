// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Axios from 'axios'


Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */

import store from './store/index.js' //vuex改变共享数据

Vue.prototype.$http = Axios;//挂载axios

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

