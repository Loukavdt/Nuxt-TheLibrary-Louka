<template>
  <div class="bg-gray-100 text-gray-900">
    <!-- Top Navigation Bar -->
    <header class="bg-white shadow px-4 py-3 flex items-center justify-end">
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

    <!-- Cart Content -->
    <section class="container mx-auto px-4 py-12 mt-24">
      <h1 class="text-3xl font-semibold">Your Shopping Cart</h1>

      <!-- Books Grid: 3 books per row -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <!-- Book Item 1 -->
        <div
          class="bg-white shadow rounded-lg p-6 cursor-pointer hover:scale-105 transition-transform"
          @click="toggleSelection(1)"
          :class="{'border-4 border-red-600': selectedBooks.includes(1)}"
        >
        <img src="@/assets/images/5.jpg" class="rounded-lg shadow-lg" />
          <div class="mt-4">
            <h3 class="text-xl font-semibold">Title</h3>
            <p class="text-gray-700 mt-1">Author</p>
          </div>
        </div>

        <!-- Book Item 2 -->
        <div
          class="bg-white shadow rounded-lg p-6 cursor-pointer hover:scale-105 transition-transform"
          @click="toggleSelection(2)"
          :class="{'border-4 border-red-600': selectedBooks.includes(2)}"
        >
        <img src="@/assets/images/5.jpg" class="rounded-lg shadow-lg" />
          <div class="mt-4">
            <h3 class="text-xl font-semibold">Title</h3>
            <p class="text-gray-700 mt-1">Author</p>
          </div>
        </div>

        <!-- Book Item 3 -->
        <div
          class="bg-white shadow rounded-lg p-6 cursor-pointer hover:scale-105 transition-transform"
          @click="toggleSelection(3)"
          :class="{'border-4 border-red-600': selectedBooks.includes(3)}"
        >
        <img src="@/assets/images/5.jpg" class="rounded-lg shadow-lg" />
          <div class="mt-4">
            <h3 class="text-xl font-semibold">Title</h3>
            <p class="text-gray-700 mt-1">Author</p>
          </div>
        </div>

        <!-- Book Item 4 -->
        <div
          class="bg-white shadow rounded-lg p-6 cursor-pointer hover:scale-105 transition-transform"
          @click="toggleSelection(4)"
          :class="{'border-4 border-red-600': selectedBooks.includes(4)}"
        >
        <img src="@/assets/images/5.jpg" class="rounded-lg shadow-lg" />
          <div class="mt-4">
            <h3 class="text-xl font-semibold">Title</h3>
            <p class="text-gray-700 mt-1">Author</p>
          </div>
        </div>

        <!-- Book Item 5 -->
        <div
          class="bg-white shadow rounded-lg p-6 cursor-pointer hover:scale-105 transition-transform"
          @click="toggleSelection(5)"
          :class="{'border-4 border-red-600': selectedBooks.includes(5)}"
        >
        <img src="@/assets/images/5.jpg" class="rounded-lg shadow-lg" />
          <div class="mt-4">
            <h3 class="text-xl font-semibold">Title</h3>
            <p class="text-gray-700 mt-1">Author</p>
          </div>
        </div>

        <!-- Book Item 6 -->
        <div
          class="bg-white shadow rounded-lg p-6 cursor-pointer hover:scale-105 transition-transform"
          @click="toggleSelection(6)"
          :class="{'border-4 border-red-600': selectedBooks.includes(6)}"
        >
        <img src="@/assets/images/5.jpg" class="rounded-lg shadow-lg" />
          <div class="mt-4">
            <h3 class="text-xl font-semibold">Title</h3>
            <p class="text-gray-700 mt-1">Author</p>
          </div>
        </div>
      </div>

      <!-- Selected Books Summary and Borrow Button in a Smaller Rectangle (Aligned Right) -->
      <div class="bg-white shadow rounded-lg p-4 mt-8 flex justify-between items-center max-w-4xl mx-auto sm:mx-0 sm:ml-auto">
        <!-- Left side: Books Selected -->
        <div class="flex items-center space-x-1"> <!-- Reduced space-x from 2 to 1 -->
          <p class="text-lg font-semibold">Books Selected:</p>
          <p class="text-xl font-semibold text-red-600">{{ selectedBooks.length }}</p>
        </div>

        <!-- Right side: Borrow Button -->
        <button
          class="bg-red-600 text-white px-8 py-2 rounded-lg hover:bg-red-700 text-lg"
          @click="borrowBooks"
        >
          Borrow
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ShoppingCartIcon, BellIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid'

// To track the selected books
const selectedBooks = ref([])

// Function to toggle book selection on click
const toggleSelection = (bookId) => {
  if (selectedBooks.value.includes(bookId)) {
    selectedBooks.value = selectedBooks.value.filter(id => id !== bookId)
  } else {
    selectedBooks.value.push(bookId)
  }
}

// Function for borrowing books
const borrowBooks = () => {
  alert(`You have borrowed ${selectedBooks.value.length} book(s).`)
}
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

/* Margin to prevent content overlap with fixed header */
body {
  padding-top: 80px;
}

/* Cart item styles */
section {
  padding: 20px;
}

/* Adjust the position for the rectangle with selected books and borrow button */
.sm\:ml-auto {
  margin-left: auto;
}

/* Reduce space between selected books label and borrow button */
.space-x-1 {
  gap: 0.25rem; /* Further reduced gap between text and number */
}

/* Decrease max width of the rectangle to make it more compact */
.max-w-4xl {
  max-width: 35rem; /* Reduced size */
}

/* Borrow button size adjustments */
button {
  padding: 0.5rem 2rem; /* Smaller button */
}
</style>
