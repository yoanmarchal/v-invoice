import Vue from 'vue'
import App from './App.vue'
import Vue2Filters from 'vue2-filters'
import VueDateFns from "vue-date-fns";

Vue.use(VueDateFns)

Vue.use(Vue2Filters)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
