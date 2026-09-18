<script setup lang="ts">
import Hero from './components/layout/Hero.vue';
import Menu from './components/layout/Menu.vue';
import BookGrid from './components/book/BookGrid.vue';
import SectionHeader from './components/ui/SectionHeader.vue';
</script>

<template>
  <Menu />
  <main>
  <Hero />
  <SectionHeader />
  <BookGrid />
  </main>
</template>
