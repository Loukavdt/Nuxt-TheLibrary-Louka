<template>
  <div class="bg-white text-gray-900 min-h-screen">
    <!-- Top Navigation Icons -->
    <header class="bg-white px-4 py-3 flex items-center justify-end shadow fixed top-0 left-0 right-0 z-50">
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

    <!-- Spacer for fixed header -->
    <div class="h-16"></div>

    <!-- Main Content -->
    <div class="container mx-auto px-6 py-12 space-y-10">
      <!-- Back Button -->
      <button @click="$router.back()" class="text-red-800 text-4xl font-bold leading-none">
        ←
      </button>

      <!-- Page Title -->
      <h1 class="text-4xl font-bold mb-4">Cookies Policy</h1>

      <!-- Section: Introduction -->
      <section>
        <h2 class="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>
          This Cookies Policy explains how we use cookies and similar tracking technologies on our website. By continuing to use our site, you agree to our use of cookies in accordance with this policy.
        </p>
      </section>

      <!-- Section: What Are Cookies -->
      <section>
        <h2 class="text-2xl font-semibold mb-2">2. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website. They help us remember your preferences, login details, and enhance your browsing experience.
        </p>
      </section>

      <!-- Section: Types of Cookies -->
      <section>
        <h2 class="text-2xl font-semibold mb-2">3. Types of Cookies We Use</h2>
        <ul class="list-disc list-inside space-y-2">
          <li><strong>Essential Cookies:</strong> Required for core functionality such as navigation and secure login.</li>
          <li><strong>Performance Cookies:</strong> Collect anonymous data about how users interact with the site.</li>
          <li><strong>Functional Cookies:</strong> Remember user choices and preferences for a more personalized experience.</li>
          <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements and track campaign effectiveness.</li>
        </ul>
      </section>

      <!-- Section: Managing Cookies -->
      <section>
        <h2 class="text-2xl font-semibold mb-2">4. How to Manage Cookies</h2>
        <p>You can control or delete cookies through your browser settings. Here are quick guides for common browsers:</p>
        <ul class="list-disc list-inside space-y-1 mt-2">
          <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
          <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
          <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
          <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
        </ul>
      </section>

      <!-- Section: Third-Party Cookies -->
      <section>
        <h2 class="text-2xl font-semibold mb-2">5. Third-Party Cookies</h2>
        <p>
          We may use third-party tools like Google Analytics or Facebook Pixel that set their own cookies. These services help us understand user behavior and improve our platform. Please check their individual privacy policies for more information.
        </p>
      </section>

      <!-- Section: Updates -->
      <section>
        <h2 class="text-2xl font-semibold mb-2">6. Updates to This Policy</h2>
        <p>
          We may occasionally update this Cookies Policy to reflect changes in technology, regulation, or our services. Updates will be posted here with an updated revision date.
        </p>
      </section>

      <p class="text-sm text-gray-500">Last updated: April 17, 2025</p>
    </div>
  </div>
</template>

<script setup>
import { ShoppingCartIcon, BellIcon, UserIcon } from '@heroicons/vue/24/solid'
</script>
