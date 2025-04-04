<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-800 to-gray-300">
      <div class="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <button @click="$router.back()" class="text-red-800 mb-4 text-lg">
          ←
        </button>
        <h1 class="text-3xl font-bold text-center text-red-800 mb-6">Get Started</h1>
  
        <div class="flex justify-center gap-4 mb-6">
          <button 
            v-for="role in roles" :key="role.name"
            @click="selectedRole = role.name"
            :class="[
              'px-4 py-1 rounded-full text-white font-semibold',
              selectedRole === role.name ? 'bg-gray-900' : role.bgColor
            ]">
            {{ role.name }}
          </button>
        </div>
  
        <form @submit.prevent="handleSignUp" class="space-y-4">
          <input type="text" v-model="firstName" placeholder="Enter First name" class="input-field" required />
          <input type="text" v-model="lastName" placeholder="Enter Last name" class="input-field" required />
          <input type="email" v-model="email" placeholder="Enter E-mail" class="input-field" required />
          <input type="password" v-model="password" placeholder="Enter Password" class="input-field" required />
          <input type="password" v-model="confirmPassword" placeholder="Repeat Password" class="input-field" required />
  
          <div class="flex items-center">
            <input type="checkbox" id="policy" v-model="agreePolicy" class="mr-2" required />
            <label for="policy" class="text-gray-700 text-sm">Privacy policy and terms</label>
          </div>
  
          <button type="submit" class="w-full bg-red-800 text-white py-2 rounded-full hover:bg-red-700">
            Sign up
          </button>
        </form>
  
        <p class="text-center mt-4 text-sm">
          Already have an account? 
          <NuxtLink to="/login" class="text-red-800 font-semibold">Log in</NuxtLink>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const roles = [
    { name: "STUDENT", bgColor: "bg-red-700" },
    { name: "TEACHER", bgColor: "bg-blue-700" },
    { name: "EXTERNAL", bgColor: "bg-green-700" },
  ];
  
  const selectedRole = ref("STUDENT");
  const firstName = ref("");
  const lastName = ref("");
  const email = ref("");
  const password = ref("");
  const confirmPassword = ref("");
  const agreePolicy = ref(false);
  
  const handleSignUp = () => {
    if (password.value !== confirmPassword.value) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Sign-up successful for ${selectedRole.value}!`);
  };
  </script>
  
  <style scoped>
  .input-field {
    @apply w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300;
  }
  </style>
  