<script setup>
const services = [
  {
    title: "Relocation Survey",
    desc: "Re-establishing lost or obliterated property boundaries based on official records.",
    icon: "location_searching",
    img: "/icons/relocation.png"
  },
  {
    title: "Original Survey",
    desc: "First-time survey of unregistered land for the purpose of primary titling.",
    icon: "add_location_alt",
    img: "/icons/OriginalSurvey.png"
  },
  {
    title: "Subdivision Survey",
    desc: "Dividing a single parcel of land into two or more smaller lots.",
    icon: "splitscreen",
    img: "/icons/subdivision.png"
  },
  {
    title: "Verification Survey",
    desc: "Verifying the correct position of existing monuments and boundaries.",
    icon: "verified",
    img: "/icons/verified.png"
  },
  {
    title: "Topographic Survey",
    desc: "Mapping natural and man-made features and elevations on the terrain.",
    icon: "terrain",
    img: "/icons/topographic.png"
  },
  {
    title: "As-Built Surveying",
    desc: "Documenting the final location of structures during or after construction.",
    icon: "domain",
    img: "/icons/asBuilt.png"
  },
  {
    title: "Segregation Survey",
    desc: "Isolating a specific portion of a large tract of land for distinct ownership.",
    icon: "content_cut",
    img: "/icons/segregationSurvey.png"
  },
  {
    title: "Sketch Plan/Vicinity Map",
    desc: "Visual representation of property location relative to landmarks.",
    icon: "map",
    img: "/icons/vicinityMap.png"
  },
  {
    title: "Consolidation Survey",
    desc: "Combining two or more adjacent lots into a single unified property title.",
    icon: "layers",
    img: "/icons/consolidation.png"
  },
  {
    title: "Title Transfer/Titling",
    desc: "Complete assistance for legal land registration and ownership transfer.",
    icon: "description",
    img: "/icons/titling.png"
  }
]
</script>

<template>
  <div class="bg-white font-sans">
    <!-- HERO SECTION -->
    <section class="relative w-full h-100 flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          alt="Professional surveying equipment in use" 
          class="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS1Tc0dkam4XP-wCa2UgEF2BGUcafMaCGkc5BPF2TFLFEW52wp73SLJoHb4fTAi_1XJsb2a6vZD6KGZoh4y4wi1QwtQUn8Utc8w_U-2hKe5CTGVqz4E5tYVLkXBMQy5EzyOn8n1vLCpg7hUOD_C2mP03hvFlZexK4YPxnM7WgyVvIL9OlmA4jTdnhtKDGo7fYlGXGm8f406EumE7rKtI8kiB4fo7uXL4hLDrdUvh5AYSAQMSeqGiyAAfZjuhu2wY7wJXmIITVYY3gY"
        />
      </div>
      <div class="relative z-20 text-center px-4">
        <h1 class="text-white text-4xl md:text-6xl font-black mb-4">Our Professional Services</h1>
        <div class="h-1.5 w-32 bg-primary mx-auto rounded-full"></div>
      </div>
    </section>

    <!-- LAND SURVEYING SOLUTIONS -->
    <section class="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-black">Land Surveying Solutions</h2>
        <p class="mt-2 text-gray-600 max-w-2xl">Expert technical analysis and documentation for every stage of land ownership and development.</p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
<div 
  v-for="service in services" 
  :key="service.title"
  class="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary/40 shadow-sm hover:shadow-lg transition-all duration-300 group"
>

  <!-- Icon Area -->
  <div class="aspect-video flex items-center justify-center bg-gray-50 group-hover:bg-primary/5 transition">

    <div class="w-24 h-24 flex items-center justify-center">

      <!-- Image -->
      <img
        v-if="service.img"
        :src="service.img"
        class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
        :style="{ filter: 'brightness(0) saturate(100%) invert(22%) sepia(98%) saturate(6931%) hue-rotate(354deg) brightness(89%) contrast(101%)' }"
      />

      <!-- Icon -->
      <span
        v-else
        class="material-symbols-outlined text-primary text-[72px] transition-transform duration-300 group-hover:scale-110"
      >
        {{ service.icon }}
      </span>

    </div>

  </div>

  <!-- Content -->
  <div class="p-6 flex flex-col h-full">

    <h3 class="font-bold text-lg text-gray-900">
      {{ service.title }}
    </h3>

    <p class="text-sm text-gray-600 mt-2 mb-5 leading-relaxed line-clamp-2">
      {{ service.desc }}
    </p>

    <!-- CTA -->
    <a 
      href="#"
      class="mt-auto inline-flex items-center text-xs font-bold tracking-widest text-primary uppercase gap-1 group-hover:gap-2 transition-all"
    >
      Inquire
      <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
    </a>

  </div>

