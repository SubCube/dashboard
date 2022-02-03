<template>
	<section class="calendar">
		<div class="month">
			<span class="date">March 2021</span>
			<div class="wrapper">
				<button class="arrow left" @click="decrement"></button>
				<button class="arrow right" @click="increment"></button>
			</div>
		</div>
		<div class="calendar-items">
			<CalendarItem v-for="item in 7" :key="item" month="Mon" :date="'1' + item" :active="item === counter" />
		</div>
	</section>
</template>
<script lang="ts" setup>
const counter = ref(1)
const increment = () => {
	if (counter.value === 7) counter.value = 1
	else counter.value++
}
const decrement = () => {
	if (counter.value === 1) counter.value = 7
	else counter.value--
}
</script>
<style lang="scss" scoped>
.calendar {
	margin-bottom: 45px;

	.month {
		display: flex;
		justify-content: space-between;
		.date {
			font-family: Roboto;
			font-style: normal;
			font-weight: normal;
			font-size: 20px;
			line-height: 70.19%;
			/* identical to box height, or 14px */

			letter-spacing: -0.075em;
			text-transform: capitalize;

			color: #524f4e;
		}
		.wrapper {
			.arrow {
				border: solid #edc3b4;
				border-width: 0 2px 2px 0;
				display: inline-block;
				padding: 4px;
				background-color: transparent;
				cursor: pointer;
			}
			.arrow + .arrow {
				margin-left: 20px;
			}

			.right {
				transform: rotate(-45deg);
				-webkit-transform: rotate(-45deg);
			}

			.left {
				transform: rotate(135deg);
				-webkit-transform: rotate(135deg);
			}
		}
	}
	&-items {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 50px;
	}
}
</style>
