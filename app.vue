<script setup lang="ts">
</script>

<template>
    <div class="">
      <client-only placeholder="loading...">
        <div class="absolute left-0 top-0">
        <Drawer/>
        </div>
      </client-only>
      <NuxtPage />
      <Footer />
    </div>
</template>
