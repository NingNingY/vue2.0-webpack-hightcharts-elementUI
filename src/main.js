import Vue from 'vue/dist/vue.common.js'
import router from './routes'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import store from './store'
import filters from './common/filters'
import Highstock from 'highcharts/highstock'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
//test

Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(Highstock)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  filters,
  render: h => h(App)
}).$mount('#app')
