<template>
	<div class="book flex flex-col rounded-card overflow-hidden bg-white">
		<div class="aspect-[2/3] bg-slate-btn-100 max-h-36 max-w-36">
			<img
				v-if="book.imageUrl"
				:src="book.imageUrl"
				:alt="book.title"
				class="w-full h-full object-cover"
			/>
		</div>
		<div class="flex flex-col gap-1 p-3 max-w-36">
			<h3 class="text-sm font-semibold line-clamp-2">{{ book.title }}</h3>
			<p class="text-xs text-slate-btn-600">{{ book.author }}</p>
			<p v-if="book.avgRating" class="text-xs text-brand-800">
				★ {{ book.avgRating.toFixed(1) }}
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { Book } from '@/services/api';

defineProps<{
	book: Book;
}>();
</script>
