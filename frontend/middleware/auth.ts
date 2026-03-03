export default defineNuxtRouteMiddleware(async () => {
  if (import.meta.server) return

  const token = localStorage.getItem('token')

  if (!token) {
    return navigateTo('/admin/login')
  }

  try {
    await $fetch('http://localhost:8000/api/user', {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      }
    })
  } catch (error) {
    localStorage.removeItem('token')
    return navigateTo('/admin/login')
  }
})