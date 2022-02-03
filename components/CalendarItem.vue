<template>
	<div :class="['wrapper', active && 'active']">
		<span class="month">{{ month }}</span>
		<span class="date">{{ date }}</span>
	</div>
</template>
<script lang="ts">
export default defineComponent({
	props: {
		month: {
			type: String,
			default: 'Mar',
		},
		date: {
			type: String,
			default: '19',
		},
		active: {
			type: Boolean,
			default: false,
		},
	},
})
</script>
<style lang="scss" scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 23px 14px;
	font-family: Roboto;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 70.19%;
	/* or 11px */

	letter-spacing: -0.075em;
	text-transform: capitalize;
	// transition: 0.2s;
	&.active {
		background: rgba(193, 245, 220, 0.11);
		border: 2px solid #edc3b4;
		border-radius: 30px;
	}
	.month {
		margin-bottom: 20px;

		color: #edc3b4;
	}
	.date {
		color: #524f4e;
	}
}
</style>
