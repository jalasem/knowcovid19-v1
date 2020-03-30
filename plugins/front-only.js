import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'
import Ripple from 'vue-ripple-directive'
import Loading from 'vue-loading-overlay'

import 'vue-loading-overlay/dist/vue-loading.css'

Vue.use(VueApexCharts)
Vue.directive('ripple', Ripple)
Vue.use(Loading)

Vue.component('apexchart', VueApexCharts)

Vue.prototype.$eventBus = new Vue()
