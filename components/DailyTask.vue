<template>
	<section class="daily">
		<h2 class="title">Daily Tasks</h2>
		<div class="wrapper">
			<DailyTaskItem
				v-for="item in 4"
				:key="item"
				:text="'Lorem ipsum dolor sit amet consectetur adipisicing elit. In harum voluptatem nihil sapiente' + item"
			/>
		</div>
	</section>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.daily {
	margin-top: 140px;
	.title {
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 20px;
		line-height: 70.19%;
		letter-spacing: -0.075em;
		text-transform: capitalize;

		color: #524f4e;
	}
	.wrapper {
		margin-top: 34px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		@media (max-width: 1500px) {
			flex-direction: column;
		}
	}
}
</style>
