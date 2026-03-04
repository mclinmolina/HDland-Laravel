<script setup>
const services = ref([])
const showModal = ref(false)
const loading = ref(false)

const newService = ref({
  type: '',
  name: '',
  survey_name: '',
  description: '',
  image: null
})

async function fetchServices() {
  services.value = await $fetch('http://localhost:8000/api/services', {
    credentials: 'include'
  })
}

onMounted(fetchServices)

function openAddModal() {
  newService.value = {
    type: '',
    name: '',
    survey_name: '',
    description: '',
    image: null
  }
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

async function addService() {
  loading.value = true
  try {
    const token = localStorage.getItem('token')
    console.log('Token:', token)
    
    if (!token) {
      console.error('No token found, please login first')
      alert('Please login first')
      return
    }
    
    const formData = new FormData()
    formData.append('type', newService.value.type)
    if (newService.value.name) formData.append('name', newService.value.name)
    if (newService.value.survey_name) formData.append('survey_name', newService.value.survey_name)
    if (newService.value.description) formData.append('description', newService.value.description)
    if (newService.value.image) formData.append('image', newService.value.image)

    const response = await $fetch('http://localhost:8000/api/services', {
      method: 'POST',
      body: formData,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    })
    
    console.log('Success:', response)
    closeModal()
    fetchServices()
  } catch (error) {
    console.error('Error adding service:', error)
    alert('Error: ' + (error?.data?.message || error.message || 'Unknown error'))
  } finally {
    loading.value = false
  }
}

function editService(service) {
  console.log('Edit', service)
}

function deleteService(id) {
  console.log('Delete', id)
}

function handleImageChange(event) {
  const file = event.target.files[0]
  if (file) {
    newService.value.image = file
  }
}
</script>

<template>
  <div class="bg-white dark:bg-gray-900 rounded-2xl shadow p-6">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-semibold">Services</h2>
      <button
        @click="openAddModal"
        class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        + Add Service
      </button>
    </div>

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

    <!-- Add Service Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white dark:bg-gray-900 rounded-2xl p-6 w-full max-w-md">
        <h3 class="text-lg font-semibold mb-4">Add New Service</h3>
        
        <form @submit.prevent="addService" class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1">Type *</label>
            <input
              v-model="newService.type"
              type="text"
              required
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
              placeholder="e.g., consultation"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Name</label>
            <input
              v-model="newService.name"
              type="text"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
              placeholder="Service name"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Survey Name</label>
            <input
              v-model="newService.survey_name"
              type="text"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
              placeholder="Survey name"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Description</label>
            <textarea
              v-model="newService.description"
              rows="3"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
              placeholder="Service description"
            ></textarea>
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Image</label>
            <input
              type="file"
              @change="handleImageChange"
              accept="image/*"
              class="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
            />
          </div>

          <div class="flex justify-end gap-3 pt-4">
            <button
              type="button"
              @click="closeModal"
              class="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="loading"
              class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50"
            >
              {{ loading ? 'Adding...' : 'Add Service' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
