import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'
import Ripple from 'vue-ripple-directive'

Vue.use(VueApexCharts)
Vue.directive('ripple', Ripple)

Vue.component('apexchart', VueApexCharts)

Vue.prototype.$eventBus = new Vue()
