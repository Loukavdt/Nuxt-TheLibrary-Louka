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
      <h1 class="text-3xl font-bold text-black">Your Collections</h1>
      <p class="text-gray-700 mt-2 max-w-3xl">
        This page displays the collections you've curated. Browse through them and explore the items within each collection.
      </p>
    </section>

    <!-- Create New Collection Section -->
    <section class="container mx-auto px-4 mb-8">
      <div class="mb-4">
        <h2 class="text-lg font-semibold text-black">Create New Collection</h2>
      </div>
      <div class="w-32 h-32 mx-auto bg-white flex items-center justify-center rounded-lg shadow-md cursor-pointer hover:bg-gray-200">
        <span class="text-4xl font-bold text-gray-600">+</span>
      </div>
    </section>

    <!-- Your Collections Section -->
    <section class="container mx-auto px-4 mb-16">
      <div class="mb-4">
        <h2 class="text-lg font-semibold text-black">Your Collections</h2>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
        <div class="w-48 h-48 bg-white flex items-center justify-center rounded-lg shadow-md cursor-pointer hover:bg-gray-200">
          <span class="text-xl text-gray-600">Collection 1</span>
        </div>
        <div class="w-48 h-48 bg-white flex items-center justify-center rounded-lg shadow-md cursor-pointer hover:bg-gray-200">
          <span class="text-xl text-gray-600">Collection 2</span>
        </div>
        <div class="w-48 h-48 bg-white flex items-center justify-center rounded-lg shadow-md cursor-pointer hover:bg-gray-200">
          <span class="text-xl text-gray-600">Collection 3</span>
        </div>
        <div class="w-48 h-48 bg-white flex items-center justify-center rounded-lg shadow-md cursor-pointer hover:bg-gray-200">
          <span class="text-xl text-gray-600">Collection 4</span>
        </div>
        <div class="w-48 h-48 bg-white flex items-center justify-center rounded-lg shadow-md cursor-pointer hover:bg-gray-200">
          <span class="text-xl text-gray-600">Collection 5</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  ShoppingCartIcon,
  BellIcon,
  UserIcon
} from '@heroicons/vue/24/solid'
</script>

<style scoped>
.grid {
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 30px;
}
</style>
