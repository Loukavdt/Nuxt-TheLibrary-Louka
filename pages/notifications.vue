<template>
  <div class="bg-gray-100 text-gray-900 min-h-screen">
    <!-- Top Navigation Bar -->
    <header class="bg-white shadow px-4 py-3 flex items-center justify-end">
      <div class="flex items-center space-x-2 mr-6">
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="Search books" 
          class="w-72 py-1.5 pl-4 pr-4 bg-gray-700 text-white placeholder-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

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

    <div class="h-4"></div>

    <!-- Page Content -->
    <section class="container mx-auto px-4 py-12 mt-24">
      <!-- Intro -->
      <div class="mb-10 max-w-3xl">
        <h1 class="text-4xl font-bold mb-3">Notifications</h1>
        <p class="text-lg text-gray-700">
          Here you'll find your latest updates — from new arrivals and upcoming events to reminders and highlights from the library. Stay in the loop with everything that matters to you.
        </p>
      </div>

      <!-- Search & Mark All as Read -->
      <div class="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="Filter notifications" 
          class="w-full md:w-1/2 p-2 rounded-md border border-gray-300"
        />
        <button
          @click="showConfirm = true"
          class="text-sm text-red-600 hover:underline focus:outline-none"
        >
          Mark all as read
        </button>
      </div>

      <!-- Recent Notifications -->
      <div class="mb-12 space-y-6">
        <h3 class="text-xl font-semibold text-red-800">Recent</h3>
        <transition-group name="fade" tag="div">
          <div 
            v-for="(note, i) in filteredRecentNotifications" 
            :key="'recent-' + i" 
            class="bg-white rounded-md p-4 shadow-sm flex justify-between items-start"
          >
            <div>
              <p class="font-semibold">💬 {{ note.message }}</p>
              <p class="text-sm text-gray-500">{{ note.time }}</p>
            </div>
            <button @click="removeNotification(i, 'recent')" class="text-gray-400 hover:text-red-500 ml-4">✕</button>
          </div>
        </transition-group>
        <div v-if="filteredRecentNotifications.length === 0" class="text-gray-500 italic">
          No recent notifications.
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-300 my-10"></div>

      <!-- Older Notifications -->
      <div class="space-y-6">
        <h3 class="text-xl font-semibold text-red-800">Older</h3>
        <transition-group name="fade" tag="div">
          <div 
            v-for="(note, i) in filteredOlderNotifications" 
            :key="'older-' + i" 
            class="bg-white rounded-md p-4 shadow-sm flex justify-between items-start"
          >
            <div>
              <p class="font-semibold">💬 {{ note.message }}</p>
              <p class="text-sm text-gray-500">{{ note.time }}</p>
            </div>
            <button @click="removeNotification(i, 'older')" class="text-gray-400 hover:text-red-500 ml-4">✕</button>
          </div>
        </transition-group>
        <div v-if="filteredOlderNotifications.length === 0" class="text-gray-500 italic">
          No older notifications.
        </div>
      </div>

      <!-- Trash Section -->
      <div class="mt-16">
        <h2 class="text-xl font-semibold text-red-800 mb-4">Recently Deleted</h2>
        <div v-if="trash.length > 0" class="space-y-4">
          <div 
            v-for="(note, i) in trash" 
            :key="'trash-' + i" 
            class="bg-yellow-100 rounded-md p-4 shadow-sm flex justify-between items-start"
          >
            <div>
              <p class="font-semibold">💬 {{ note.message }}</p>
              <p class="text-sm text-gray-600">{{ note.time }}</p>
            </div>
            <button @click="restoreNotification(i)" class="text-blue-500 hover:underline ml-4">Restore</button>
          </div>
        </div>
        <div v-else class="text-gray-500 italic">No deleted messages.</div>
      </div>
    </section>

    <!-- Confirm Modal -->
    <div v-if="showConfirm" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h2 class="text-lg font-semibold mb-4">Are you sure?</h2>
        <p class="text-sm text-gray-700 mb-6">
          Are you sure you want to mark all your messages as read? This will move all recent messages to older.
        </p>
        <div class="flex justify-end space-x-3">
          <button @click="showConfirm = false" class="px-4 py-1 rounded-md border">Cancel</button>
          <button @click="confirmMarkAll" class="px-4 py-1 bg-red-500 text-white rounded-md">Yes, mark all</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ShoppingCartIcon, BellIcon, UserIcon } from '@heroicons/vue/24/solid'

const searchQuery = ref('')
const showConfirm = ref(false)

const recentNotifications = ref([
  { message: '“The Psychology of Space” is now available. Reserve your copy today!', time: '30 min. ago', read: false },
  { message: 'Your reserved book “Smart Cities and Urban Life” is ready for pickup.', time: '40 min. ago', read: false },
  { message: 'A new article on “Inclusive Architecture” has been added to your saved topics.', time: '50 min. ago', read: false },
  { message: 'Reminder: The seminar “Designing for Communities” starts in 2 hours.', time: '1 hour ago', read: false },
  { message: 'You’ve unlocked a reading badge: “Urban Explorer” – check your profile!', time: '2 hours ago', read: false },
  { message: 'Feedback needed: What did you think of last week’s design forum?', time: '3 hours ago', read: false },
])

const olderNotifications = ref([
  { message: 'Reminder: Library event "Designing Future Cities" starts tomorrow at 10 AM.', time: '1 Day ago', read: true },
  { message: 'New opening hours starting this week. We’re now open till 8 PM!', time: '1 Day ago', read: true },
  { message: 'Thank you for attending the webinar on Sustainable Design. Recordings are now available.', time: '3 Days ago', read: true },
  { message: 'New video added: “The Evolution of Public Spaces” by Jane Hall.', time: '5 Days ago', read: true },
  { message: 'Your book return deadline is approaching. Make sure to return by Friday.', time: '6 Days ago', read: true },
  { message: 'Your wishlist has new matches! See recommended reads now.', time: '1 Week ago', read: true },
])

const trash = ref([])

const filteredRecentNotifications = computed(() => {
  return recentNotifications.value.filter(note =>
    note.message.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const filteredOlderNotifications = computed(() => {
  return olderNotifications.value.filter(note =>
    note.message.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const confirmMarkAll = () => {
  olderNotifications.value.unshift(...recentNotifications.value)
  recentNotifications.value = []
  showConfirm.value = false
}

const removeNotification = (index, type) => {
  let removed
  if (type === 'recent') {
    removed = recentNotifications.value.splice(index, 1)[0]
  } else if (type === 'older') {
    removed = olderNotifications.value.splice(index, 1)[0]
  }
  trash.value.unshift(removed)
}

const restoreNotification = (index) => {
  const note = trash.value.splice(index, 1)[0]
  if (note.read) {
    olderNotifications.value.unshift(note) // Goes back to older notifications if it's read
  } else {
    recentNotifications.value.unshift(note) // Goes back to recent notifications if it's unread
  }
}
</script>

<style scoped>
.mt-24 {
  margin-top: 96px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

input {
  padding-left: 2rem;
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
</style>
