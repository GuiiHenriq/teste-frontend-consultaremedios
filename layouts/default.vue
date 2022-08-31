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
	max-width: 75rem;
	width: 100%;
	margin: 0px auto;
	padding: 0px 1rem;
}
</style>
