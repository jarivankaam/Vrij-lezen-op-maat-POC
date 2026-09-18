import axios, { type AxiosInstance } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';

const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Books (MongoDB)
export interface Book {
  _id: string;
  isbn: string;
  title: string;
  author: string;
  genres: string[];
  summary?: string;
  avgRating: number;
  ratingCount: number;
  imageUrl?: string;
  materialType?: string;
  level?: string;
  createdAt: string;
  updatedAt: string;
}

export type CreateBookDto = Pick<Book, 'isbn' | 'title' | 'author'> &
  Partial<Pick<Book, 'genres' | 'summary' | 'avgRating' | 'ratingCount' | 'imageUrl' | 'materialType' | 'level'>>;

export type UpdateBookDto = Partial<CreateBookDto>;

// Users (Postgres)
export interface User {
  id: number;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export type CreateUserDto = Pick<User, 'email' | 'name'>;
export type UpdateUserDto = Partial<CreateUserDto>;

// Recommendations (Postgres)
export interface Recommendation {
  id: number;
  userId: number;
  bookIds: string[];
  note?: string;
  createdAt: string;
  updatedAt: string;
}

export type CreateRecommendationDto = Pick<Recommendation, 'userId' | 'bookIds'> &
  Partial<Pick<Recommendation, 'note'>>;

export type UpdateRecommendationDto = Partial<CreateRecommendationDto>;

export const booksApi = {
  getAll: () => apiClient.get<Book[]>('/books').then((res) => res.data),
  getById: (id: string) => apiClient.get<Book>(`/books/${id}`).then((res) => res.data),
  getOneByGenre: (genre: string) =>
    apiClient.get<Book>(`/books/genre/${genre}`).then((res) => res.data),
  getAllByGenre: (genre: string) =>
    apiClient.get<Book[]>(`/books/genre/all/${genre}`).then((res) => res.data),
  create: (data: CreateBookDto) => apiClient.post<Book>('/books', data).then((res) => res.data),
  update: (id: string, data: UpdateBookDto) =>
    apiClient.patch<Book>(`/books/${id}`, data).then((res) => res.data),
  remove: (id: string) => apiClient.delete<Book>(`/books/${id}`).then((res) => res.data),
};

export const usersApi = {
  getAll: () => apiClient.get<User[]>('/users').then((res) => res.data),
  getById: (id: number) => apiClient.get<User>(`/users/${id}`).then((res) => res.data),
  create: (data: CreateUserDto) => apiClient.post<User>('/users', data).then((res) => res.data),
  update: (id: number, data: UpdateUserDto) =>
    apiClient.patch<User>(`/users/${id}`, data).then((res) => res.data),
  remove: (id: number) => apiClient.delete<User>(`/users/${id}`).then((res) => res.data),
};

export const recommendationsApi = {
  getAll: () => apiClient.get<Recommendation[]>('/recommendations').then((res) => res.data),
  getById: (id: number) =>
    apiClient.get<Recommendation>(`/recommendations/${id}`).then((res) => res.data),
  create: (data: CreateRecommendationDto) =>
    apiClient.post<Recommendation>('/recommendations', data).then((res) => res.data),
  update: (id: number, data: UpdateRecommendationDto) =>
    apiClient.patch<Recommendation>(`/recommendations/${id}`, data).then((res) => res.data),
  remove: (id: number) =>
    apiClient.delete<Recommendation>(`/recommendations/${id}`).then((res) => res.data),
};

export default apiClient;
