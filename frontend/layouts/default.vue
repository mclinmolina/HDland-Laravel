<template>
  <div class="font-display bg-background-light dark:bg-background-dark text-black dark:text-white">
    <header class="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <div class="flex items-center gap-3">
            <div class="bg-primary p-1.5 rounded-lg">
              <span class="material-symbols-outlined text-white text-2xl">architecture</span>
            </div>
            <h1 class="text-xl font-bold tracking-tight uppercase text-black">
              HD Land Surveying <span class="text-primary">&</span> Realty
            </h1>
          </div>
          <nav class="hidden md:flex items-center gap-8">
            <NuxtLink to="/" class="text-sm font-semibold text-black hover:text-primary transition-colors">Home</NuxtLink>
            <NuxtLink to="/about" class="text-sm font-semibold text-black hover:text-primary transition-colors">About</NuxtLink>
            <NuxtLink to="/services" class="text-sm font-semibold text-black hover:text-primary transition-colors">Services</NuxtLink>
            <NuxtLink to="/contact" class="text-sm font-semibold text-black hover:text-primary transition-colors">Contact Us</NuxtLink>
          </nav>
        </div>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="bg-zinc-950 text-white py-16 border-t border-white/5">
      <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        <div>
          <h4 class="font-bold text-lg mb-6 text-primary uppercase">Quick Links</h4>
          <ul class="space-y-3 text-gray-400 text-sm">
            <li><NuxtLink to="/" class="hover:text-primary">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-primary">About Us</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-lg mb-6 text-primary uppercase">Contact Info</h4>
          <p class="text-gray-400 text-sm">123 Surveyors Way, Engineering District</p>
          <p class="text-gray-400 text-sm">+1 (555) 123-4567</p>
        </div>
      </div>
    </footer>
  </div>
</template>
