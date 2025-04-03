<template>
    <div class="bg-gray-100 text-gray-900">
      <!-- New Arrivals Section -->
      <section class="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h1 class="text-3xl font-bold">DISCOVER THE NEW ARRIVALS</h1>
          <p class="mt-4 text-gray-700">
          Exciting news for all our students! Our library has just received a fresh selection of
          books covering the latest trends, groundbreaking concepts, and timeless inspirations.
          Whether you're passionate about urban planning, interior design, sustainable architecture, fine arts,
          or contemporary visual culture, there's something for everyone. Here are some of the highlights from
          our newest collection:
          Architectural Masterpieces: Explore stunning works from visionary architects and groundbreaking
          projects that redefine spaces.
          Interior & Furniture Design: Discover beautifully curated interiors, innovative furniture concepts, and
          modern living solutions.
          Urban Planning & Sustainable Design: Delve into books that explore the future of smart cities,
          green architecture, and sustainable living.
          Graphic & Industrial Design: Get inspired by cutting-edge visual storytelling, branding insights,
          and product innovation.
          Fine Art & Contemporary Art: Immerse yourself in breathtaking art books featuring renowned painters,
          sculptors, and multimedia artists.
          History & Theory of Architecture & Art: Gain deeper insights into the evolution of artistic and
          architectural movements, from ancient wonders to modern marvels.
          Visit our library today to explore these exciting new additions and fuel your creativity. Can’t make
          it in person? Browse our catalog online and reserve your favorite titles.
          Happy reading and creating!
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
