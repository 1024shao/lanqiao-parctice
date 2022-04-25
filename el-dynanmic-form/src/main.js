import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
