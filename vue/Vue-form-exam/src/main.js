import Vue from 'vue'
import App from './App.vue'
import store from './store'

import Status from './status'
Vue.component('Appstatus', Status)



Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')