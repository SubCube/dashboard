<template>
	<div class="main">
		<div class="content">
			<UserInfo />
			<Calendar />
			<Meetings />
		</div>
		<div class="block">
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
	.content {
		padding: 27px 70px;
		border: 2px solid #fff;
		border-radius: 50px 0px 0px 50px;
		background: linear-gradient(107.56deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 100%);
		height: 100vh;
		overflow: scroll;
	}
}
</style>
