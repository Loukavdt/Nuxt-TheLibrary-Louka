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

    <!-- Padding to push down content below the fixed header -->
    <div class="h-20"></div>

    <!-- Profile Section with updated content -->
    <section class="container mx-auto px-4 py-12 mt-24">
      <!-- Profile Picture + Info -->
      <div class="flex flex-col items-center mb-8">
        <div class="w-20 h-20 bg-red-800 rounded-full flex items-center justify-center text-white text-2xl font-bold">
          O
        </div>
        <h2 class="text-xl font-bold mt-4">Name</h2>
        <p class="text-sm text-gray-600 text-center">Lorem ipsum dolor sit amet consectetur.</p>
      </div>

      <!-- Profile Fields -->
      <div class="max-w-md mx-auto border border-red-800 rounded-2xl divide-y divide-gray-200 bg-transparent">
        <div
          v-for="(field, i) in profileFields"
          :key="i"
          class="flex items-center justify-between p-4 cursor-pointer transition-colors duration-150"
        >
          <div>
            <p class="text-xs font-bold uppercase">{{ field.label }}</p>
            <p class="text-sm text-gray-600">{{ field.value }}</p>
          </div>
          <ChevronRightIcon class="w-4 h-4 text-red-800" />
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

import {
  ChevronRightIcon
} from '@heroicons/vue/24/outline'

const profileFields = ref([
  { label: 'Name', value: 'Lorem ipsum dolor sit amet' },
  { label: 'Bio', value: 'Lorem ipsum dolor sit amet' },
  { label: 'E-mail', value: 'Lorem ipsum dolor sit amet' },
  { label: 'Location', value: 'Lorem ipsum dolor sit amet' },
  { label: 'Passwords', value: 'Lorem ipsum dolor sit amet' },
  { label: 'Language', value: 'Lorem ipsum dolor sit amet' },
])
</script>

<style scoped>
input {
  padding-left: 2rem;
}

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
  padding-top: 80px;
}

.mt-24 {
  margin-top: 96px;
}
</style>
