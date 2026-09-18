<template>
		<div class="flex items-center justify-between px-6 py-4 container">
			<div class="flex items-center gap-4">
				<slot name="left">
					<h1 class="text-xl">Smart Reading Coach</h1>
				</slot>
			</div>
			<div class="flex items-center gap-4">
				<slot name="right">
					<button
						class="bg-slate-btn-50 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
						<span>...</span>
					</button>
					<button
						class="bg-brand-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
						<span>Share</span>
					</button>
				</slot>
			</div>
		</div>
</template>

<script setup lang="ts">
</script>
