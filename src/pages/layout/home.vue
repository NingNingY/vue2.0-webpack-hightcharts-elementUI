<template>
	<div id="layout-home">
		<header-view></header-view>
		<!-- <sidebar-view></sidebar-view> -->
		<div id="main-content">
			<transition name="fade-in" mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>
<script>
	import HeaderView from '../../common/components/header.vue'
	// import SidebarView from './sidebar.vue'

	export default {
		name: 'layoutPage',
		components: {
			HeaderView,
			// SidebarView
		}
	}
</script>
<style lang="scss" scoped type="text/scss">
	// @import '~assets/sass/variables.scss';

	#layout-home {
    width: 100%;
    min-height: 100vh;


	}
</style>
