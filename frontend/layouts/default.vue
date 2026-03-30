<template>
  <div class="font-display bg-background-light dark:bg-background-dark text-black dark:text-white">
    <header class="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <!--The logo image should match the height of the header so that i would look like a logo-->
          <div class="flex items-center gap-3">
            <div class="p-1.5 rounded-lg flex items-center justify-center">
              <img 
                src="/images/hero/HDLOGO.png"
                class="h-20 w-20 object-contain"
              />
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

   <footer class="bg-gray-950 text-gray-400">
  <div class="max-w-7xl mx-auto px-6 py-16">

    <!-- Top Footer -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-800">

      <!-- Brand -->
      <div class="md:col-span-2 space-y-4">
        <div class="flex items-center gap-3">
          <div class="bg-primary p-1.5 rounded-lg">
            <img
              src="/images/hero/HDLOGO.png"
              class="h-8 w-8 object-contain"
            />
          </div>
          <h2 class="text-white text-lg font-bold tracking-tight uppercase">
            HD Land Surveying <span class="text-primary">&</span> Realty
          </h2>
        </div>
        <p class="text-sm text-gray-500 leading-relaxed max-w-sm">
          Precision engineering meets strategic real estate solutions. Delivering geodetic accuracy and professional consultancy for your property needs.
        </p>
        <!-- Social Icons -->
        <div class="flex gap-3 pt-2">
          <a href="#" class="w-9 h-9 flex items-center justify-center border border-gray-700 rounded-full hover:border-primary hover:text-primary transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.1v-2.9h2.1V9.8c0-2.1 1.2-3.3 3.2-3.3.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.3v1.6h2.3l-.4 2.9h-1.9v7A10 10 0 0 0 22 12"/>
            </svg>
          </a>
          <a href="#" class="w-9 h-9 flex items-center justify-center border border-gray-700 rounded-full hover:border-primary hover:text-primary transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.8a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
            </svg>
          </a>
          <a href="mailto:example@gmail.com" class="w-9 h-9 flex items-center justify-center border border-gray-700 rounded-full hover:border-primary hover:text-primary transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="space-y-4">
        <h3 class="text-white font-semibold uppercase tracking-widest text-xs">Quick Links</h3>
        <ul class="space-y-3 text-sm">
          <li><NuxtLink to="/" class="hover:text-white hover:translate-x-1 transition-all inline-block">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="hover:text-white hover:translate-x-1 transition-all inline-block">About Us</NuxtLink></li>
          <li><NuxtLink to="/services" class="hover:text-white hover:translate-x-1 transition-all inline-block">Services</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-white hover:translate-x-1 transition-all inline-block">Contact Us</NuxtLink></li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div class="space-y-4">
        <h3 class="text-white font-semibold uppercase tracking-widest text-xs">Contact</h3>
        <ul class="space-y-3 text-sm">
          <li class="flex items-start gap-2">
            <span class="material-symbols-outlined text-primary text-base mt-0.5">location_on</span>
            <span>Baguio City, Philippines</span>
          </li>
          <li class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-base">call</span>
            <span>+63 900 000 0000</span>
          </li>
          <li class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-base">mail</span>
            <a href="mailto:example@gmail.com" class="hover:text-white transition">example@gmail.com</a>
          </li>
        </ul>
      </div>

    </div>

    <!-- Bottom Footer -->
    <div class="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
      <p>© 2026 HD Land Surveying & Realty. All Rights Reserved.</p>
      <p>Built with precision, delivered with integrity.</p>
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
