<template>
	<div>
		<ListGames />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import ListGames from '~/components/organisms/ListGames.vue';

export default Vue.extend({
	name: 'IndexPage',

	components: {
		ListGames,
	},
});
</script>

<style lang="scss">
.container {
	max-width: 70rem;
	width: 100%;
	margin: 0px auto;
	padding: 0px 1rem;
}
</style>
