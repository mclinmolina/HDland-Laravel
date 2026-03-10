<script setup>
const projects = ref([])
const showModal = ref(false)
const loading = ref(false)

const newProject = ref({
  name: '',
  image: null
})

async function fetchProjects() {
  projects.value = await $fetch('http://localhost:8000/api/projects', {
    credentials: 'include'
  })
}

onMounted(fetchProjects)

function openAddModal() {
  newProject.value = {
    name: '',
    image: null
  }
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

async function addProject() {
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
    formData.append('name', newProject.value.name)
    if (newProject.value.image) {
      formData.append('image', newProject.value.image)
    }

    const response = await $fetch('http://localhost:8000/api/projects', {
      method: 'POST',
      body: formData,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    })
    
    console.log('Success:', response)
    closeModal()
    fetchProjects()
  } catch (error) {
    console.error('Error adding project:', error)
    alert('Error: ' + (error?.data?.message || error.message || 'Unknown error'))
  } finally {
    loading.value = false
  }
}

function handleImageChange(event) {
  const file = event.target.files[0]
  if (file) {
    newProject.value.image = file
  }
}

async function deleteProject(id) {
  try {
    const token = localStorage.getItem('token')
    await $fetch(`http://localhost:8000/api/projects/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      },
      credentials: 'include'
    })
    fetchProjects()
  } catch (error) {
    console.error('Error deleting project:', error)
  }
}
</script>

<template>
  <div class="bg-gray-800 rounded-2xl shadow p-6">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-semibold text-white">Projects</h2>
      <button
        @click="openAddModal"
        class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        + Add Project
      </button>
    </div>

    <table class="w-full text-left">
      <thead>
        <tr class="border-b border-gray-700">
          <th class="py-2 text-white">Name</th>
          <th class="text-white">Image</th>
          <th class="text-center text-white">Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="project in projects"
          :key="project.id"
          class="border-b border-gray-700 hover:bg-gray-700"
        >
          <td class="py-3 font-medium text-white">{{ project.name }}</td>
          <td class="py-3">
            <img
              :src="project.image"
              class="h-16 w-28 object-cover rounded-lg"
            />
          </td>
          <td class="text-center">
            <button
              @click="deleteProject(project.id)"
              class="px-3 py-1 text-sm bg-red-500 text-white rounded-lg"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Add Project Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-gray-800 rounded-2xl p-6 w-full max-w-md border border-gray-700">
        <h3 class="text-lg font-semibold mb-4 text-white">Add New Project</h3>
        
        <form @submit.prevent="addProject" class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1 text-white">Name *</label>
            <input
              v-model="newProject.name"
              type="text"
              required
              class="w-full px-3 py-2 border rounded-lg bg-gray-700 border-gray-600 text-white"
              placeholder="Project name"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1 text-white">Image *</label>
            <input
              type="file"
              @change="handleImageChange"
              accept="image/*"
              required
              class="w-full px-3 py-2 border rounded-lg bg-gray-700 border-gray-600 text-white"
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
              {{ loading ? 'Adding...' : 'Add Project' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
