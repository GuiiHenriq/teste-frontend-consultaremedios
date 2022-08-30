<script setup lang="ts">
import Card from '~/components/molecules/CardGames.vue';
import FilterGames from '~/components/atoms/FilterGames.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';

interface Games {
	id: number
	name: string
	price: number
	score: number
	image: string
}

const games = ref<Games[]>([]);
const filterGames = ref<Games[]>([]);


function filterOrder(property: string) {
	filterGames.value = games.value.sort((a: any, b: any) => {
		if (a[property] < b[property]) return -1;
		if (a[property] > b[property]) return 1;
		return 0;
	});
}

function getEventFilter(value: string) {
	filterOrder(value);
}

function getGames() {
	axios
		.get(
			'https://raw.githubusercontent.com/ConsultaRemedios/frontend-challenge/master/products.json',
		)
		.then(function (res) {
			games.value = res.data;
			filterOrder('name');
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

			<FilterGames @change="getEventFilter" />
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
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 42px 0;
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
