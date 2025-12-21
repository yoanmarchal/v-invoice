import DefaultTheme from 'vitepress/theme'
import './tailwind.css'
// Import des styles de la librairie pour que les composants aient leur look
import 'v-invoice/assets/css/tailwind.css'
import InvoiceDemo from './InvoiceDemo.vue'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('InvoiceDemo', InvoiceDemo)
    
    if (DefaultTheme.enhanceApp) {
      DefaultTheme.enhanceApp(ctx)
    }
  }
}
