import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Basic from '../components/Basic'
import Custom from '../components/Custom'
import Another from '../components/Another'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
       path: '/home',
       name: 'Home',
       component: Home
    }, {
       path: '/basic',
       name: 'Basic',
       component: Basic
    }, {
       path: '/custom',
       name: 'Custom',
       component: Custom
    }, {
       path: '/another',
       name: 'Another',
       component: Another
    }
  ]
})
