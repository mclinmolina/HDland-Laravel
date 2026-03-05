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

    <footer class="bg-zinc-950 text-white py-8 border-t border-white/5">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-col md:flex-row gap-8 md:items-start">
          <!-- HDLAND Branding -->
          <div class="md:w-1/3">
            <div class="flex items-center gap-2 mb-4">
              <div class="bg-primary p-1 rounded">
                <span class="material-symbols-outlined text-white text-xl">architecture</span>
              </div>
              <h3 class="font-bold text-lg uppercase">HD Land</h3>
            </div>
            <p class="text-gray-400 text-sm">Professional land surveying and realty services.</p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="font-bold text-sm mb-4 text-primary uppercase">Quick Links</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li><NuxtLink to="/" class="hover:text-primary">Home</NuxtLink></li>
              <li><NuxtLink to="/about" class="hover:text-primary">About Us</NuxtLink></li>
              <li><NuxtLink to="/services" class="hover:text-primary">Services</NuxtLink></li>
              <li><NuxtLink to="/contact" class="hover:text-primary">Contact</NuxtLink></li>
            </ul>
          </div>

          <!-- Socials -->
          <div>
            <h4 class="font-bold text-sm mb-4 text-primary uppercase">Socials</h4>
            <div class="flex gap-4">
              <a href="#" class="text-gray-400 hover:text-primary" aria-label="Facebook">
                <span class="material-symbols-outlined text-2xl">facebook</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-primary" aria-label="Twitter">
                <span class="material-symbols-outlined text-2xl">twitter_x</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-primary" aria-label="Instagram">
                <span class="material-symbols-outlined text-2xl">photo_camera</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-primary" aria-label="LinkedIn">
                <span class="material-symbols-outlined text-2xl">business</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
