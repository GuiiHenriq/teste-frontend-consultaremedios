<script setup lang="ts">
import { ref, onMounted, defineEmits } from 'vue';
import axios from 'axios';
import Card from '~/components/molecules/CardGames.vue';
import FilterGames from '~/components/atoms/FilterGames.vue';
import Loading from '~/components/atoms/Loading.vue';

interface Games {
	id: number
	name: string
	price: number
	score: number
	image: string
}

const emit = defineEmits<{
	(e: 'change', value: Games[]): void
}>();

const loader = ref<boolean>(false);
const games = ref<Games[]>([]);
const filterGames = ref<Games[]>([]);
const cartGames = ref<Games[]>([]);

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

function getEventCart(value: Games) {
	cartGames.value.push(value);
	emit('change', cartGames.value);
}

function getGames() {
	loader.value = true;

	axios
		.get(`${process.env.NUXT_ENV_API_URL}/products.json`)
		.then(function (res) {
			games.value = res.data;
			filterOrder('name');
		})
		.catch(function (error) {
			console.log(error);
		})
		.finally(function () {
			loader.value = false;
		});
}

onMounted(() => {
	getGames();
});
</script>

<template>
	<div class="games" :class="{ 'games__loader-wrapper': loader }">
		<header class="games__header">
			<h1 class="games__title">Games</h1>

			<FilterGames v-if="!loader" @change="getEventFilter" />
		</header>

		<main v-if="loader" class="games__loader">
			<Loading />
		</main>

		<main v-else class="games__list">
			<Card
				v-for="game in games"
				:key="game.id"
				:game="game"
				@add="getEventCart"
			/>
		</main>
	</div>
</template>

<style lang="scss" scoped>
.games {
	&__header {
		display: flex;
		flex-direction: column;
		margin-bottom: 42px;
	}

	&__loader-wrapper {
		width: 100%;
	}

	&__title {
		font-weight: 600;
		font-size: 48px;
		color: $darkgray;
		margin-bottom: 15px;
	}

	&__loader {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	&__list {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
	}

	@media screen and (min-width: 768px) {
		&__header {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 42px;
		}

		&__title {
			margin-bottom: 0;
		}

		&__list {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(2, 1fr);
			grid-column-gap: 15px;
			grid-row-gap: 24px
		}
	}

	@media screen and (min-width: 1024px) {
		&__list {
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(2, 1fr);
			grid-column-gap: 31px;
			grid-row-gap: 48px;
		}
	}
}
</style>
