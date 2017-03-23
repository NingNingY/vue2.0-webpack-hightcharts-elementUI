/**
 * Vue-Echarts
 * @author Surmon.me
 */

const EchartsComponent = require('./echarts.vue')
const Echarts = {
	echarts: EchartsComponent,
	install: function(Vue) {
		Vue.component('echarts', EchartsComponent)
	}
}
window.echarts = require('echarts')
module.exports = Echarts
 