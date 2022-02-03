<template>
	<section class="meetings">
		<h2 class="title">Meetings</h2>
		<div class="contacts-list">
			<MeetingsItem v-for="item in 5" :key="item" />
		</div>
	</section>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.meetings {
	.title {
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 20px;
		line-height: 70.19%;
		/* identical to box height, or 14px */
		letter-spacing: -0.075em;
		text-transform: capitalize;
		color: #524f4e;
		margin-bottom: 50px;
	}
}
</style>
