import { ref } from 'vue';
import { booksApi, type Book, type CreateBookDto, type UpdateBookDto } from '@/services/api';

export function useBooks() {
  const books = ref<Book[]>([]);
  const book = ref<Book | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function fetchAll() {
    loading.value = true;
    error.value = null;
    try {
      books.value = await booksApi.getAll();
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Boeken ophalen mislukt';
    } finally {
      loading.value = false;
    }
  }

  async function fetchById(id: string) {
    loading.value = true;
    error.value = null;
    try {
      book.value = await booksApi.getById(id);
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Boek ophalen mislukt';
    } finally {
      loading.value = false;
    }
  }

  async function fetchAllByGenre(genre: string) {
    loading.value = true;
    error.value = null;
    try {
      books.value = await booksApi.getAllByGenre(genre);
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Boeken ophalen mislukt';
    } finally {
      loading.value = false;
    }
  }

  async function createBook(data: CreateBookDto) {
    loading.value = true;
    error.value = null;
    try {
      const created = await booksApi.create(data);
      books.value.push(created);
      return created;
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Boek aanmaken mislukt';
      throw err;
    } finally {
      loading.value = false;
    }
  }

  async function updateBook(id: string, data: UpdateBookDto) {
    loading.value = true;
    error.value = null;
    try {
      const updated = await booksApi.update(id, data);
      const index = books.value.findIndex((b) => b._id === id);
      if (index !== -1) books.value[index] = updated;
      if (book.value?._id === id) book.value = updated;
      return updated;
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Boek bijwerken mislukt';
      throw err;
    } finally {
      loading.value = false;
    }
  }

  async function removeBook(id: string) {
    loading.value = true;
    error.value = null;
    try {
      await booksApi.remove(id);
      books.value = books.value.filter((b) => b._id !== id);
      if (book.value?._id === id) book.value = null;
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Boek verwijderen mislukt';
      throw err;
    } finally {
      loading.value = false;
    }
  }

  return {
    books,
    book,
    loading,
    error,
    fetchAll,
    fetchById,
    fetchAllByGenre,
    createBook,
    updateBook,
    removeBook,
  };
}
