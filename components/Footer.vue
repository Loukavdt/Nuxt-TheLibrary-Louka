<template>
  <div>
    <!-- Footer -->
    <footer class="bg-red-600 text-white text-center py-5">
      <p class="text-sm md:text-base">Rue des Palais 70, 1030 Brussels | Sint-Lukas@gmail.com</p>
      <div class="mt-2 text-xs md:text-sm">
        <NuxtLink to="/privacypolicy" class="hover:underline">Privacy policy</NuxtLink> |
        <NuxtLink to="/cookies" class="hover:underline">Cookies policy</NuxtLink>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Responsive footer */
footer {
  width: 100%;
  padding: 1.25rem;
}

footer .text-sm {
  font-size: 0.875rem; /* Smaller text on mobile */
}

footer .text-base {
  font-size: 1rem; /* Regular size on desktop */
}

footer .text-xs {
  font-size: 0.75rem; /* Smaller links on mobile */
}

footer .text-sm {
  font-size: 0.875rem; /* Slightly larger links on desktop */
}

footer a {
  color: white;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline; /* Underline on hover */
}

/* Mobile first, larger text on bigger screens */
@media (min-width: 768px) {
  footer .text-sm {
    font-size: 1rem;
  }

  footer .text-xs {
    font-size: 0.875rem;
  }
}
</style>
