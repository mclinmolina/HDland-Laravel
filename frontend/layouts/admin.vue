<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- Top Navbar -->
    <header class="flex items-center justify-between px-6 py-4 bg-gray-800 shadow">
      <!-- Logo Left -->
      <div class="flex items-center gap-3">
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
const supabase = useSupabaseClient()

async function logout() {
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error('Logout error:', error.message)
    return
  }

  navigateTo('/')
}
</script>