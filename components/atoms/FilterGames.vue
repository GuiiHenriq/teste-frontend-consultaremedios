<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits<{
	(e: 'change', value: string): void
}>();

function onChange(event: { target: HTMLInputElement }) {
	emit('change', event.target.value);
}
</script>

<template>
	<div class="select-wrapper">
		<select id="games" name="games" class="select" @change="onChange($event)">
			<option value="name" selected>Ordem Alfabética</option>
			<option value="score">Popularidade</option>
			<option value="price">Preço</option>
		</select>
	</div>
</template>

<style lang="scss">
.select-wrapper {
	position: relative;
	width: 100%;

	@media screen and (min-width: 768px) {
		width: 260px;
	}
}

.select {
	-moz-appearance: none;
	-webkit-appearance: none;
	background: $white;
	border: 1px solid $lightgray;
	border-radius: 4px;
	cursor: pointer;
	padding: 10px 0 10px 18px;
	width: 100%;
	font-size: 14px;
	color: $darknessgray;
	background: url("~assets/img/arrow-down-icon.svg") no-repeat;
	background-position: right 15px top 50%;

	&:focus {
		color: $darknessgray;
	}

	&::-ms-expand {
		display: none;
	}
}
</style>
