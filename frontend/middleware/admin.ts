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
    return navigateTo('/admin/login')
  }

  // Verify token is valid
  try {
    await $fetch('http://localhost:8000/api/user', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      }
    })
  } catch (error) {
    // Token invalid or expired, remove and redirect
    localStorage.removeItem('token')
    return navigateTo('/admin/login')
  }
})

