<template>
  <div class="bg-gray-100 text-gray-900">
    <!-- Top Navigation Bar -->
    <header class="bg-white shadow px-4 py-3 flex items-center justify-end fixed top-0 left-0 right-0 z-50">
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

    <div class="h-20"></div>

    <!-- Profile Section -->
    <section class="container mx-auto px-4 py-12 mt-20">
      <!-- Page Title -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-black">Edit Profile</h1>
        <p class="text-sm text-black mt-1">
          Update your personal information and preferences below.
        </p>
      </div>

      <!-- Profile Picture + Info -->
      <div class="flex flex-col items-center mb-8">
        <div
          class="w-20 h-20 bg-red-800 rounded-full flex items-center justify-center text-white text-2xl font-bold overflow-hidden cursor-pointer"
          @click="triggerFileInput"
        >
          <img
            v-if="avatar"
            :src="avatar"
            alt="Profile Picture"
            class="w-full h-full object-cover"
          />
          <span v-else>{{ getInitials(profileFields[0].value) }}</span>
        </div>

        <input
          ref="fileInput"
          type="file"
          accept="image/*"
          @change="onImageChange"
          class="hidden"
        />

        <!-- Editable Name -->
        <div class="flex flex-col items-center">
          <h2 class="text-xl font-bold mt-4">
            <span @click="editName = !editName" v-if="!editName">{{ profileFields[0].value }}</span>
            <input 
              v-if="editName" 
              v-model="profileFields[0].value" 
              @blur="checkUsernameAvailability"
              class="text-xl font-bold text-black border-b-2 border-gray-400 p-1 focus:outline-none focus:border-blue-500"
            />
          </h2>

          <!-- Username Availability Feedback -->
          <p v-if="usernameTaken" class="text-sm text-red-500 mt-1">This username is already taken. Please choose another one.</p>
        </div>

        <!-- Editable Bio -->
        <div class="text-sm text-gray-600 text-center mt-1">
          <span v-if="!isEditingBio" @click="isEditingBio = true" class="cursor-pointer hover:underline">
            {{ bio }}
          </span>
          <input
            v-else
            v-model="bio"
            @blur="isEditingBio = false"
            @keydown.enter="isEditingBio = false"
            class="text-sm text-center border-b border-gray-300 focus:outline-none bg-transparent"
            maxlength="100"
          />
          <p class="text-xs text-gray-400 mt-1">{{ bio.length }}/100</p>
        </div>
      </div>

      <!-- Profile Fields (excluding Bio) -->
      <div class="max-w-md mx-auto border border-red-800 rounded-2xl divide-y divide-gray-200 bg-transparent">
        <!-- Name Field -->
        <div class="flex flex-col gap-1 p-4 relative">
          <label class="text-xs font-bold uppercase">Name</label>
          <input
            v-model="profileFields.find(field => field.label === 'Name').value"
            class="w-full bg-white border border-gray-300 text-sm text-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        <!-- E-mail Field -->
        <div class="flex flex-col gap-1 p-4 relative">
          <label class="text-xs font-bold uppercase">E-mail</label>
          <input
            v-model="profileFields.find(field => field.label === 'E-mail').value"
            type="email"
            class="w-full bg-white border border-gray-300 text-sm text-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        <!-- Location Field -->
        <div class="flex flex-col gap-1 p-4 relative">
          <label class="text-xs font-bold uppercase">Location</label>
          <input
            v-model="profileFields.find(field => field.label === 'Location').value"
            class="w-full bg-white border border-gray-300 text-sm text-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        <!-- Current Password Field -->
        <div class="flex flex-col gap-1 p-4 relative">
          <label class="text-xs font-bold uppercase">Current Password</label>
          <input
            type="password"
            v-model="currentPassword"
            class="w-full bg-white border border-gray-300 text-sm text-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Enter current password"
          />
        </div>

        <!-- New Password Field -->
        <div class="flex flex-col gap-1 p-4 relative">
          <label class="text-xs font-bold uppercase">New Password</label>
          <input
            type="password"
            v-model="newPassword"
            class="w-full bg-white border border-gray-300 text-sm text-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Enter new password"
          />
        </div>

        <!-- Repeat New Password Field -->
        <div class="flex flex-col gap-1 p-4 relative">
          <label class="text-xs font-bold uppercase">Repeat New Password</label>
          <input
            type="password"
            v-model="repeatPassword"
            class="w-full bg-white border border-gray-300 text-sm text-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Repeat new password"
          />
          <!-- Error Message for Mismatch -->
          <p v-if="passwordMismatch" class="text-xs text-red-500 mt-1">Passwords do not match!</p>
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
import { ref, computed, onMounted } from 'vue'
import {
  ShoppingCartIcon,
  BellIcon,
  UserIcon
} from '@heroicons/vue/24/solid'

// State variables
const showPassword = ref(false)
const avatar = ref(null)
const bio = ref('Book lover, writer, explorer.')
const isEditingBio = ref(false)
const editName = ref(false)
const usernameTaken = ref(false)
const currentPassword = ref('')
const newPassword = ref('')
const repeatPassword = ref('')
const passwordMismatch = ref(false)

// Dummy data to simulate already taken usernames (you can replace this with an API call)
const takenUsernames = ['john_doe', 'jane_smith', 'mark_lee']

const fileInput = ref(null)
const triggerFileInput = () => {
  fileInput.value.click()
}

const onImageChange = (e) => {
  const file = e.target.files[0]
  if (file) {
    avatar.value = URL.createObjectURL(file)
  }
}

const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
}

const defaultFields = [
  { label: 'Name', value: 'John Doe' },
  { label: 'E-mail', value: 'johndoe@example.com' },
  { label: 'Location', value: 'New York, USA' },
  { label: 'Language', value: 'English' },
]

const profileFields = ref([...defaultFields])
const showToast = ref(false)

const saveProfile = () => {
  if (newPassword.value !== repeatPassword.value) {
    passwordMismatch.value = true
    return
  }
  passwordMismatch.value = false

  localStorage.setItem('userProfile', JSON.stringify(profileFields.value))
  localStorage.setItem('userBio', bio.value)
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 2500)
}

const filteredFields = computed(() => {
  return profileFields.value.filter(field => field.label !== 'Bio')
})

// Check if the username is already taken
const checkUsernameAvailability = () => {
  const username = profileFields.value[0].value.toLowerCase().replace(' ', '_')
  usernameTaken.value = takenUsernames.includes(username)
}

onMounted(() => {
  const savedData = localStorage.getItem('userProfile')
  const savedBio = localStorage.getItem('userBio')
  if (savedData) {
    try {
      profileFields.value = JSON.parse(savedData)
    } catch (e) {
      console.error('Error parsing saved profile data:', e)
    }
  }
  if (savedBio) {
    bio.value = savedBio
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
