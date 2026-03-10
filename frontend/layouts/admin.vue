<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- Top Navbar -->
    <header class="flex items-center justify-between px-6 py-4 bg-gray-800 shadow">
      <!-- Logo Left -->
      <div class="flex items-center gap-3">
        <!-- <img src="/logo.png" class="h-8 w-auto" /> -->
        <span class="font-semibold text-lg text-white">HD Land Admin</span>
      </div>

      <!-- Logout Right -->
      <button
        @click="logout"
        class="px-4 py-2 text-sm rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
      >
        Logout
      </button>
    </header>
    <!-- Page Content -->
    <main class="p-6 text-white">
      <slot />
    </main>
  </div>
</template>

<script setup>
const api = useApi()

async function logout() {
  try {
    await api('/logout', {
      method: 'POST'
    })
  } catch (e) {
    console.log('Logout error (safe to ignore if token expired)')
  }

  localStorage.removeItem('token')
  navigateTo('/admin/login')
}
</script>