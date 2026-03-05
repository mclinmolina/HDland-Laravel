<template>
  <div>
    <section class="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-black/40 z-10"></div>
        <!-- <img class="w-full h-full object-cover" src="/hero-bg.jpg" /> -->
      </div>
      <div class="relative z-20 text-center px-4">
        <h1 class="text-5xl md:text-7xl font-black text-white mb-6 uppercase">
          HD Land Surveying <br/>& Realty
        </h1>
        <p class="text-lg text-gray-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Precision engineering meets strategic real estate solutions.
        </p>
        <div class="flex gap-4 justify-center">
          <UButton label="View Services" size="xl" color="primary" />
          <UButton label="Our Portfolio" size="xl" variant="ghost" class="text-white ring-1 ring-white/20" />
        </div>
      </div>
    </section>

    <section class="py-24 bg-white dark:bg-zinc-900">
      <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        <div v-for="val in values" :key="val.title" class="text-center p-8 border rounded-xl">
          <span class="material-symbols-outlined text-primary text-4xl mb-4">{{ val.icon }}</span>
          <h3 class="text-xl font-bold mb-3">{{ val.title }}</h3>
          <p class="text-gray-600 dark:text-gray-400">{{ val.desc }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const values = [
  { title: 'Precision', icon: 'my_location', desc: 'State-of-the-art GNSS millimeter accuracy.' },
  { title: 'Expertise', icon: 'workspace_premium', desc: 'Licensed Geodetic Engineers.' },
  { title: 'Reliability', icon: 'verified_user', desc: 'Timely delivery and legal compliance.' }
]
</script>