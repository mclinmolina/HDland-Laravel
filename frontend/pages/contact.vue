<script setup>
definePageMeta({
  layout: 'default'
})
</script>

<template>
  <div class="bg-background-light dark:bg-background-dark min-h-screen">
    <!-- HERO SECTION -->
    <section class="relative h-80 flex items-center justify-center text-center overflow-hidden">
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS1Tc0dkam4XP-wCa2UgEF2BGUcafMaCGkc5BPF2TFLFEW52wp73SLJoHb4fTAi_1XJsb2a6vZD6KGZoh4y4wi1QwtQUn8Utc8w_U-2hKe5CTGVqz4E5tYVLkXBMQy5EzyOn8n1vLCpg7hUOD_C2mP03hvFlZexK4YPxnM7WgyVvIL9OlmA4jTdnhtKDGo7fYlGXGm8f406EumE7rKtI8kiB4fo7uXL4hLDrdUvh5AYSAQMSeqGiyAAfZjuhu2wY7wJXmIITVYY3gY"
        class="absolute inset-0 w-full h-full object-cover"
        alt="Hero background"
      />
      <div class="absolute inset-0 bg-black/60"/>
      <div class="relative z-10 px-4">
        <h1 class="text-white text-4xl md:text-6xl font-black mb-4">
          Contact Us
        </h1>
        <div class="h-1.5 w-32 bg-primary-600 mx-auto rounded-full"/>
        <p class="text-white/80 text-lg max-w-2xl mx-auto mt-4">
          Have a project in mind or need expert advice? Reach out to our team of professionals.
        </p>
      </div>
    </section>

    <!-- CONTACT SECTION -->
    <section class="max-w-6xl mx-auto px-4 py-16 -mt-10 relative z-10">
      <!-- Two Column Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- Left Column: Contact Info Card -->
        <div class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
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
            <form id="contactForm" action="https://formsubmit.co/fc4d0a2ed529d423cfaf284b0c58adf3" method="POST" class="space-y-6">
              <!-- Hidden inputs for FormSubmit -->
              <input type="hidden" name="_subject" value="New Contact Form Submission">
              <input type="text" name="_honey" style="display:none">
              <input type="hidden" name="_captcha" value="false">
              <input type="hidden" name="_next" value="">
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Full Name -->
                <div>
                  <label class="block text-sm font-bold text-black uppercase tracking-wider mb-2">Full Name</label>
                  <input 
                    class="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 focus:border-primary focus:bg-white focus:ring-0 transition-colors placeholder-gray-400 rounded-lg text-black"
                    name="Name"
                    id="name" 
                    placeholder="John Doe" 
                    type="text"
                    required
                  />
                </div>
                <!-- Email -->
                <div>
                  <label class="block text-sm font-bold text-black uppercase tracking-wider mb-2" for="email">Email Address</label>
                  <input 
                    class="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 focus:border-primary focus:bg-white focus:ring-0 transition-colors placeholder-gray-400 rounded-lg text-black"
                    name="email" 
                    id="email"
                    placeholder="john@example.com" 
                    type="email"
                    required
                  />
                </div>
              </div>
              <!-- Subject -->
              <div>
                <label class="block text-sm font-bold text-black uppercase tracking-wider mb-2">Subject</label>
                <input 
                  class="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 focus:border-primary focus:bg-white focus:ring-0 transition-colors placeholder-gray-400 rounded-lg text-black"
                  name="subject" 
                  id="subject"
                  placeholder="Project Inquiry" 
                  type="text"
                  required
                />
              </div>
              <!-- Message -->
              <div>
                <label class="block text-sm font-bold text-black uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  class="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 focus:border-primary focus:bg-white focus:ring-0 transition-colors placeholder-gray-400 rounded-lg text-black"
                  name="message" 
                  placeholder="How can we help you?" 
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <!-- Submit Button -->
              <button 
                class="w-full bg-primary text-white py-4 px-8 font-bold uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg rounded-lg flex items-center justify-center gap-2"
                type="submit"
                id="submitBtn"
              >
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Modal -->
    <div id="successModal" class="fixed inset-0 z-50 hidden">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="closeModal()"></div>
      <!-- Modal Content -->
      <div class="flex items-center justify-center min-h-screen px-4">
        <div class="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center transform scale-95 opacity-0 transition-all duration-300" id="modalContent">
          <!-- Success Icon -->
          <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span class="material-symbols-outlined text-green-600 text-5xl">check_circle</span>
          </div>
          <!-- Title -->
          <h3 class="text-2xl font-bold text-black mb-2">Message Sent Successfully!</h3>
          <!-- Description -->
          <p class="text-gray-600 mb-6">
            Thank you for reaching out. We've received your message and will get back to you as soon as possible.
          </p>
          <!-- Close Button -->
          <button 
            @click="closeModal()"
            class="w-full bg-primary text-white py-3 px-6 font-bold uppercase tracking-wider hover:bg-primary/90 transition-all rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    
    if (!form || !submitBtn) {
      console.error('Form or submit button not found');
      return;
    }

    // Form submission handler
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const originalBtnText = submitBtn.innerHTML;
      
      // Change button to loading state
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="flex items-center gap-2"><svg class="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Sending...</span>';
      
      // Submit form using fetch
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        console.log('Response status:', response.status);
        if (response.ok || response.status === 200) {
          // Show success modal
          this.showModal();
          // Reset form
          form.reset();
        } else {
          alert('Something went wrong. Please try again.');
        }
      }).catch(error => {
        console.error('Error:', error);
        // Even if fetch fails, show success modal (form might still be submitted)
        this.showModal();
        form.reset();
      }).finally(() => {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      });
    });

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal();
      }
    });
  },
  methods: {
    showModal() {
      const modal = document.getElementById('successModal');
      const modalContent = document.getElementById('modalContent');
      
      if (!modal || !modalContent) {
        alert('Thank you! Your message has been sent successfully!');
        return;
      }
      
      modal.classList.remove('hidden');
      
      // Trigger animation
      setTimeout(() => {
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
      }, 10);
    },
    closeModal() {
      const modal = document.getElementById('successModal');
      const modalContent = document.getElementById('modalContent');
      
      if (!modal || !modalContent) return;
      
      // Trigger animation out
      modalContent.classList.remove('scale-100', 'opacity-100');
      modalContent.classList.add('scale-95', 'opacity-0');
      
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 300);
    }
  }
}
</script>

