<template>
	<header>
		<button class="switcher" aria-details="switcher" />
		<nav class="menu">
			<NuxtLink to="/" class="link" active-class="active">
				<img src="/icons/home.svg" alt="home-icon" />
			</NuxtLink>
			<NuxtLink to="/about" class="link" active-class="active">
				<img src="/icons/message.svg" alt="message-icon" />
			</NuxtLink>
			<NuxtLink to="/bank" class="link" active-class="active">
				<img src="/icons/bank.svg" alt="bank-icon" />
			</NuxtLink>
			<NuxtLink to="/docs" class="link" active-class="active">
				<img src="/icons/docs.svg" alt="docs-icon" />
			</NuxtLink>
			<NuxtLink to="/settings" class="link" active-class="active">
				<img src="/icons/settings.svg" alt="settings-icon" />
			</NuxtLink>
		</nav>

		<button class="logout" active-class="active">
			<img src="/icons/logout.svg" alt="logout-icon" />
		</button>
	</header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
header {
	padding: 22px;
	background-color: rgb(250, 240, 236);
	height: 100vh;
	overflow: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	.switcher {
		width: 60px;
		height: 60px;
		background-color: #fa907e;
		border-radius: 50%;
		border: 2px solid #ff6c52;
	}

	.logout {
		width: 50px;
		height: 50px;
		background-color: transparent;
		border: 0;
		cursor: pointer;
	}
	.menu {
		display: flex;
		flex-direction: column;
		align-items: center;
		.link {
			margin-bottom: 44px;
			width: 50px;
			height: 50px;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 9px;
			&.active {
				background-color: #f6f9f5;
				border: 1px solid #fa907e;
				border-radius: 50%;
			}
		}
	}
}
</style>
