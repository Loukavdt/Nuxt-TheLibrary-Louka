<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Drawer } from 'flowbite'
import Menu from 'vue-material-design-icons/Menu.vue'

const isDrawerOpen = ref(false)
let drawer: Drawer | null = null

onMounted(() => {
  const $targetEl = document.getElementById('drawer-swipe')

  const options = {
    placement: 'left',
    backdrop: true,
    bodyScrolling: true,
    edge: false,
    edgeOffset: '',
    backdropClasses: 'bg-black bg-opacity-30 fixed inset-0 z-[90]',
    onShow: () => {
      isDrawerOpen.value = true
    },
    onHide: () => {
      isDrawerOpen.value = false
    }
  }

  if ($targetEl) {
    drawer = new Drawer($targetEl, options)
    drawer.hide()
  }
})

const openDrawer = () => {
  drawer?.show()
}

const closeDrawer = () => {
  drawer?.hide()
}
</script>

<template>
  <!-- Drawer toggle button: only shows when drawer is closed -->
  <button
    v-if="!isDrawerOpen"
    id="drawer-show-button"
    type="button"
    aria-controls="drawer-swipe"
    @click="openDrawer"
    class="fixed top-5 left-5 z-[100]"
  >
    <Menu :size="25" />
  </button>

  <!-- Drawer panel -->
  <div class="max-w-4xl mx-auto">
    <div
      id="drawer-swipe"
      class="fixed z-[95] h-screen p-4 overflow-y-auto bg-white dark:bg-zinc-900"
      tabindex="-1"
      aria-labelledby="drawer-label"
    >
      <!-- Close button -->
      <button
        id="drawer-hide-button"
        type="button"
        aria-controls="drawer-swipe"
        @click="closeDrawer"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Close menu</span>
      </button>

      <!-- Drawer Content -->
      <div class="mt-2 mb-5">
        <!-- TitleBlock -->
        <div class="text-xl font-semibold text-gray-800 dark:text-white">LOUKA VAN DER TAELEN</div>
        <!-- SubTitleBlock -->
        <div class="text--1xl font-semibold text-gray-800 dark:text-white">STUDENT</div>
        <!-- Navigation links go here -->
        <Navigation />
      </div>

      <div class="mt-5 mb-5">
        <Footer />
      </div>
    </div>
  </div>
</template>

<style scoped>
#drawer-swipe {
  width: 50vw;
  z-index: 95;
  background-color: rgba(255, 255, 255, 0.98);
}

.dark-mode #drawer-swipe {
  background-color: rgba(22, 23, 21, 0.95);
}

hr {
  border-color: #D1D1D1;
}

.dark-mode hr {
  border-color: aliceblue;
}
</style>
