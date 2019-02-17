import * as mylib from '../../src'
import { createDateFilter } from "vue-date-fns";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(mylib)
  Vue.use(createDateFilter)
}