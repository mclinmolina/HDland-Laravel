<script setup>
const services = ref([])

async function fetchServices() {
  services.value = await $fetch('http://localhost:8000/api/services', {
    credentials: 'include'
  })
}

onMounted(fetchServices)

function editService(service) {
  console.log('Edit', service)
}

function deleteService(id) {
  console.log('Delete', id)
}
</script>

<template>
  <div class="bg-white dark:bg-gray-900 rounded-2xl shadow p-6">
    <h2 class="text-xl font-semibold mb-4">Services</h2>

    <table class="w-full text-left">
      <thead>
        <tr class="border-b">
          <th class="py-2">Survey Name</th>
          <th>Description</th>
          <th>Image</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="service in services"
          :key="service.id"
          class="border-b hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <td class="py-3 font-medium">{{ service.name }}</td>
          <td>{{ service.description }}</td>
          <td>
            <img
              :src="service.survey_image"
              class="h-12 w-20 object-cover rounded-lg"
            />
          </td>
          <td class="text-center space-x-2">
            <button
              @click="editService(service)"
              class="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg"
            >
              Edit
            </button>
            <button
              @click="deleteService(service.id)"
              class="px-3 py-1 text-sm bg-red-500 text-white rounded-lg"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>