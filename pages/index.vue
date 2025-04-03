<template>
    <div class="bg-gray-100 text-gray-900">
      <!-- New Arrivals Section -->
      <section class="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h1 class="text-3xl font-bold">DISCOVER THE NEW ARRIVALS</h1>
          <p class="mt-4 text-gray-700">
            Exciting news for students! Our library has new books on urban planning, interior design,
            sustainable architecture, fine arts, and more. Explore visionary architecture, curated interiors,
            smart city planning, graphic design, and contemporary art. Visit us or browse online to
            reserve your favorites. Happy reading and creating!
          </p>
          <button class="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg">See More</button>
          </div>

          
        <div class="grid grid-cols-1 gap-2">
          <img src="@/assets/images/5.jpg" class="rounded-lg shadow-lg" />
          <img src="@/assets/images/5.jpg" class="rounded-lg shadow-lg" />
          <img src="@/assets/images/5.jpg" class="rounded-lg shadow-lg" />
          <img src="@/assets/images/5.jpg" class="rounded-lg shadow-lg" />
        </div>
      </section>
  
      <!-- Recommended Books -->
      <section class="container mx-auto px-4 py-12">
        <h2 class="text-2xl font-semibold">RECOMMENDED</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
          <BookCard v-for="book in recommendedBooks" :key="book.id" :book="book" />
        </div>
      </section>
  
      <!-- Popular Books -->
      <section class="container mx-auto px-4 py-12">
        <h2 class="text-2xl font-semibold">POPULAR BOOKS</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <PopularBook v-for="book in popularBooks" :key="book.id" :book="book" />
          <Bookcard />

        </div>
      </section>
  
     
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';

  
  const recommendedBooks = ref([
    { id: 1, title: 'Book 1', author: 'Author', image: '@/assets/images/5.jpg' },
    { id: 2, title: 'Book 2', author: 'Author', image: '@/assets/images/5.jpg' },
  ]);
  
  const popularBooks = ref([
    { id: 3, title: 'Popular 1', author: 'Author', image: '@/assets/images/5.jpg' },
    { id: 4, title: 'Popular 2', author: 'Author', image: '@/assets/images/5.jpg' },
  ]);
  </script>
  
  <style scoped>
  button:hover {
    background-color: #b91c1c;
  }
  </style>
