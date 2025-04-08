<template>
  <div class="bg-gray-100 text-gray-900">
    
    <!-- Top Navigation Bar -->
    <header class="bg-white shadow px-4 py-3 flex items-center justify-end">
      <!-- Search Bar -->
      <div class="flex items-center space-x-2 mr-6">
        <input 
          type="text" 
          placeholder="Search books..." 
          class="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      <!-- Icon Buttons -->
      <div class="flex items-center space-x-6 text-gray-700">
        <!-- Cart Icon Button (Link to Cart Page) -->
        <NuxtLink to="/cart" class="hover:text-red-600">
          <ShoppingCartIcon class="w-6 h-6" />
        </NuxtLink>

        <!-- Notifications Icon Button (Link to Notifications Page) -->
        <NuxtLink to="/notifications" class="hover:text-red-600">
          <BellIcon class="w-6 h-6" />
        </NuxtLink>

        <!-- Profile Icon Button (Link to Profile Page) -->
        <NuxtLink to="/profile" class="hover:text-red-600">
          <UserIcon class="w-6 h-6" />
        </NuxtLink>
      </div>
    </header>

    <!-- New Arrivals Section -->
    <section class="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <NuxtLink to="/Login">Login</NuxtLink>
        <h1 class="text-3xl font-bold">DISCOVER THE NEW ARRIVALS</h1>
        <p class="mt-4 text-gray-700">
          Exciting news for students! Our library has recently added a wide variety of new books covering urban planning, 
          interior design, sustainable architecture, fine arts, and so much more. Whether you prefer to visit us in person 
          or browse online, there's something for everyone. Be sure to reserve your favorite titles and stay inspired.
        </p>
        <button class="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg">See More</button>
      </div>

      <div class="grid grid-cols-2 gap-8">
        <img src="@/assets/images/5.jpg" class="rounded-lg shadow-lg" />
        <img src="@/assets/images/5.jpg" class="rounded-lg shadow-lg" />
        <img src="@/assets/images/5.jpg" class="rounded-lg shadow-lg" />
        <img src="@/assets/images/5.jpg" class="rounded-lg shadow-lg" />
      </div>
    </section>

    <!-- Recommended Books -->
    <section class="container mx-auto px-4 py-12">
      <h2 class="text-2xl font-semibold">RECOMMENDED BOOKS</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
        <div v-for="book in recommendedBooks" :key="book.id" class="text-center">
          <img src="@/assets/images/5.jpg" class="rounded-lg shadow-lg" />
          <p class="mt-2 font-semibold">{{ book.title }}</p>
          <p class="text-gray-600 text-sm">{{ book.author }}</p>
        </div>
      </div>
    </section>

    <!-- Popular Books -->
    <section class="container mx-auto px-4 py-12">
      <h2 class="text-2xl font-semibold">POPULAR BOOKS</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
        <div v-for="book in popularBooks" :key="book.id" class="text-center">
          <img src="@/assets/images/5.jpg" class="rounded-lg shadow-lg" />
          <p class="mt-2 font-semibold">{{ book.title }}</p>
          <p class="text-gray-600 text-sm">{{ book.author }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Import solid Heroicons
import { ShoppingCartIcon, BellIcon, UserIcon } from '@heroicons/vue/24/solid'

const recommendedBooks = ref([
  { id: 1, title: 'The Art of Design', author: 'John Doe' },
  { id: 2, title: 'Sustainable Living', author: 'Jane Smith' },
  { id: 3, title: 'Urban Innovations', author: 'Alex Johnson' },
  { id: 4, title: 'Creative Spaces', author: 'Emily Davis' }
]);

const popularBooks = ref([
  { id: 5, title: 'Modern Architecture', author: 'Michael Brown' },
  { id: 6, title: 'Graphic Design Mastery', author: 'Sarah Wilson' },
  { id: 7, title: 'The Future of Cities', author: 'David Martinez' },
  { id: 8, title: 'Fine Arts Today', author: 'Sophia Taylor' }
]);
</script>

<style scoped>
button:hover {
  background-color: #b91c1c;
}
</style>
