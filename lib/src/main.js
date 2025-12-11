import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import DateFilter from './filters/date'
import CurrencyFilter from './filters/euro'

const app = createApp(App)

// Register filters as global properties for backward compatibility
app.config.globalProperties.$filters = {
  currency: CurrencyFilter,
  date: DateFilter
}

// Register filters as custom directives for template usage
app.config.globalProperties.$currency = CurrencyFilter
app.config.globalProperties.$date = DateFilter

app.mount('#app')
