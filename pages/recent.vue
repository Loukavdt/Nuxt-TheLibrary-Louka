<template>
  <div class="bg-gray-100 text-gray-900">
    <!-- Top Navigation Bar -->
    <header class="bg-white shadow px-4 py-3 flex items-center justify-end fixed top-0 left-0 right-0 z-50">
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

    <!-- Intro Section -->
    <section class="container mx-auto px-4 pt-28 pb-4">
      <h1 class="text-3xl font-bold text-black">Your Recent Activity</h1>
      <p class="text-gray-700 mt-2 max-w-3xl">
        This page displays the most recent books you’ve interacted with. Whether you viewed them out of curiosity or serious interest, they're saved here to help you pick up where you left off.
      </p>
    </section>

    <!-- Search Input -->
    <section class="container mx-auto px-4 mb-8">
      <input 
        type="text" 
        v-model="searchQuery"
        placeholder="Search your recent books..."
        class="w-full sm:w-1/2 px-4 py-2 rounded-full bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
      />
    </section>

    <!-- Tips Section -->
    <section class="container mx-auto px-4 mb-10">
      <div class="bg-white p-4 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-2 text-red-600">💡 Tips</h2>
        <ul class="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Books shown are sorted by your latest interactions.</li>
          <li>Use the search bar above to filter through your list quickly.</li>
          <li>You can revisit book details or reserve them directly.</li>
          <li>Don’t worry — this data is only visible to you.</li>
        </ul>
      </div>
    </section>

    <!-- Summary Info -->
    <section class="container mx-auto px-4 mb-10">
      <div class="bg-white p-4 rounded-lg shadow-md text-sm text-gray-700">
        You have <strong>{{ filteredBooks.length }}</strong> books in your recent activity.
      </div>
    </section>

    <!-- Recent Books Section (unchanged) -->
    <section class="container mx-auto px-4 py-12 mt-20">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-black">Recent Books</h1>
        <p class="text-md text-black mt-4 max-w-2xl">
          Here are some of the most recent books that you clicked on or liked. Explore and enjoy!
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="book in filteredBooks" :key="book.id" class="bg-white rounded-lg shadow-md p-4">
          <img :src="book.coverImage" alt="Book cover" class="w-full h-48 object-cover rounded-t-lg" />
          <div class="mt-4">
            <h3 class="text-xl font-semibold text-black">{{ book.title }}</h3>
            <p class="text-gray-600">{{ book.author }}</p>
            <p class="text-sm text-gray-500 mt-2">{{ book.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Recommendations -->
    <section class="container mx-auto px-4 pb-16">
      <h2 class="text-xl font-semibold text-black mb-4">Recommended Based on Your History</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div v-for="rec in recommended" :key="rec.id" class="bg-white rounded-lg p-4 shadow hover:shadow-md transition">
          <img :src="rec.cover" class="w-full h-40 object-cover rounded mb-2" />
          <p class="text-sm font-medium text-black">{{ rec.title }}</p>
          <p class="text-xs text-gray-600">{{ rec.author }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  ShoppingCartIcon,
  BellIcon,
  UserIcon
} from '@heroicons/vue/24/solid'

const searchQuery = ref('')

const recentBooks = ref([
  { id: 1, title: 'The Great Adventure', author: 'John Doe', description: 'An exciting journey...', coverImage: 'https://via.placeholder.com/200x300.png?text=Book+1' },
  { id: 2, title: 'Mystery of the Unknown', author: 'Jane Smith', description: 'A thrilling mystery...', coverImage: 'https://via.placeholder.com/200x300.png?text=Book+2' },
  { id: 3, title: 'Learning Vue.js', author: 'Mark Lee', description: 'Master Vue.js...', coverImage: 'https://via.placeholder.com/200x300.png?text=Book+3' },
  { id: 4, title: 'The Silent Forest', author: 'Emily White', description: 'Mysteries of nature...', coverImage: 'https://via.placeholder.com/200x300.png?text=Book+4' },
])

const recommended = ref([
  { id: 101, title: 'Advanced Vue Techniques', author: 'Sarah Black', cover: 'https://via.placeholder.com/200x300.png?text=Rec+1' },
  { id: 102, title: 'Nature Walks', author: 'Tom Green', cover: 'https://via.placeholder.com/200x300.png?text=Rec+2' },
  { id: 103, title: 'Mystery Deep Dive', author: 'Lisa Gray', cover: 'https://via.placeholder.com/200x300.png?text=Rec+3' },
  { id: 104, title: 'World Adventures', author: 'Anna Bold', cover: 'https://via.placeholder.com/200x300.png?text=Rec+4' },
])

const filteredBooks = computed(() => {
  return recentBooks.value.filter(book =>
    book.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>

<style scoped>
.grid {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
</style>
