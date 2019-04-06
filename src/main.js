import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import DateFilter from './filters/date' // Import date
import CurrencyFilter from './filters/euro' // Import currency

Vue.filter('currency', CurrencyFilter)
Vue.filter('date', DateFilter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
