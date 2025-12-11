import DefaultTheme from 'vitepress/theme'
import './tailwind.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    if (DefaultTheme.enhanceApp) {
      DefaultTheme.enhanceApp(ctx)
    }
  }
}
