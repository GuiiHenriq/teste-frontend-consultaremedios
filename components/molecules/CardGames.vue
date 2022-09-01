<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import ShoppingIcon from '~/assets/img/shopping-cart.svg?inline';

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
			<div class="card__description--infos">
				<h2 class="card__name">{{ props.game.name }}</h2>
				<span class="card__price">{{
					props.game.price.toLocaleString('pt-br', {
						style: 'currency',
						currency: 'BRL',
					})
				}}</span>
			</div>

			<div class="card__description--cta">
				<button class="card__button-icon" @click="addCart(game)">
					<ShoppingIcon />
				</button>
			</div>
		</div>

		<button class="card__button" @click="addCart(game)">
			adicionar ao carrinho
		</button>
	</div>
</template>

<style lang="scss" scoped>
.card {
	margin-bottom: 20px;

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
		transition: 0.5s;
	}

	&__price {
		font-size: 16px;
		font-weight: bold;
		color: $darkblue;
		text-align: center;
		transition: 0.5s;
	}

	&__description {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	&__button {
		font-size: 16px;
		font-weight: bold;
		color: $darkblue;
		cursor: pointer;
		margin: 10px auto 0 auto;
		display: none;
		width: 100%;

		&-icon {
			background: $lightblue;
			padding: 7px;
			width: 45px;
			height: 45px;
			border-radius: 3px;
			margin-top: 10px;

			svg {
				width: auto;
				height: auto;
				stroke: $white;
			}
		}
	}

	@media screen and (min-width: 768px) {
		margin-bottom: 0;

		&__thumbnail {
			&-image {
				padding: 12px 20px;
			}
		}

		&__button {
			transition: 0.5s;
			display: none;

			&-icon {
				display: none;
			}
		}

		&__description {
			display: block;

			&--infos {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
		}

		&:hover > .card__description,
		.card__description:hover {
			display: none;
		}

		&:hover > .card__button,
		.card__button:hover {
			display: block;
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
