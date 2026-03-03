<template>
  <div class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <UCard v-for="stat in stats" :key="stat.label" class="bg-neutral-50/50">
        <div class="flex items-center gap-4">
          <div class="p-2 bg-primary-100 rounded-lg">
            <UIcon :name="stat.icon" class="w-6 h-6 text-primary-600" />
          </div>
          <div>
            <p class="text-sm font-medium text-neutral-500">{{ stat.label }}</p>
            <p class="text-2xl font-bold">{{ stat.value }}</p>
          </div>
        </div>
      </UCard>
    </div>

    <UCard title="System Activity">
      <template #header>
        <h3 class="font-semibold text-neutral-900">Recent Database Records</h3>
      </template>
      <div class="h-96 flex items-center justify-center border-2 border-dashed border-neutral-200 rounded-xl">
        <p class="text-neutral-400 italic">No data found in Laravel database...</p>
      </div>
    </UCard>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin', // This links to the layout we just created
  middleware: 'auth'
})

const stats = [
  { label: 'New Registrations', value: '42', icon: 'i-heroicons-user-plus' },
  { label: 'Server Status', value: 'Online', icon: 'i-heroicons-check-circle' },
  { label: 'Storage Used', value: '12.4 GB', icon: 'i-heroicons-circle-stack' }
]
</script>