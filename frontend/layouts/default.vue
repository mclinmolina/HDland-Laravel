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

    <footer class="bg-black text-gray-300">
  <div class="max-w-7xl mx-auto px-2 py-16">

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
          <li><a href="#" class="hover:text-white">projects</a></li>
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

      <!-- Column 4 -->
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
      <div class="flex space-x-4">

        <a href="#" class="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full hover:border-white hover:text-white transition">
          <span class="material-symbols-outlined text-[18px]">facebook</span>
        </a>

        <a href="#" class="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full hover:border-white hover:text-white transition">
          <span class="material-symbols-outlined text-[18px]">public</span>
        </a>

        <a href="#" class="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full hover:border-white hover:text-white transition">
          <span class="material-symbols-outlined text-[18px]">rss_feed</span>
        </a>

        <a href="#" class="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full hover:border-white hover:text-white transition">
          <span class="material-symbols-outlined text-[18px]">mail</span>
        </a>

        <a href="#" class="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full hover:border-white hover:text-white transition">
          <span class="material-symbols-outlined text-[18px]">more_horiz</span>
        </a>

      </div>

      <!-- Copyright -->
      <p class="text-sm text-gray-500">
        ©Copyright. All rights reserved.
      </p>
    </div>
  </div>
</footer>
  </div>
</template>
