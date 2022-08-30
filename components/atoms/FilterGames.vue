<script setup lang="ts"></script>

<template>
	<div class="select-wrapper">
		<select id="games" name="games" class="select">
			<option value="alphabetical">Ordem Alfabética</option>
			<option value="popularity">Popularidade</option>
			<option value="price">Preço</option>
		</select>
	</div>
</template>

<style lang="scss">
.select-wrapper {
	position: relative;
	width: 350px;
	// Dropdown icon
	&::after {
		color: black;
		content: '▾';
		margin-right: 10px;
		pointer-events: none;
		position: absolute;
		right: 10px;
		top: 7px;
		font-size: 20px;
	}
}

// Default state
.select {
	-moz-appearance: none;
	-webkit-appearance: none;
	background: white;
	border: 1px solid #E1E1E1;
  border-radius: 4px;
	cursor: pointer;
	padding: 12px;
	width: 100%;
	font-size: 18px;
	&:focus {
		color: black;
	}
	// Hack for IE 11+
	&::-ms-expand {
		display: none;
	}
}
</style>
