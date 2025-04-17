<template>
  <div class="bg-gray-100 text-gray-900">
    <!-- Top Navigation Bar -->
    <header class="bg-white shadow px-4 py-3 flex items-center justify-end fixed top-0 left-0 right-0 z-50">
      <!-- Search Bar -->
      <div class="flex items-center space-x-2 mr-6">
        <input 
          type="text" 
          placeholder="Search books" 
          class="w-72 py-1.5 pl-4 pr-4 bg-gray-700 text-white placeholder-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      <!-- Icon Buttons -->
      <div class="flex items-center space-x-6 text-gray-700">
        <NuxtLink to="/cart" class="hover:text-red-600">
          <ShoppingCartIcon class="w-6 h-6" />
        </NuxtLink>
        <NuxtLink to="/notifications" class="hover:text-red-600">
          <BellIcon class="w-6 h-6" />
        </NuxtLink>
        <NuxtLink to="/profile" class="hover:text-red-600">
          <UserIcon class="w-6 h-6" />
        </NuxtLink>
      </div>
    </header>

    <div class="h-20"></div>

    <!-- Recent Books Section -->
    <section class="container mx-auto px-4 py-12 mt-20">
      <!-- Page Title -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-black">Recent Books</h1>
        <p class="text-md text-black mt-4 max-w-2xl">
          Here are some of the most recent books that you clicked on or liked. Explore and enjoy!
        </p>
      </div>

      <!-- Book Grid or List -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="book in recentBooks" :key="book.id" class="bg-white rounded-lg shadow-md p-4">
          <img :src="book.coverImage" alt="Book cover" class="w-full h-48 object-cover rounded-t-lg" />
          <div class="mt-4">
            <h3 class="text-xl font-semibold text-black">{{ book.title }}</h3>
            <p class="text-gray-600">{{ book.author }}</p>
            <p class="text-sm text-gray-500 mt-2">{{ book.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {
  ShoppingCartIcon,
  BellIcon,
  UserIcon
} from '@heroicons/vue/24/solid'

// Example data for recent books (You can replace this with an actual API or database)
const recentBooks = ref([
  { 
    id: 1, 
    title: 'The Great Adventure', 
    author: 'John Doe', 
    description: 'An exciting journey through the unexplored lands of the world.',
    coverImage: 'https://via.placeholder.com/200x300.png?text=Book+1' 
  },
  { 
    id: 2, 
    title: 'Mystery of the Unknown', 
    author: 'Jane Smith', 
    description: 'A thrilling mystery that keeps you on the edge of your seat.',
    coverImage: 'https://via.placeholder.com/200x300.png?text=Book+2' 
  },
  { 
    id: 3, 
    title: 'Learning Vue.js', 
    author: 'Mark Lee', 
    description: 'A comprehensive guide to mastering Vue.js for modern web development.',
    coverImage: 'https://via.placeholder.com/200x300.png?text=Book+3' 
  },
  { 
    id: 4, 
    title: 'The Silent Forest', 
    author: 'Emily White', 
    description: 'A quiet retreat into the mysteries of nature and the secrets it holds.',
    coverImage: 'https://via.placeholder.com/200x300.png?text=Book+4' 
  },
])

onMounted(() => {
  // Here you can fetch real data or use the localStorage if needed
  // For example: recentBooks.value = JSON.parse(localStorage.getItem('recentBooks'))
})
</script>

<style scoped>
/* Add styles for the book grid */
.grid {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
</style>
