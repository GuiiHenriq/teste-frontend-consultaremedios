<template>
	<div class="container">
		<Nuxt />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'DefaultLayout',
});
</script>

<style lang="scss">
.container {
	margin: 0px auto;
	padding: 0px 1rem;
	width: auto;

	@media screen and (min-width: 768px) {
	}

	@media screen and (min-width: 1024px) {
		max-width: 75rem;
		width: 100%;
	}
}
</style>
