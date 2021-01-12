import * as mylib from '../../../lib/src'
import DateFilter from '../../../lib/src/filters/date'
import CurrencyFilter from '../../../lib/src/filters/euro'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(mylib)
  Vue.filter('currency', CurrencyFilter )
  Vue.filter('date', DateFilter )
}
