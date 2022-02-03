<template>
	<div class="main">
		<Header />

		<slot />
	</div>
</template>
<script setup></script>

<style lang="scss" scoped>
.main {
	display: flex;
	// min-height: 100vh;
	background: linear-gradient(156.66deg, #ffffff 16.66%, #e89881 87.98%);
	// background: linear-gradient(107.56deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 100%);
}
</style>