</div>
      </div>
    </section>

    <!-- EQUIPMENT RENTALS -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-12">
          <h2 class="text-3xl font-bold text-black">Equipment Rentals</h2>
          <p class="mt-2 text-gray-600">Premium surveying technology available for daily or project-based lease.</p>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
          <!-- RTK GPS Receiver -->
          <div class="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden border border-gray-200">
            <div class="md:w-1/2 aspect-square md:aspect-auto">
              <img 
                class="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFQIJ8BkqvbTkvFS6rtf5qM0ZNK31zFZpLD7hE226p7C2LDNf2rBaUUt8ZRORznkY5uNa_sj3mBs71y2BUfae0SWU2gmmQSBq5GH4s7WsTJymKFEZhbrzTofTvUzJoEoen8Rk25lfb1ZGSCNXBCe1OEeSl_5BfCUyKunMnzEsWJRrGZxrkLELOzDgmrB3AW5yGcD_6tv4UM8_LOcOJbRiVSIKPam8TTKDIigFdL4AwlYMRIQwaqaKHrxw9t3LkQcOSDVALmOO_106x"
              />
            </div>
            <div class="p-8 flex flex-col md:w-1/2">
              <span class="text-primary font-bold text-xs uppercase">Available Now</span>
              <h3 class="text-2xl font-bold mt-2 text-black">RTK GPS Receiver</h3>
              <p class="text-gray-600 mt-4 text-sm leading-relaxed">High-precision satellite positioning system for centimeter-level accuracy.</p>
              <ul class="mt-6 space-y-2">
                <li class="flex items-center text-sm text-gray-700">
                  <span class="material-symbols-outlined text-primary mr-2 text-lg">check_circle</span> Dual-frequency tracking
                </li>
                <li class="flex items-center text-sm text-gray-700">
                  <span class="material-symbols-outlined text-primary mr-2 text-lg">check_circle</span> Built-in 4G LTE/UHF
                </li>
                <li class="flex items-center text-sm text-gray-700">
                  <span class="material-symbols-outlined text-primary mr-2 text-lg">check_circle</span> IP68 Water/Dust resistant
                </li>
              </ul>
              <div class="mt-auto pt-8 flex items-baseline gap-2">
                <span class="text-2xl font-black text-black">₱5,000</span>
                <span class="text-gray-500 text-sm">/ Day</span>
              </div>
            </div>
          </div>

          <!-- Digital Total Station -->
          <div class="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden border border-gray-200">
            <div class="md:w-1/2 aspect-square md:aspect-auto">
              <img 
                class="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTuQMAuEyZdUkO0Lt8AxPUoiWCTnU_fVrFnxqz4U4-0WfVweVsmLa2Sxp6Azv9YmvNwqgLDPbXjBkuzkMz-rPv5wt4vI28LYid5EVrVGxFL073zIXd-Fzo1vOazqlEh9y5FjEU-M3bO2ZFHtWjtTUESpBssEzhubzZq0MJ9d4SMfvE0Y3-jURzC0Lo-wPBQ7Lh6dgT_YE3tbV5G_0pdgLw-j9a_AdFdoHnT3o59zNePxolphHW4V9uxBduMnbjwcB0s_YzGNjDvD3r"
              />
            </div>
            <div class="p-8 flex flex-col md:w-1/2">
              <span class="text-primary font-bold text-xs uppercase">Professional Grade</span>
              <h3 class="text-2xl font-bold mt-2 text-black">Digital Total Station</h3>
              <p class="text-gray-600 mt-4 text-sm leading-relaxed">Integrated EDM for precise distance and angle measurements simultaneously.</p>
              <ul class="mt-6 space-y-2">
                <li class="flex items-center text-sm text-gray-700">
                  <span class="material-symbols-outlined text-primary mr-2 text-lg">check_circle</span> Reflectorless measurement
                </li>
                <li class="flex items-center text-sm text-gray-700">
                  <span class="material-symbols-outlined text-primary mr-2 text-lg">check_circle</span> 2" Angle accuracy
                </li>
                <li class="flex items-center text-sm text-gray-700">
                  <span class="material-symbols-outlined text-primary mr-2 text-lg">check_circle</span> Large internal memory
                </li>
              </ul>
              <div class="mt-auto pt-8 flex items-baseline gap-2">
                <span class="text-2xl font-black text-black">₱3,500</span>
                <span class="text-gray-500 text-sm">/ Day</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

