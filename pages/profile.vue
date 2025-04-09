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

    <!-- Content for the Profile Page -->
    <section class="container mx-auto px-4 py-12 mt-24">
      <h1 class="text-3xl font-semibold">Your Profile</h1>
      
      <!-- Profile Content -->
      <div class="mt-8">
        <div class="bg-white shadow rounded-lg p-6 mb-4">
          <h3 class="text-xl font-semibold">Personal Information</h3>
          <p class="text-gray-700 mt-2">Name: John Doe</p>
          <p class="text-gray-700 mt-2">Email: johndoe@example.com</p>
          <p class="text-gray-700 mt-2">Phone: (123) 456-7890</p>
          <p class="text-gray-700 mt-2">Address: 123 Main St, City, Country</p>
        </div>

        <div class="bg-white shadow rounded-lg p-6 mb-4">
          <h3 class="text-xl font-semibold">Account Settings</h3>
          <p class="text-gray-700 mt-2">Password: **********</p>
          <p class="text-gray-700 mt-2">Notification Preferences: Enabled</p>
          <p class="text-gray-700 mt-2">Privacy Settings: Public</p>
        </div>

        <div class="bg-white shadow rounded-lg p-6 mb-4">
          <h3 class="text-xl font-semibold">Recent Activity</h3>
          <p class="text-gray-700 mt-2">You recently added "The Great Gatsby" to your reading list.</p>
          <p class="text-gray-700 mt-2">You liked the book "The Catcher in the Rye" on 4/1/2025.</p>
          <p class="text-gray-700 mt-2">You updated your email address on 3/15/2025.</p>
        </div>

        <div class="bg-white shadow rounded-lg p-6 mb-4">
          <h3 class="text-xl font-semibold">Upcoming Book Reservations</h3>
          <p class="text-gray-700 mt-2">Your reservation for "1984" by George Orwell is available for pickup from 4/10/2025.</p>
          <p class="text-gray-700 mt-2">Your reservation for "Brave New World" is scheduled for 4/15/2025.</p>
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

/* Profile content styles */
section {
  padding: 20px;
}

/* Add margin-top for the section to avoid overlap with the header */
.mt-24 {
  margin-top: 96px; /* Adjusted value to push content further down */
}
</style>
