<template>
  <div class="bg-gray-100 text-gray-900">
    <!-- Cookie Consent Modal -->
    <div 
      v-if="showCookieModal" 
      class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
    >
      <div class="bg-white p-12 rounded-lg shadow-lg w-11/12 max-w-xl">
        <h2 class="text-3xl font-semibold mb-6 text-center">Our website uses cookies</h2>
        <p class="text-1xl text-gray-700 mb-8 text-center">
          Our website uses cookies. By continuing, we assume your permission to deploy cookies as detailed in our Privacy Policy.
        </p>
        <!-- Buttons Section -->
        <div class="flex flex-col justify-center items-center space-y-4">
          <button 
            class="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-500 text-lg w-full md:w-auto" 
            @click="acceptCookies"
          >
            Accept cookies
          </button>
          <button 
            class="bg-gray-500 text-white px-8 py-3 rounded-lg hover:bg-gray-400 text-lg w-full md:w-auto" 
            @click="declineCookies"
          >
            Decline cookies
          </button>
        </div>
      </div>
    </div>

    <!-- Top Navigation Bar -->
    <header class="bg-white shadow px-4 py-3 flex items-center justify-end">
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
import { ref, onMounted } from 'vue';
import { ShoppingCartIcon, BellIcon, UserIcon } from '@heroicons/vue/24/solid';

// State to show the cookie modal
const showCookieModal = ref(true); // Set to true to show on every visit

// Books data (can be dynamic or static as needed)
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

// Accept cookies action (hides the modal)
const acceptCookies = () => {
  showCookieModal.value = false;
};

// Decline cookies action (hides the modal)
const declineCookies = () => {
  showCookieModal.value = false;
};
</script>

<style scoped>
.bg-opacity-50 {
  background-color: rgba(0, 0, 0, 0.5);
}

.w-11-12 {
  width: 92%;
}

.text-center {
  text-align: center;
}

/* For mobile responsiveness */
@media (max-width: 640px) {
  .w-full {
    width: 100%;
  }
}
</style>
