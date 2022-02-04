<template>
	<section class="shared">
		<h2 class="shared-title">Shared Files</h2>
		<div class="shared-wrapper">
			<SharedItem v-for="item in 2" :key="item" />
		</div>
	</section>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.shared {
	margin-top: 50px;
	&-title {
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 20px;
		line-height: 70.19%;
		/* identical to box height, or 14px */

		letter-spacing: -0.075em;
		text-transform: capitalize;

		color: #524f4e;
		margin-bottom: 30px;
	}
	&-wrapper {
		display: flex;
		justify-content: space-around;
	}
}
</style>
