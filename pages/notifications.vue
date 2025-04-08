<template>
  <div class="bg-gray-100 text-gray-900">
    <!-- Top Navigation Bar (Fixed) -->
    <header class="bg-white shadow px-4 py-3 flex items-center justify-end top-0 left-0 right-0 z-50 fixed">
      <!-- Search Bar -->
      <div class="relative mr-6 border-gray-300 rounded-lg w-72">
        <input 
          type="text" 
          placeholder="Search books"
          class="w-full pl-8 pr-3 py-2 outline-none text-gray-800"
        />
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

    <!-- Content for the Notifications Page -->
    <section class="container mx-auto px-4 py-12 mt-24">
      <h1 class="text-3xl font-semibold">Your Notifications</h1>
      <!-- Notifications content here -->
      <div class="mt-8">
        <div class="bg-white shadow rounded-lg p-6 mb-4">
          <h3 class="text-xl font-semibold">New Book Arrivals!</h3>
          <p class="text-gray-700 mt-2">Check out the new collection of books available in the library. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        </div>
        <div class="bg-white shadow rounded-lg p-6 mb-4">
          <h3 class="text-xl font-semibold">Upcoming Event</h3>
          <p class="text-gray-700 mt-2">Don't miss our upcoming event on urban design next week. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Nunc sed lectus. Nulla facilisi.</p>
        </div>
        <div class="bg-white shadow rounded-lg p-6 mb-4">
          <h3 class="text-xl font-semibold">Library Update</h3>
          <p class="text-gray-700 mt-2">The library will be closed for maintenance on Monday. Duis ultricies pharetra magna. Integer sit amet est. Mauris malesuada orci turpis, vel interdum nisl sollicitudin at. Nulla facilisi. Vivamus feugiat elit at urna cursus tempus.</p>
        </div>
        <div class="bg-white shadow rounded-lg p-6 mb-4">
          <h3 class="text-xl font-semibold">Book Reservation Reminder</h3>
          <p class="text-gray-700 mt-2">Your book reservation for "Sustainable Architecture" is ready for pickup. Aenean imperdiet. Fusce malesuada tristique nulla. Suspendisse potenti. Phasellus at erat. Sed cursus ante dapibus diam. Sed nisi.</p>
        </div>
        <div class="bg-white shadow rounded-lg p-6 mb-4">
          <h3 class="text-xl font-semibold">New Library Hours</h3>
          <p class="text-gray-700 mt-2">The library's new hours are now in effect. Our new schedule: Monday - Friday, 9 AM - 6 PM. Vestibulum ut elit a purus vehicula dictum. Nulla at malesuada nisi. Integer nec odio. Praesent libero.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ShoppingCartIcon, BellIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
</script>

<style scoped>
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

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  width: 100%;
  background-color: white;
}

body {
  padding-top: 80px; /* Adjust according to the header height */
}

/* Notification styles */
section {
  padding: 20px;
}

/* Add margin-top for the section to avoid overlap with the header */
.mt-24 {
  margin-top: 96px; /* Adjusted value to push content further down */
}
</style>
