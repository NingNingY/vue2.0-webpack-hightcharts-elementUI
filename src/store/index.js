import Vue from 'vue/dist/vue.common.js'
import Vuex from 'vuex'
Vue.use(Vuex)

// modules
import articles from './modules/articles'
import charts from './modules/charts'
import table from './modules/table'

// 暴露Store
 const store = new Vuex.Store({
	// 模块
	modules: {
    articles,
    charts,
    table
	},
	strict: true
})

export default store
