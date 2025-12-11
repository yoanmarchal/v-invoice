import * as components from './components'

const install = (app, options = {}) => {
  for (const key in components) {
    const _key = options.prefix ? options.prefix + key : key
    app.component(_key, components[key])
  }
}

export { install }
