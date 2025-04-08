<template>
  <div class="bg-gray-100 text-gray-900">
    
    <!-- Top Navigation Bar (Fixed) -->
    <header class="bg-white shadow px-4 py-3 flex items-center justify-end top-0 left-0 right-0 z-50 fixed">
      <!-- Search Bar with Icon inside the Input -->
      <div class="relative mr-6 border-gray-300 rounded-lg w-72">
        <!-- Input Field with Icon Inside -->
        <input 
          type="text" 
          placeholder="Search books"
          class="w-full pl-8 pr-3 py-2 outline-none text-gray-800" 
        />
        <!-- Search Icon inside the Input -->
        <MagnifyingGlassIcon class="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
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

    <!-- Padding to push down content below the fixed header -->
    <div class="h-20"></div>

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
import { ShoppingCartIcon, BellIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid'

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

/* Style the input to leave space for the icon inside */
input {
  padding-left: 2rem; /* Space for the icon */
}

/* Position the search icon inside the input */
input + svg {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
}

/* Make sure the header stays fixed at the top */
header {
  position: fixed; /* Fixes the navigation at the top */
  top: 0;
  left: 0;
  right: 0;
  z-index: 50; /* Ensures it's above other content */
  width: 100%; /* Ensures it stretches across the full width */
  background-color: white;
}

/* Add padding to push the content down to prevent overlap with the fixed header */
body {
  padding-top: 80px; /* Adjust according to the header height */
}
</style>
