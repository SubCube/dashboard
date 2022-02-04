<template>
	<div class="main">
		<div class="content">
			<UserInfo />
			<Calendar />
			<Meetings />
		</div>
		<div class="block">
			<div class="search">
				<input type="text" placeholder="Search" />
			</div>
			<Welcome />

			{{ counter }}

			<button @click="increment">GG</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useStore } from '~~/store'
import Meetings from '~~/components/Meetings.vue'
const store = useStore()

const { counter } = storeToRefs(store)
const { increment } = store
definePageMeta({
	layout: 'default',
})
</script>

<style scoped lang="scss">
.main {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	flex-wrap: nowrap;
	width: 100%;

	@media (max-width: 1023px) {
		flex-direction: column;
	}
	.content {
		padding: 27px 70px;
		border: 2px solid #fff;
		border-radius: 50px 0px 0px 50px;
		background: linear-gradient(107.56deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 100%);
		height: 100vh;
		overflow: scroll;
	}
	.block {
		flex: 1;
		padding: 32px 65px;
		.search {
			display: flex;
			justify-content: flex-end;
			input {
				width: 311px;
				height: 51px;
				display: flex;
				align-items: center;
				padding: 0 18px;
				border-radius: 30px;
				font-weight: 500;
				font-size: 20px;
				line-height: 70.19%;
				/* identical to box height, or 14px */
				letter-spacing: -0.075em;
				text-transform: capitalize;
				border: 2px solid #fff;
				color: rgba(250, 144, 126, 0.49);
				background: linear-gradient(111.15deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.16) 100%);
			}
		}
	}
}
</style>
