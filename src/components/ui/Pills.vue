<template>
	<div class="pills">
		<slot />
	</div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.pills {
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
}
</style>
