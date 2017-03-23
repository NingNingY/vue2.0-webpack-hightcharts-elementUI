<template>
	<div class="vue-echarts"></div>
</template> 

<script>
	export default {
		props: {
			options: {
				type: Object,
				required: true
			}
		},
		mounted() {
			this.initialize()
			window.addEventListener('resize', event => {
				if (this.options && this.echarts && this.echarts.resize) {
					this.echarts.resize({ silent: false })
				}
			})
		},
		destroyed() {
			this.dispose()
		},
		methods: {
			initialize() {
				if (this.options && this.$el) {
					this.echarts = echarts.init(this.$el)
					this.echarts.setOption(this.options)
				}
			},
			dispose() { 
				if (this.echarts && this.echarts.dispose) {
					this.echarts.dispose()
					this.echarts = null
				}
			}
		}
	}
</script>

<style>
	.vue-echarts {
		width: 100%;
	}
</style>
