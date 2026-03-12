<template>
  <div class="font-display bg-background-light dark:bg-background-dark text-black dark:text-white">
    <header class="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <div class="flex items-center gap-3">
            <div class="bg-primary p-1.5 rounded-lg">
              <span class="material-symbols-outlined text-white text-xl sm:text-2xl">architecture</span>
            </div>
            <h1 class="text-base sm:text-xl font-bold tracking-tight uppercase text-black">
              HD Land Surveying <span class="text-primary">&</span> Realty
            </h1>
          </div>
          
          <div class="flex items-center gap-4">
            <!-- Desktop Nav -->
            <nav class="hidden md:flex items-center gap-8">
              <NuxtLink to="/" class="text-sm font-semibold text-black hover:text-primary transition-colors">Home</NuxtLink>
              <NuxtLink to="/about" class="text-sm font-semibold text-black hover:text-primary transition-colors">About</NuxtLink>
              <NuxtLink to="/services" class="text-sm font-semibold text-black hover:text-primary transition-colors">Services</NuxtLink>
              <NuxtLink to="/contact" class="text-sm font-semibold text-black hover:text-primary transition-colors">Contact Us</NuxtLink>
            </nav>
            
            <!-- Mobile Hamburger -->
            <button 
              @click="isMenuOpen = true"
              class="md:hidden p-2 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all duration-200 shadow-sm border"
              aria-label="Open menu"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Mobile Menu Overlay -->
    <div 
      v-if="isMenuOpen" 
      class="fixed inset-0 z-60 bg-black/50 backdrop-blur-sm md:hidden" 
      @click="isMenuOpen = false"
    >
      <div 
        class="fixed right-0 top-0 h-full w-80 bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm border-l border-gray-200 shadow-2xl transform translate-x-0 transition-transform duration-300 ease-in-out"
        :class="{ 'translate-x-full': !isMenuOpen }"
        @click.stop
      >
        <div class="p-6 border-b border-gray-200">
          <div class="flex justify-between items-center">
            <h2 class="text-lg font-bold text-black">Menu</h2>
            <button 
              @click="isMenuOpen = false" 
              class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Close menu"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <nav class="p-6 space-y-4">
          <NuxtLink 
            to="/" 
            @click="isMenuOpen = false"
            class="block py-2 text-lg font-semibold text-black hover:text-primary transition-colors border-b border-gray-200 last:border-b-0"
          >Home</NuxtLink>
          <NuxtLink 
            to="/about" 
            @click="isMenuOpen = false"
            class="block py-2 text-lg font-semibold text-black hover:text-primary transition-colors border-b border-gray-200 last:border-b-0"
          >About</NuxtLink>
          <NuxtLink 
            to="/services" 
            @click="isMenuOpen = false"
            class="block py-2 text-lg font-semibold text-black hover:text-primary transition-colors border-b border-gray-200 last:border-b-0"
          >Services</NuxtLink>
          <NuxtLink 
            to="/contact" 
            @click="isMenuOpen = false"
            class="block py-2 text-lg font-semibold text-black hover:text-primary transition-colors"
          >Contact Us</NuxtLink>
        </nav>
      </div>
    </div>

    <main>
      <slot />
    </main>

    <footer class="bg-black text-gray-300">
  <div class="max-w-7xl mx-auto px-2 py-8 sm:py-16">

    <!-- Top Footer -->
    <div class="grid grid-cols-1 md:grid-cols-6 gap-10">

      <!-- Logo -->
      <div>
        <h2 class="text-white text-2xl font-bold tracking-widest">LOGO</h2>
        <p class="text-sm text-gray-400 mt-2 tracking-wide">SLOGAN COMPANY</p>
      </div>

      <!-- Column 1 -->
      <div>
        <ul class="space-y-2 text-sm uppercase tracking-wider">
          <li>Showcase</li>
          <li><a href="#" class="hover:text-white">Projects</a></li>
        </ul>
      </div>

      <!-- Column 2 -->
      <div>
        <ul class="space-y-2 text-sm uppercase tracking-wider">
          <li><a href="#" class="hover:text-white">Home</a></li>
        </ul>
      </div>

      <!-- Column 3 -->
      <div>
        <ul class="space-y-2 text-sm uppercase tracking-wider">
          <li><a href="#" class="hover:text-white">About Us</a></li>
        </ul>
      </div>

      <!-- Column 4 -->
      <div>
        <ul class="space-y-2 text-sm uppercase tracking-wider">
          <li><a href="#" class="hover:text-white">Services</a></li>
        </ul>
      </div>

      <!-- Column 5 -->
      <div>
        <ul class="space-y-2 text-sm uppercase tracking-wider">
          <li><a href="#" class="hover:text-white">Contact Us</a></li>
        </ul>
      </div>

    </div>

    <!-- Divider -->
    <div class="border-t border-gray-700 my-12"></div>

    <!-- Social + Copyright -->
    <div class="flex flex-col items-center space-y-6">

      <!-- Social Icons -->
      <div class="flex flex-wrap gap-4 justify-center">

        <!-- Facebook -->
        <a href="#" class="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full hover:border-white hover:text-white transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.1v-2.9h2.1V9.8c0-2.1 1.2-3.3 3.2-3.3.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.3v1.6h2.3l-.4 2.9h-1.9v7A10 10 0 0 0 22 12"/>
          </svg>
        </a>

        <!-- Instagram -->
        <a href="#" class="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full hover:border-white hover:text-white transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 
            0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 
            5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.8a1.2 
            1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM12 
            9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
          </svg>
        </a>

        <!-- Gmail -->
        <a href="mailto:example@gmail.com" class="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full hover:border-white hover:text-white transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-2 .9-2 
            2v12c0 1.1.9 2 2 2h16c1.1 
            0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
            4-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </a>

      </div>

      <!-- Copyright -->
      <p class="text-sm text-gray-500">
        © Copyright. All rights reserved.
      </p>

    </div>

  </div>
</footer>
  </div>
</template>

<script setup>
  // Mobile menu state
  const isMenuOpen = ref(false)

  // Close menu on escape key (client only)
  onMounted(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        isMenuOpen.value = false
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  })
</script>
