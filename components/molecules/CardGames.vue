<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
	game: object
}>();
</script>

<template>
	<div class="card">
		<div class="card__thumbnail">
			<img
				src="https://raw.githubusercontent.com/ConsultaRemedios/frontend-challenge/master/assets/mortal-kombat-xl.png"
				alt=""
				class="card__thumbnail-image"
			/>
		</div>

		<h2 class="card__name">{{ props.game.name }}</h2>
		<span class="card__price">R$ {{ props.game.price }}</span>

		<button class="card__button">adicionar ao carrinho</button>
	</div>
</template>

<style lang="scss">
.card {
	transition: 0.5s;

	&__thumbnail {
		background: $background;
		display: flex;
		align-items: center;
		justify-content: center;

		&-image {
			padding: 25px 41px;
		}
	}

	&__name {
		font-size: 16px;
		color: $gray;
		margin: 10px 0;
		text-align: center;
	}

	&__price {
		font-size: 16px;
		font-weight: bold;
		color: $darkblue;
		text-align: center;
		margin: 0 auto;
		display: block;
	}

	&__button {
		font-size: 16px;
		font-weight: bold;
		color: $darkblue;
		cursor: pointer;
		margin: 10px auto 0 auto;
		display: none;
	}
}
</style>