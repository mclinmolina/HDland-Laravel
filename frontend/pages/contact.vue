<script setup>
definePageMeta({
  layout: 'default'
})

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref(null) // 'success' | 'error' | null

async function handleSubmit() {
  isSubmitting.value = true
  submitStatus.value = null
  
  try {
    // Simulate API call - replace with actual endpoint
    await new Promise(resolve => setTimeout(resolve, 1505))
    
    // Here you would normally send to your backend
    // await $fetch('http://localhost:8000/api/contact', {
    //   method: 'POST',
    //   body: form.value
    // })
    
    submitStatus.value = 'success'
    form.value = { name: '', email: '', subject: '', message: '' }
  } catch (error) {
    console.error('Error submitting form:', error)
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="bg-background-light dark:bg-background-dark min-h-screen">
    <!-- HERO SECTION -->
    <section class="relative h-80 flex items-center justify-center text-center overflow-hidden">
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS1Tc0dkam4XP-wCa2UgEF2BGUcafMaCGkc5BPF2TFLFEW52wp73SLJoHb4fTAi_1XJsb2a6vZD6KGZoh4y4wi1QwtQUn8Utc8w_U-2hKe5CTGVqz4E5tYVLkXBMQy5EzyOn8n1vLCpg7hUOD_C2mP03hvFlZexK4YPxnM7WgyVvIL9OlmA4jTdnhtKDGo7fYlGXGm8f406EumE7rKtI8kiB4fo7uXL4hLDrdUvh5AYSAQMSeqGiyAAfZjuhu2wY7wJXmIITVYY3gY"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/60"/>
      <div class="relative z-10 px-4">
        <h1 class="text-white text-4xl md:text-6xl font-black mb-4">
          Contact Us
        </h1>
        <div class="h-1.5 w-32 bg-primary-600 mx-auto rounded-full"/>
        <p class="text-white/80 text-lg max-w-2xl mx-auto">
          Have a project in mind or need expert advice? Reach out to our team of professionals.
        </p>
      </div>
    </section>

    <!-- CONTACT SECTION -->
    <section class="max-w-6xl mx-auto px-4 py-16 -mt-10 relative z-10">
      <!-- Two Column Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- Left Column: Contact Info Card -->
        <div class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden h-fit">
          <div class="bg-gray-100 px-8 py-6 text-center">
            <h2 class="text-2xl font-bold text-black">Contact Information</h2>
            <p class="text-black/80 text-sm mt-1">Reach us through any of these channels</p>
          </div>
          
          <div class="p-8 space-y-8">
            <!-- Address -->
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-primary text-2xl">location_on</span>
              </div>
              <div>
                <h3 class="font-bold text-lg mb-1 text-black">Office Address</h3>
                <p class="text-gray-600 text-sm">
                  Suite 405, Engineering Plaza,<br/>
                  Central District, Business Hub 1234
                </p>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-primary text-2xl">call</span>
              </div>
              <div>
                <h3 class="font-bold text-lg mb-1 text-black">Phone Number</h3>
                <p class="text-gray-600 text-sm">
                  +1 (555) 123-4567<br/>
                  +1 (555) 987-6543
                </p>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-primary text-2xl">mail</span>
              </div>
              <div>
                <h3 class="font-bold text-lg mb-1 text-black">Email Address</h3>
                <p class="text-gray-600 text-sm">
                  info@hdlandsurveying.com<br/>
                  support@hdlandsurveying.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Contact Form -->
        <div class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div class="bg-gray-100 px-8 py-6 text-center">
            <h2 class="text-2xl font-bold text-black">Send us a Message</h2>
            <p class="text-black/80 text-sm mt-1">Fill out the form below and we'll get back to you</p>
          </div>
          
          <div class="p-8">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Full Name -->
                <div>
                  <label class="block text-sm font-bold text-black uppercase tracking-wider mb-2" for="full-name">Full Name</label>
                  <input 
                    v-model="form.name"
                    class="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 focus:border-primary focus:bg-white focus:ring-0 transition-colors placeholder-gray-400 rounded-lg"
                    id="full-name" 
                    name="full-name" 
                    placeholder="John Doe" 
                    type="text"
                    required
                  />
                </div>
                <!-- Email -->
                <div>
                  <label class="block text-sm font-bold text-black uppercase tracking-wider mb-2" for="email">Email Address</label>
                  <input 
                    v-model="form.email"
                    class="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 focus:border-primary focus:bg-white focus:ring-0 transition-colors placeholder-gray-400 rounded-lg"
                    id="email" 
                    name="email" 
                    placeholder="john@example.com" 
                    type="email"
                    required
                  />
                </div>
              </div>
              <!-- Subject -->
              <div>
                <label class="block text-sm font-bold text-black uppercase tracking-wider mb-2" for="subject">Subject</label>
                <input 
                  v-model="form.subject"
                  class="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 focus:border-primary focus:bg-white focus:ring-0 transition-colors placeholder-gray-400 rounded-lg"
                  id="subject" 
                  name="subject" 
                  placeholder="Project Inquiry" 
                  type="text"
                  required
                />
              </div>
              <!-- Message -->
              <div>
                <label class="block text-sm font-bold text-black uppercase tracking-wider mb-2" for="message">Message</label>
                <textarea 
                  v-model="form.message"
                  class="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 focus:border-primary focus:bg-white focus:ring-0 transition-colors placeholder-gray-400 rounded-lg text-black"
                  id="message" 
                  name="message" 
                  placeholder="How can we help you?" 
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <!-- Submit Button -->
              <button 
                :disabled="isSubmitting"
                class="w-full bg-primary text-white py-4 px-8 font-bold uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed rounded-lg flex items-center justify-center gap-2"
                type="submit"
              >
                <span v-if="isSubmitting" class="material-symbols-outlined animate-spin">sync</span>
                <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
              </button>

              <!-- Success Message -->
              <div v-if="submitStatus === 'success'" class="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined">check_circle</span>
                  <span>Your message has been sent successfully! We'll get back to you soon.</span>
                </div>
              </div>

              <!-- Error Message -->
              <div v-if="submitStatus === 'error'" class="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined">error</span>
                  <span>Something went wrong. Please try again later.</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

