<template>
  <UDashboardGroup>
    <UDashboardSidebar resizable collapsible>
      <template #header>
        <div class="flex items-center gap-2 p-1.5">
          <UIcon name="i-heroicons-cube-transparent" class="w-6 h-6 text-primary" />
          <span class="font-bold text-neutral-900">HDland Admin</span>
        </div>
      </template>

      <UNavigationMenu 
        orientation="vertical" 
        :items="navItems" 
        class="px-2"
      />

      <template #footer>
        <UButton 
          label="Sign Out" 
          variant="ghost" 
          color="neutral" 
          icon="i-heroicons-arrow-left-on-rectangle"
          class="w-full justify-start"
          @click="onLogout"
        />
      </template>
    </UDashboardSidebar>

    <UDashboardPanel grow>
      <template #header>
        <UDashboardNavbar title="Overview">
          <template #right>
            <UButton icon="i-heroicons-magnifying-glass" variant="ghost" color="neutral" />
            <UButton icon="i-heroicons-bell" variant="ghost" color="neutral" />
            <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" size="sm" />
          </template>
        </UDashboardNavbar>
      </template>

      <UDashboardPanelContent>
        <slot />
      </UDashboardPanelContent>
    </UDashboardPanel>
  </UDashboardGroup>
</template>

<script setup>
const navItems = [
  [
    { label: 'Dashboard', icon: 'i-heroicons-home', to: '/admin/dashboard' },
    { label: 'Users', icon: 'i-heroicons-user-group', to: '/admin/users' },
    { label: 'Settings', icon: 'i-heroicons-cog-6-tooth', to: '/admin/settings' }
  ],
  [
    { label: 'Documentation', icon: 'i-heroicons-book-open', to: 'https://ui.nuxt.com', target: '_blank' }
  ]
]

async function onLogout() {
  await $fetch('http://localhost:8000/api/logout', { method: 'POST', credentials: 'include' })
  navigateTo('/admin/login')
}
</script>