<template>
	<div class="book-grid py-10">
		<p v-if="loading" class="text-sm text-slate-btn-600">Boeken laden...</p>
		<p v-else-if="error" class="text-sm text-red-600">{{ error }}</p>
		<p v-else-if="books.length === 0" class="text-sm text-slate-btn-600">Geen boeken gevonden.</p>
		<div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
			<Book v-for="book in books" :key="book._id" :book="book" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useBooks } from '@/composeables/useBooks';
import Book from './Book.vue';

const props = defineProps<{
	genre?: string;
}>();

const { books, loading, error, fetchAll, fetchAllByGenre } = useBooks();

function load() {
	if (props.genre) {
		fetchAllByGenre(props.genre);
	} else {
		fetchAll();
	}
}

onMounted(load);
watch(() => props.genre, load);
</script>
