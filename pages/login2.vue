<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-800 to-gray-300">
    <div class="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
      
      <!-- Back knop -->
      <button @click="$router.back()" class="text-red-800 mb-4 text-4xl font-bold leading-none">
        ←
      </button>
      
      <h1 class="text-4xl font-bold text-center text-red-800 mb-6">Welcome Back</h1>

      <!-- Rol selectie knoppen -->
      <div class="flex justify-center gap-4 mb-6">
        <button 
          v-for="role in roles" :key="role.name"
          @click="selectedRole = role.name"
          :class="[ 
            'px-4 py-1 rounded-full text-white font-semibold', 
            selectedRole === role.name ? 'bg-gray-900' : role.bgColor,
            textSize // Dynamically apply the textSize class
          ]">
          {{ role.name }}
        </button>
      </div>

      <form @submit.prevent="goToHomePage" class="space-y-4">
        <input type="email" placeholder="Enter E-mail" class="input-field" />
        <input type="password" placeholder="Enter Password" class="input-field" />
        <input type="password" placeholder="Repeat Password" class="input-field" />

        <div class="flex items-center justify-between text-sm text-gray-700">
          <div class="flex items-center">
            <input type="checkbox" id="policy" class="mr-2" />
            <label for="policy">Remember me</label>
          </div>
          <NuxtLink to="/forgot-password" class="text-red-700 hover:underline">Forgot password?</NuxtLink>
        </div>

        <button type="submit" class="w-full bg-red-800 text-white py-2 rounded-full hover:bg-red-700">
          Log in
        </button>
      </form>

      <p class="text-center mt-4 text-sm">
        Don't have an account? 
        <!-- Change the link here to the signup page -->
        <NuxtLink to="/signup" class="text-red-800 font-semibold">Sign up</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

// Router instance for navigation
const router = useRouter();

// Selected role (default "STUDENT")
const selectedRole = ref("STUDENT");

// Role options
const roles = [
  { name: "STUDENT", bgColor: "bg-red-700" },
  { name: "TEACHER", bgColor: "bg-blue-700" },
  { name: "EXTERNAL", bgColor: "bg-green-700" },
];

// Font size class for roles (use 'text-xs' for smaller text)
const textSize = 'text-xs'; // Change this to 'text-sm', 'text-base', 'text-lg', or 'text-xl' as needed

// Navigate to home page
const goToHomePage = () => {
  router.push("/");
};
</script>

<style scoped>
.input-field {
  @apply w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300;
}
</style>
