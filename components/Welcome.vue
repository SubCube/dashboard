<template>
	<section class="welcome">
		<h2 class="title">Good morning, Diana!</h2>
		<p class="info">Enjoy our new system, find more friends and plan your day faster. Have a nice day!</p>
	</section>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.welcome {
	padding: 25px 150px;
	text-align: center;
	background: linear-gradient(111.15deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.504) 100%);
	border-radius: 30px;
	margin-top: 63px;
	.title {
		font-family: Roboto;
		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 70.19%;
		letter-spacing: -0.04em;
		text-transform: capitalize;
		color: #f47661;
		margin-bottom: 14px;
	}
	.info {
		margin: 0 auto;
		max-width: 311px;
		font-family: Roboto;
		font-style: normal;
		font-weight: 500;
		font-size: 20px;
		line-height: 106.69%;
		letter-spacing: -0.075em;
	}
}
</style>
