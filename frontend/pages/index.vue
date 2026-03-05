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
          HD Land Surveying <br/>&amp; Realty
        </h1>
        <p class="text-lg md:text-xl text-gray-100 mb-10 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Precision engineering meets strategic real estate solutions. Delivering geodetic accuracy and professional consultancy for your property needs.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-primary text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-primary/20">
            View Services
          </button>
          <button class="bg-primary text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-primary/20">
            Our Portfolio
          </button>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="py-24 bg-white dark:bg-background-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
          <div class="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="flex flex-col items-center text-center p-8 rounded-xl bg-background-light dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <div class="size-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <span class="material-symbols-outlined text-primary text-4xl">my_location</span>
            </div>
            <h3 class="text-xl font-bold mb-3">Precision</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              We utilize state-of-the-art GNSS and total stations to ensure millimeter accuracy in every boundary and topographic survey.
            </p>
          </div>
          <div class="flex flex-col items-center text-center p-8 rounded-xl bg-background-light dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <div class="size-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <span class="material-symbols-outlined text-primary text-4xl">workspace_premium</span>
            </div>
            <h3 class="text-xl font-bold mb-3">Expertise</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Our team consists of licensed Geodetic Engineers and experienced real estate brokers with decades of combined field experience.
            </p>
          </div>
          <div class="flex flex-col items-center text-center p-8 rounded-xl bg-background-light dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <div class="size-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <span class="material-symbols-outlined text-primary text-4xl">verified_user</span>
            </div>
            <h3 class="text-xl font-bold mb-3">Reliability</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Consistent, timely delivery and full legal compliance for all technical documentation and property transactions.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Specialized Solutions / Services Section -->
    <section class="py-24 bg-background-light dark:bg-zinc-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-end mb-12">
          <div>
            <span class="text-primary font-bold tracking-widest uppercase text-sm">Capabilities</span>
            <h2 class="text-4xl font-bold mt-2">Specialized Solutions</h2>
          </div>
          <div class="flex gap-3">
            <button class="p-3 rounded-full border border-gray-300 hover:bg-primary hover:text-white transition-all">
              <span class="material-symbols-outlined">chevron_left</span>
            </button>
            <button class="p-3 rounded-full border border-gray-300 hover:bg-primary hover:text-white transition-all">
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
            <div class="relative overflow-hidden rounded-xl h-64 mb-4">
              <img 
                :alt="service.name" 
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                :src="service.survey_image || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'"
              />
              <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
              <div class="absolute bottom-4 left-4 size-10 bg-primary rounded-lg flex items-center justify-center">
                <span class="material-symbols-outlined text-white">map</span>
              </div>
            </div>
            <h3 class="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{{ service.name }}</h3>
            <p class="text-gray-600 dark:text-gray-400">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="py-24 bg-white dark:bg-background-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4">Featured Projects</h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">A testament to our commitment to excellence across various scales and complexities.</p>
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
              <h4 class="text-white text-xl font-bold">{{ project.name }}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black text-white pt-20 pb-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div class="col-span-1 md:col-span-1">
            <div class="flex items-center gap-3 mb-6">
              <span class="material-symbols-outlined text-primary text-3xl">architecture</span>
              <h2 class="text-xl font-bold tracking-tight uppercase">HD LAND SURVEYING</h2>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed mb-6">
              Leading the way in Geodetic Engineering and Realty services. We provide professional solutions for land title processing, boundary surveys, and property brokerage with unparalleled accuracy.
            </p>
            <div class="flex gap-4">
              <a class="size-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors" href="#">
                <span class="material-symbols-outlined text-lg">social_leaderboard</span>
              </a>
              <a class="size-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors" href="#">
                <span class="material-symbols-outlined text-lg">language</span>
              </a>
              <a class="size-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors" href="#">
                <span class="material-symbols-outlined text-lg">alternate_email</span>
              </a>
            </div>
          </div>
          <div>
            <h3 class="text-lg font-bold mb-6 border-b border-primary/30 pb-2 inline-block">Quick Links</h3>
            <ul class="space-y-4 text-gray-400 text-sm">
              <li><a class="hover:text-white transition-colors" href="#">Survey Services</a></li>
              <li><a class="hover:text-white transition-colors" href="#">Real Estate Listings</a></li>
              <li><a class="hover:text-white transition-colors" href="#">Equipment Rentals</a></li>
              <li><a class="hover:text-white transition-colors" href="#">Title Processing</a></li>
              <li><a class="hover:text-white transition-colors" href="#">Consultancy</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-bold mb-6 border-b border-primary/30 pb-2 inline-block">Support</h3>
            <ul class="space-y-4 text-gray-400 text-sm">
              <li><a class="hover:text-white transition-colors" href="#">FAQs</a></li>
              <li><a class="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
              <li><a class="hover:text-white transition-colors" href="#">Terms of Service</a></li>
              <li><a class="hover:text-white transition-colors" href="#">Client Portal</a></li>
              <li><a class="hover:text-white transition-colors" href="#">Request Quote</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-bold mb-6 border-b border-primary/30 pb-2 inline-block">Newsletter</h3>
            <p class="text-gray-400 text-sm mb-4">Get the latest property market updates and surveying insights.</p>
            <div class="flex flex-col gap-3">
              <input class="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Email Address" type="email"/>
              <button class="bg-primary text-white py-3 rounded-lg font-bold text-sm tracking-wide">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs font-medium uppercase tracking-widest">
          <p>© 2024 HD LAND SURVEYING AND REALTY. ALL RIGHTS RESERVED.</p>
          <div class="flex gap-8">
            <a class="hover:text-white" href="#">Cookie Policy</a>
            <a class="hover:text-white" href="#">Legal Notice</a>
          </div>
        </div>
      </div>
    </footer>
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

