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

    <!-- Profile Section -->
    <section class="container mx-auto px-4 py-12 mt-24">
      <!-- Page Title -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-black">Edit Profile</h1>
        <p class="text-sm text-black mt-1">
          Update your personal information and preferences below.
        </p>
      </div>

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
          class="flex flex-col gap-1 p-4 relative"
        >
          <label class="text-xs font-bold uppercase">{{ field.label }}</label>
          
          <div class="relative">
            <input
              :type="field.label === 'Passwords' && !showPassword ? 'password' : 'text'"
              v-model="field.value"
              class="w-full bg-white border border-gray-300 text-sm text-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />

            <!-- Show/Hide Toggle inside the input -->
            <button
              v-if="field.label === 'Passwords'"
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-red-700 hover:underline"
            >
              {{ showPassword ? 'Hide' : 'Show' }}
            </button>
          </div>
        </div>

        <!-- Save Button -->
        <div class="p-4">
          <button
            @click="saveProfile"
            class="w-full bg-red-800 text-white py-2 rounded-xl hover:bg-red-700 transition duration-200 font-semibold"
          >
            Save Changes
          </button>
        </div>
      </div>
    </section>

    <!-- Toast Message -->
    <div
      v-if="showToast"
      class="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300"
    >
      Profile saved successfully!
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {
  ShoppingCartIcon,
  BellIcon,
  UserIcon
} from '@heroicons/vue/24/solid'

const showPassword = ref(false)

const defaultFields = [
  { label: 'Name', value: 'John Doe' },
  { label: 'Bio', value: 'Book lover, writer, explorer.' },
  { label: 'E-mail', value: 'johndoe@example.com' },
  { label: 'Location', value: 'New York, USA' },
  { label: 'Passwords', value: 'password123' },
  { label: 'Language', value: 'English' },
]

const profileFields = ref([...defaultFields])
const showToast = ref(false)

const saveProfile = () => {
  localStorage.setItem('userProfile', JSON.stringify(profileFields.value))
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 2500)
}

onMounted(() => {
  const savedData = localStorage.getItem('userProfile')
  if (savedData) {
    try {
      profileFields.value = JSON.parse(savedData)
    } catch (e) {
      console.error('Error parsing saved profile data:', e)
    }
  }
})
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
