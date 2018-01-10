<template>
	<div>
		<transition name="fade-in" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'relayPage'
	}
</script>
