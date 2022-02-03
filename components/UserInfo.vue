<template>
	<section class="user">
		<img src="/icons/userSection/girl.svg" alt="girl" class="user-logo" />
		<div class="name-wrapper">
			<span class="name">diana stark</span>
			<span class="role">blogger Beginner</span>
		</div>
		<div class="notifications">
			<button><img src="/icons/userSection/bell.svg" alt="bell-icon" class="image" /></button>
			<button><img src="/icons/userSection/comment.svg" alt="comment-icon" class="image" /></button>
		</div>
	</section>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.user {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	flex-wrap: nowrap;
	margin-bottom: 44px;
	.user-logo {
		width: 89px;
		height: 89px;
		border: 2px solid red;
		border-radius: 50%;
		margin-right: 40px;
	}
	.name-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		.name {
			margin-bottom: 8px;
			font-family: Roboto;
			font-style: normal;
			font-weight: 500;
			font-size: 24px;
			line-height: 70.19%;
			letter-spacing: -0.075em;
			text-transform: capitalize;
			color: #fa907e;
		}
		.role {
			font-family: Roboto;
			font-style: normal;
			font-weight: 500;
			font-size: 16px;
			line-height: 70.19%;
			/* or 11px */
			letter-spacing: -0.075em;
			text-transform: capitalize;

			color: #edc3b4;
		}
	}
	.notifications {
		margin-left: 100px;
		button {
			background: transparent;
			border: 0;
			cursor: pointer;
			.image {
				width: 20px;
				height: 20px;
			}
		}
		button + button {
			margin-left: 28px;
		}
	}
}
</style>
