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
      <h1 class="text-4xl font-bold mb-4">Privacy Policy</h1>

      <!-- Section: Introduction -->
      <section>
        <h2 class="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>
          We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our platform.
        </p>
      </section>

      <!-- Section: Information Collection -->
      <section>
        <h2 class="text-2xl font-semibold mb-2">2. Information We Collect</h2>
        <ul class="list-disc list-inside space-y-2">
          <li><strong>Personal Info:</strong> Name, email address, contact details</li>
          <li><strong>Usage Data:</strong> Pages visited, time spent, interactions</li>
          <li><strong>Device Info:</strong> IP, browser, device type</li>
        </ul>
      </section>

      <!-- Section: How We Use Data -->
      <section>
        <h2 class="text-2xl font-semibold mb-2">3. How We Use Your Data</h2>
        <ul class="list-disc list-inside space-y-2">
          <li>Improve and personalize user experience</li>
          <li>Provide customer support</li>
          <li>Send important updates (if subscribed)</li>
          <li>Prevent fraud and enhance security</li>
        </ul>
      </section>

      <!-- Section: Sharing -->
      <section>
        <h2 class="text-2xl font-semibold mb-2">4. Sharing Your Information</h2>
        <p>
          We do not sell your personal information. We may share it with service providers (like payment processors or analytics platforms) only as necessary and under confidentiality agreements.
        </p>
      </section>

      <!-- Section: Security -->
      <section>
        <h2 class="text-2xl font-semibold mb-2">5. Data Security</h2>
        <p>
          We take all reasonable steps to protect your data using encryption, secure storage, and regular audits. However, no system is 100% secure — please use strong passwords and secure networks.
        </p>
      </section>

      <!-- Section: Your Rights -->
      <section>
        <h2 class="text-2xl font-semibold mb-2">6. Your Rights</h2>
        <ul class="list-disc list-inside space-y-2">
          <li>Access or correct your information</li>
          <li>Request deletion of your account</li>
          <li>Withdraw consent at any time</li>
          <li>Contact us with concerns or requests</li>
        </ul>
      </section>

      <!-- Section: Contact -->
      <section>
        <h2 class="text-2xl font-semibold mb-2">7. Contact Us</h2>
        <p>
          If you have any questions about your privacy or this policy, reach out at:
          <br />
          <strong>Email:</strong> support@example.com
        </p>
      </section>

      <p class="text-sm text-gray-500">Last updated: April 17, 2025</p>
    </div>
  </div>
</template>

<script setup>
import { ShoppingCartIcon, BellIcon, UserIcon } from '@heroicons/vue/24/solid'
</script>
