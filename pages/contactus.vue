<template>
  <div class="bg-gray-100 text-gray-900">
    <!-- Top Navigation Bar -->
    <header class="bg-white shadow px-4 py-3 flex items-center justify-end">
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
    <div class="h-4"></div>

    <!-- New Page Content -->
    <section class="container mx-auto px-4 py-12 mt-24">
      <h1 class="text-3xl font-semibold">Contact Us</h1>

      <!-- Contact Form -->
      <form @submit.prevent="submitForm" class="space-y-4 mt-8">
        <div>
          <label for="name" class="block text-lg font-medium text-gray-800 dark:text-white">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            class="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-900 dark:border-zinc-600 dark:text-white"
            required
          />
        </div>

        <div>
          <label for="email" class="block text-lg font-medium text-gray-800 dark:text-white">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-900 dark:border-zinc-600 dark:text-white"
            required
          />
        </div>

        <div>
          <label for="message" class="block text-lg font-medium text-gray-800 dark:text-white">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            class="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-900 dark:border-zinc-600 dark:text-white"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ShoppingCartIcon, BellIcon, UserIcon } from '@heroicons/vue/24/solid'

// You can handle form submission or other logic here
const submitForm = () => {
  alert('Form submitted!')
}
</script>

<style scoped>
/* Adjustments for the form */
form {
  padding: 20px;
}

textarea {
  resize: vertical;
}

button {
  padding: 0.75rem 2rem;
}

/* Ensure smooth scroll */
html, body {
  scroll-behavior: smooth;
}
</style>
