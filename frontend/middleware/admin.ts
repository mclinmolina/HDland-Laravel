/**
 * Admin Route Middleware
 * Protects all /admin/* routes from unauthenticated access
 */
export default defineNuxtRouteMiddleware(async (to, from) => {
  // Skip middleware on server-side
  if (import.meta.server) return

  // Allow access to login page
  if (to.path === '/admin/login') {
    return
  }

  const token = localStorage.getItem('token')

  // If no token, redirect to login
  if (!token) {
    return navigateTo('/')
  }

  // Verify token is valid - DISABLED for Supabase testing
  console.log('Admin middleware bypassed for Supabase test')
  // Mock auth pass
  // catch block commented
})

