// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)
Vue.use(VueResource)

// 全局过滤器
Vue.filter("sum", function(value, num) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
  return value * num
})
 Vue.filter('fixed', function (value) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
    return value.toFixed(2)
})


Vue.config.productionTip = false

new Vue({ 
  el: '#app',
  router,
  data: {
    eventHub: new Vue(),
    charts: []
  },
  template: '<App/>',
  components: { App }
}).$mount('#app')
