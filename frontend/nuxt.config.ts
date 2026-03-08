// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap' 
        },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL@20..48,100..700,0..1&display=swap' 
        }
      ]
    }
  },
  ui: {
    theme: {
      colors: ['primary', 'neutral'] // Register your custom colors here
    }
  },
  routeRules: {
    // Public routes - SSR enabled for SEO
    '/': { ssr: true },
    '/about': { ssr: true },
    '/services': { ssr: true },
    '/contact': { ssr: true },
    // Admin routes - SSR enabled
    '/admin/**': { ssr: true }
  }
})
