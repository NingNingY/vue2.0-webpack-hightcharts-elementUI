import appView from './pages'
import Vue from 'vue/dist/vue.common.js'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


 const routes = [
    {
      path: '/',
      name: 'pages',
      component: appView.Layout.Home,
      redirect: '/home',
      children: [
        {
           path: '/home',
           name: 'pages.home',
           component: appView.Home
        }, {
           path: '/detail/:index',
           name: 'pages.detail',
           component: appView.Detail
        }, {
           path: '/table',
           name: 'pages.table',
           component: appView.Table
        }, {
           path: '/charts',
           name: 'pages.charts',
           component: appView.Charts
        }
      ]
    },

    {path: '*', redirect: '/home'}
 ]

 const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return {y: 0}
  }
})

 export default router
