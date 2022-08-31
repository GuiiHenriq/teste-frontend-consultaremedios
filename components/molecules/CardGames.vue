<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits<{
	(e: 'add', value: object): void
}>();

function addCart(event: any) {
	emit('add', event);
}

const props = defineProps<{
	game: object
}>();
</script>

<template>
	<div class="card">
		<div class="card__thumbnail">
			<img
				:src="`/img/${props.game.image}`"
				:alt="`Capa do jogo: ${props.game.name}`"
				:title="props.game.name"
				class="card__thumbnail-image"
			/>
		</div>

		<div class="card__description">
			<h2 class="card__name">{{ props.game.name }}</h2>
			<span class="card__price">{{
				props.game.price.toLocaleString('pt-br', {
					style: 'currency',
					currency: 'BRL',
				})
			}}</span>
		</div>

		<button class="card__button" @click="addCart(game)">
			adicionar ao carrinho
		</button>
	</div>
</template>

<style lang="scss">
.card {
	&__thumbnail {
		background: $background;
		border-radius: 3px;
		display: flex;
		align-items: center;
		justify-content: center;

		&-image {
			padding: 15px 0;
		}
	}

	&__name {
		font-size: 16px;
		color: $gray;
		margin: 10px 0;
		text-align: center;
		transition: 0.5s;
	}

	&__price {
		font-size: 16px;
		font-weight: bold;
		color: $darkblue;
		text-align: center;
		margin: 0 auto;
		display: block;
		transition: 0.5s;
	}

	&__description {
		width: 100%;
	}

	&__button {
		opacity: 0;
		transition: 0.5s;
		font-size: 16px;
		font-weight: bold;
		color: $darkblue;
		cursor: pointer;
		margin: 10px auto 0 auto;
		display: block;
		width: 100%;
	}

	&:hover > .card__description,
	.card__description:hover {
		display: none;
	}

	&:hover > .card__button,
	.card__button:hover {
		opacity: 1;
	}

	@media screen and (min-width: 768px) {
		&__thumbnail {
			&-image {
				padding: 12px 20px;
			}
		}
	}

	@media screen and (min-width: 1024px) {
		&__thumbnail {
			&-image {
				padding: 25px 41px;
			}
		}
	}
}
</style>
