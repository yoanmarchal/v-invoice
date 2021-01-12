import * as components from './components'

const install = (Vue, options = {}) => {
  for (const key in components) {
    const _key = options.prefix ? options.prefix + key : key
    Vue.component(_key, components[key])
  }
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { install }
