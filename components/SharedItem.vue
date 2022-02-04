<template>
	<div class="shared-item">
		<img class="shared-item-image" src="/icons/userSection/folder.svg" alt="folder-icon" />
		<span class="shared-item-name">Dashboards.svg</span>
		<div class="shared-item-date">{{ new Date().toLocaleDateString() }}</div>
	</div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.shared-item {
	display: flex;
	background: rgb(245, 250, 243);
	box-shadow: 3px 4px 4px #ebc1b4;
	padding: 22px;
	border-radius: 8px;
	align-items: center;

	&:hover {
		box-shadow: 3px 15px 4px #ebc1b4;
		background: rgb(227, 233, 225);
	}
	&-image {
		margin-right: 17px;
	}
	&-name {
		font-family: Roboto;
		font-style: normal;
		font-weight: 500;
		font-size: 20px;
		line-height: 106.7%;
		letter-spacing: -0.075em;
		color: #e0b4a4;
		margin-right: 54px;
	}
	&-date {
		font-family: Roboto;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 70.19%;
		letter-spacing: -0.075em;
		text-transform: capitalize;
		color: #d5d3d2;
	}
}
</style>
