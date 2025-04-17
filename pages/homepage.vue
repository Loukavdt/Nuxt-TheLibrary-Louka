<template>
  <div class="bg-gray-100 text-gray-900">
    <!-- Cookie Consent Modal -->
    <div 
      v-if="showCookieModal" 
      class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-40 px-4"
    >
      <div class="bg-white p-6 sm:p-12 rounded-lg shadow-lg w-full max-w-xl">
        <h2 class="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-center">Our website uses cookies</h2>
        <p class="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 text-center">
          Our website uses cookies. By continuing, we assume your permission to deploy cookies as detailed in our Privacy Policy.
        </p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            class="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-500 text-base w-full sm:w-auto" 
            @click="acceptCookies"
          >
            Accept cookies
          </button>
          <button 
            class="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-400 text-base w-full sm:w-auto" 
            @click="declineCookies"
          >
            Decline cookies
          </button>
        </div>
      </div>
    </div>

    <!-- Top Navigation Bar -->
    <header class="bg-white shadow px-4 py-3 flex items-center justify-end fixed top-0 left-0 right-0 z-50">
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

    <!-- Spacer below fixed header -->
    <div class="h-28 sm:h-20"></div>

    <!-- Search Bar Section -->
    <div class="max-w-7xl mx-auto px-4 mb-8">
      <input 
        type="text" 
        placeholder="Search books..." 
        class="w-full sm:w-1/2 px-4 py-2 rounded-full bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
      />
    </div>

    <!-- New Arrivals Section -->
    <section class="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div>
        <!-- 👇 Login link removed here -->
        <h1 class="text-2xl sm:text-3xl font-bold mt-2">DISCOVER THE NEW ARRIVALS</h1>
        <p class="mt-4 text-gray-700 text-sm sm:text-base">
          Exciting news for students! Our library has recently added a wide variety of new books covering urban planning, 
          interior design, sustainable architecture, fine arts, and so much more. Whether you prefer to visit us in person 
          or browse online, there's something for everyone. Be sure to reserve your favorite titles and stay inspired.
        </p>
        <button class="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-500 text-sm sm:text-base">
          See More
        </button>
      </div>

      <div class="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <img v-for="n in 4" :key="n" src="@/assets/images/5.jpg" class="rounded-lg shadow-lg w-full object-cover" />
      </div>
    </section>

    <!-- Recommended Books -->
    <section class="max-w-7xl mx-auto px-4 py-12">
      <h2 class="text-xl sm:text-2xl font-semibold">RECOMMENDED BOOKS</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-4">
        <div v-for="book in recommendedBooks" :key="book.id" class="text-center">
          <img src="@/assets/images/5.jpg" class="rounded-lg shadow-lg w-full h-40 object-cover" />
          <p class="mt-2 font-semibold text-sm sm:text-base">{{ book.title }}</p>
          <p class="text-gray-600 text-xs sm:text-sm">{{ book.author }}</p>
        </div>
      </div>
    </section>

    <!-- Popular Books -->
    <section class="max-w-7xl mx-auto px-4 py-12">
      <h2 class="text-xl sm:text-2xl font-semibold">POPULAR BOOKS</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-4">
        <div v-for="book in popularBooks" :key="book.id" class="text-center">
          <img src="@/assets/images/5.jpg" class="rounded-lg shadow-lg w-full h-40 object-cover" />
          <p class="mt-2 font-semibold text-sm sm:text-base">{{ book.title }}</p>
          <p class="text-gray-600 text-xs sm:text-sm">{{ book.author }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ShoppingCartIcon, BellIcon, UserIcon } from '@heroicons/vue/24/solid';

const showCookieModal = ref(true);

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

const acceptCookies = () => {
  showCookieModal.value = false;
};
const declineCookies = () => {
  showCookieModal.value = false;
};
</script>
