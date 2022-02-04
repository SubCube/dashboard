<template>
	<div class="task-item">
		{{ text }}
	</div>
</template>
<script lang="ts" setup>
defineProps({
	text: {
		type: String,
		required: true,
	},
})
</script>
<style lang="scss" scoped>
.task-item {
	display: flex;
	align-items: center;
	text-align: center;
	justify-content: center;
	background: linear-gradient(111.15deg, rgba(255, 255, 255, 0.8) 0%, rgba(245, 247, 242, 0.8) 100%);
	padding: 9px;
	text-align: center;
	width: 164px;
	height: 164px;
	border-radius: 30px;
	font-family: Roboto;
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 106.7%;
	/* or 21px */

	text-align: center;
	letter-spacing: -0.075em;

	/* Персиковый_основной */

	color: #f47661;

	@media (max-width: 1500px) {
		margin-top: 25px;
		width: 100%;
	}
}
</style>
