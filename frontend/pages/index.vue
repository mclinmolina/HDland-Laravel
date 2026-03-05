<template>
  <div class="font-display">
    <!-- Hero Section -->
    <section class="relative h-[80vh] min-h-150 flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          alt="Panoramic landscape showing a green valley, mountains, and a clear blue sky" 
          class="w-full h-full object-cover" 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
        />
      </div>
      <div class="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase drop-shadow-lg">
          HD Land Surveying <br/>& Realty
        </h1>
        <p class="text-lg md:text-xl text-gray-100 mb-10 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Precision engineering meets strategic real estate solutions. Delivering geodetic accuracy and professional consultancy for your property needs.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <!-- Enhanced Primary Buttons with Highlight Effect -->
          <button 
            class="btn-highlight bg-primary-600 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-xl shadow-primary-500/30 ring-2 ring-primary-500/20 hover:bg-primary-700 hover:ring-primary-400 hover:shadow-primary-500/50"
          >
            View Services
          </button>
          <button 
            class="btn-highlight bg-primary-600 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-xl shadow-primary-500/30 ring-2 ring-primary-500/20 hover:bg-primary-700 hover:ring-primary-400 hover:shadow-primary-500/50"
          >
            Our Portfolio
          </button>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-black">Our Core Values</h2>
          <div class="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <!-- Card 1 -->
          <div class="flex flex-col items-center text-center p-8 rounded-xl bg-gray-50 border border-gray-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-shadow">
            <div class="size-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <span class="material-symbols-outlined text-primary-600 text-4xl">my_location</span>
            </div>
            <h3 class="text-xl font-bold mb-3 text-black">Precision</h3>
            <p class="text-gray-600 leading-relaxed">
              We utilize state-of-the-art GNSS and total stations to ensure millimeter accuracy in every boundary and topographic survey.
            </p>
          </div>
          <!-- Card 2 -->
          <div class="flex flex-col items-center text-center p-8 rounded-xl bg-gray-50 border border-gray-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-shadow">
            <div class="size-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <span class="material-symbols-outlined text-primary-600 text-4xl">workspace_premium</span>
            </div>
            <h3 class="text-xl font-bold mb-3 text-black">Expertise</h3>
            <p class="text-gray-600 leading-relaxed">
              Our team consists of licensed Geodetic Engineers and experienced real estate brokers with decades of combined field experience.
            </p>
          </div>
          <!-- Card 3 -->
          <div class="flex flex-col items-center text-center p-8 rounded-xl bg-gray-50 border border-gray-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-shadow">
            <div class="size-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <span class="material-symbols-outlined text-primary-600 text-4xl">verified_user</span>
            </div>
            <h3 class="text-xl font-bold mb-3 text-black">Reliability</h3>
            <p class="text-gray-600 leading-relaxed">
              Consistent, timely delivery and full legal compliance for all technical documentation and property transactions.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Specialized Solutions / Services Section -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-end mb-12">
          <div>
            <span class="text-primary-600 font-bold tracking-widest uppercase text-sm">Capabilities</span>
            <h2 class="text-4xl font-bold mt-2 text-black">Specialized Solutions</h2>
          </div>
          <div class="flex gap-3">
            <button class="p-3 rounded-full border border-gray-300 text-black hover:bg-primary-600 hover:text-white hover:border-primary hover:shadow-lg hover:shadow-primary/30 hover:scale-110 transition-all">
              <span class="material-symbols-outlined">chevron_left</span>
            </button>
            <button class="p-3 rounded-full border border-gray-300 text-black hover:bg-primary-600 hover:text-white hover:border-primary hover:shadow-lg hover:shadow-primary/30 hover:scale-110 transition-all">
              <span class="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        <div class="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x">
          <div 
            v-for="service in services" 
            :key="service.id" 
            class="min-w-[320px] md:min-w-100 snap-start group cursor-pointer"
          >
            <!-- Image container with shadow -->
            <div class="relative overflow-hidden rounded-xl h-64 mb-4 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.2)] group-hover:shadow-[0_12px_40px_-6px_rgba(0,0,0,0.3)] transition-shadow">
              <img 
                :alt="service.name" 
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                :src="service.survey_image || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'"
              />
              <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
              <div class="absolute bottom-4 left-4 size-10 bg-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
                <span class="material-symbols-outlined text-white">map</span>
              </div>
            </div>
            <h3 class="text-2xl font-bold mb-2 text-black group-hover:text-primary transition-colors">{{ service.name }}</h3>
            <p class="text-gray-600">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="py-24 bg-white dark:bg-background-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-black text-4xl font-bold mb-4">Featured Projects</h2>
          <p class="text-black dark:text-gray-400 max-w-2xl mx-auto">A testament to our commitment to excellence across various scales and complexities.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="project in projects" 
            :key="project.id" 
            class="relative h-80 rounded-xl overflow-hidden group"
          >
            <img 
              :alt="project.name" 
              class="w-full h-full object-cover" 
              :src="project.image || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'"
            />
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <p class="text-primary font-bold text-sm uppercase">Project</p>
              <h4 class="text-black text-xl font-bold">{{ project.name }}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const services = ref([])
const projects = ref([])

async function fetchData() {
  try {
    // Fetch services
    const servicesData = await $fetch('http://localhost:8000/api/services', {
      credentials: 'include'
    })
    services.value = servicesData

    // Fetch projects
    const projectsData = await $fetch('http://localhost:8000/api/projects', {
      credentials: 'include'
    })
    projects.value = projectsData
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(fetchData)
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>