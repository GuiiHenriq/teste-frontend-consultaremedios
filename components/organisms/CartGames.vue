<script setup lang="ts">
import { ref, computed, defineProps } from 'vue';
import CartIcon from '~/assets/img/cart-icon.svg?inline';

const priceLimit = ref<number>(250);

const props = defineProps<{
	games: Array<[]>
}>();

const gamesData = computed(() => {
	return props.games;
});

const gamesLength = computed(() => {
	return props.games.length;
});

const gamesSubtotal = computed(() => {
	return gamesData.value.reduce((acc: any, game: any) => acc + game.price, 0);
});

const gamesFrete = computed(() => {
	return gamesLength.value * 10;
});

const gamesTotalPrice = computed(() => {
	return gamesSubtotal.value + gamesFrete.value;
});

function convertBRL(price: number) {
	return price.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL',
	});
}

function removeGame(index: number) {
	gamesData.value.splice(index, 1);
}
</script>

<template>
	<aside class="cart">
		<div class="cart__header">
			<h3 class="cart__name">Carrinho</h3>

			<span v-if="gamesLength && gamesLength === 1" class="cart__count"
			>({{ gamesLength }} item)</span
			>
			<span v-if="gamesLength && gamesLength > 1" class="cart__count"
			>({{ gamesLength }} itens)</span
			>
		</div>

		<section v-if="!gamesLength" class="cart__empty" data-cy="cart-empty">
			<CartIcon class="cart__empty-icon" />

			<p class="cart__empty-label">
				Até o momento,<br />o seu carrinho está vazio
			</p>
		</section>

		<section v-else>
			<div class="cart__list-game">
				<div v-for="(game, index) in gamesData" :key="index" class="cart__game" data-cy="cart-game">
					<div class="cart__game-thumbnail">
						<img
							:src="`/img/${game.image}`"
							:alt="`Capa do jogo: ${game.name}`"
							:title="game.name"
							class="cart__game-thumbnail--image"
						/>
					</div>

					<div class="cart__game-description">
						<div class="cart__game-infos">
							<h2 class="cart__game-name" data-cy="name-game-cart">{{ game.name }}</h2>
							<span class="cart__game-price" data-cy="price-game-cart">{{ convertBRL(game.price) }}</span>
						</div>

						<div class="cart__game-remove" data-cy="btn-remove-game">
							<button @click="removeGame(index)">X</button>
						</div>
					</div>
				</div>
			</div>

			<div class="cart__infos">
				<div>
					<p class="cart__infos-label">subtotal</p>

					<span class="cart__infos-price" data-cy="subtotal-cart">{{ convertBRL(gamesSubtotal) }}</span>
				</div>

				<div>
					<p class="cart__infos-label">frete</p>

					<span class="cart__infos-price" data-cy="frete-cart">{{
						gamesSubtotal <= priceLimit ? convertBRL(gamesFrete) : convertBRL(0)
					}}</span>
				</div>

				<div>
					<p class="cart__infos-label">total</p>

					<span class="cart__infos-price large" data-cy="price-cart">{{
						gamesSubtotal <= priceLimit
							? convertBRL(gamesTotalPrice)
							: convertBRL(gamesSubtotal)
					}}</span>
				</div>
			</div>

			<button class="cart__button">finalizar compra</button>
		</section>
	</aside>
</template>

<style lang="scss">
.cart {
	padding: 20px 25px;
	border: 1px solid $lightgray;
	border-radius: 3px;
	width: auto;
	height: max-content;
	order: -1;
	margin: 0 0 30px 0;

	&__header {
		display: flex;
		align-items: center;
	}

	&__count {
		color: $silver;
		font-size: 14px;
		font-weight: normal;
		margin-left: 3px;
	}

	&__name {
		font-size: 18px;
		font-weight: bold;
		color: $darkgray;
	}

	&__empty {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 50px 0 80px 0;

		&-label {
			color: $gray;
			font-size: 14px;
			text-align: center;
			margin-top: 18px;
		}
	}

	&__list-game {
		margin-top: 20px;
	}

	&__game {
		display: flex;
		align-items: center;
		margin-bottom: 20px;

		&-thumbnail {
			background: $background;
			border-radius: 3px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 10px;

			&--image {
				width: 100%;
				padding: 5px 10px;
				width: 41px;
				height: 42px;
			}
		}

		&-description {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		&-remove {
			button {
				border-radius: 50%;
				background: $lightblue;
				color: $white;
				font-weight: bold;
				font-size: 10px;
				width: 15px;
				height: 15px;
				padding-left: 1px;
				text-align: center;
				display: flex;
				align-items: center;
				justify-content: center;
				cursor: pointer;
			}
		}

		&-name {
			font-size: 14px;
			color: $silver;
			margin-bottom: 1px;
		}

		&-price {
			font-size: 14px;
			color: $darknessgray;
			font-weight: bold;
		}
	}

	&__infos {
		& > div {
			display: flex;
			justify-content: space-between;
			margin-bottom: 15px;
		}

		&-label {
			font-size: 14px;
			color: $silver;
		}

		&-price {
			font-size: 16px;
			color: $darknessgray;
			font-weight: bold;

			&.large {
				font-size: 20px;
			}
		}
	}

	&__button {
		border-radius: 3px;
		background: $lightblue;
		color: $white;
		font-size: 14px;
		font-weight: bold;
		width: 100%;
		padding: 15px 0;
		text-align: center;
		cursor: pointer;
	}

	@media screen and (min-width: 768px) {
		width: 262px;
		margin: 4px 0 0 20px;
		order: 1;

		&__game {
			&-remove {
				button {
					opacity: 0;
					transition: 0.5s;
				}
			}

			&:hover > .cart__game-description,
			.cart__game-remove:hover {
				button {
					opacity: 1;
				}
			}
		}
	}

	@media screen and (min-width: 1024px) {
		margin: 4px 0 0 0;
	}
}
</style>
