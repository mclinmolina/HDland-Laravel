export default defineNuxtRouteMiddleware(async (to, from) => {
  try {
    // Check if user is logged in by hitting a protected Laravel route
    await $fetch('http://localhost:8000/api/user', {
      credentials: 'include',
      headers: { 'Accept': 'application/json' }
    })
  } catch (error) {
    // If 401 Unauthorized, kick them back to login
    return navigateTo('/admin/login')
  }
})