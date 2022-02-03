<template>
	<div class="meeting">
		<img src="/icons/userSection/contactLogo.svg" alt="contact-logo" class="logo" />
		<span class="title">Liza West</span>
		<span class="subtitle">Yoga trainer</span>
		<button class="sms-btn">
			<img src="/icons/userSection/sms.svg" alt="sms-btn" class="sms" />
		</button>
	</div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.meeting {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background: rgb(245, 250, 243);
	box-shadow: 3px 4px 4px #ebc1b4;
	border-radius: 8px;
	margin-bottom: 20px;
	padding: 14px 10px;
	transition: 0.2s;
	&:hover {
		box-shadow: 3px 15px 4px #ebc1b4;
		background: rgb(227, 233, 225);
		.subtitle {
			color: #fff;
		}
	}
	.logo {
		width: 29px;
		height: 32px;
	}
	.title {
		font-family: Roboto;
		font-style: normal;
		font-weight: 500;
		font-size: 20px;
		line-height: 70.19%;
		letter-spacing: -0.075em;
		text-transform: capitalize;
		color: #f47661;
	}
	.subtitle {
		font-family: Roboto;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 70.19%;
		letter-spacing: -0.075em;
		text-transform: capitalize;
		color: #d4d2d2;
	}
	.sms-btn {
		background: transparent;
		border: 0;
		cursor: pointer;
		.sms {
			width: 24px;
			height: 24px;
		}
	}
}
</style>
