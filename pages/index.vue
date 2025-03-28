<template>
    <div class="bg-gray-100 text-gray-900">
      <!-- New Arrivals Section -->
      <section class="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 class="text-3xl font-bold">DISCOVER THE NEW ARRIVALS</h1>
          <p class="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Nunc fermentum morbi nibh blandit.
          </p>
          <button class="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg">See More</button>
        </div>
        <div class="grid grid-cols-2 gap-4">
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
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-gray-900 text-white text-center py-4 mt-12">
        <p>Rue des Palais 70, 1030 Brussels | Site: Lukas@gmail.com</p>
        <div class="mt-2 text-sm">
          <NuxtLink to="/privacy" class="underline">Privacy policy</NuxtLink> |
          <NuxtLink to="/cookies" class="underline">Cookies policy</NuxtLink>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import BookCard from '@/components/BookCard.vue';
  import PopularBook from '@/components/PopularBook.vue';
  
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
