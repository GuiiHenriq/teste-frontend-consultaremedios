<script setup lang="ts">
import Card from '~/components/molecules/CardGames.vue';
import FilterGames from '~/components/atoms/FilterGames.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';

const games = ref(null);

function getGames() {
	axios
		.get(
			'https://raw.githubusercontent.com/ConsultaRemedios/frontend-challenge/master/products.json',
		)
		.then(function (res) {
			games.value = res.data;
			console.log(res.data);
		})
		.catch(function (error) {
			console.log(error);
		});
}

onMounted(() => {
	getGames();
});
</script>

<template>
	<div class="games">
		<header class="games__header">
			<h1 class="games__title">Games</h1>

			<FilterGames />
		</header>

		<main class="games__list">
			<div v-for="game in games" :key="game.id">
				<Card :game="game" />
			</div>
		</main>
	</div>
</template>

<style lang="scss">
.games {
	&__header {
		
	}

	&__title {
		font-weight: 600;
		font-size: 48px;
		color: $darkgray;
	}

	&__list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: 31px;
		grid-row-gap: 48px;
	}
}
</style>
