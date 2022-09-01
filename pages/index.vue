<script setup lang="ts">
import { ref  } from 'vue';
import ListGames from '~/components/organisms/ListGames.vue';
import CartGames from '~/components/organisms/CartGames.vue';

interface Games {
	id: number
	name: string
	price: number
	score: number
	image: string
}

const gamesCart = ref<Games[]>([]);

function getGamesCart(value: Array<Games>) {
	gamesCart.value = value;
}
</script>

<template>
	<div class="wrapper">
		<ListGames @change="getGamesCart" />
		<CartGames :games="gamesCart" />
	</div>
</template>

<style lang="scss">
.wrapper {
	margin: 42px 0;
	display: flex;
	justify-content: space-between;
	flex-direction: column;

	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
}
</style>
