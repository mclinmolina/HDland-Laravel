<script setup>
const projects = ref([])
const selectedImage = ref(null)

async function fetchProjects() {
  projects.value = await $fetch('http://localhost:8000/api/projects', {
    credentials: 'include'
  })
}

onMounted(fetchProjects)

async function uploadProject() {
  const formData = new FormData()
  formData.append('image', selectedImage.value)

  await $fetch('http://localhost:8000/api/projects', {
    method: 'POST',
    body: formData,
    credentials: 'include'
  })

  fetchProjects()
}
</script>

<template>
  <div class="bg-white dark:bg-gray-900 rounded-2xl shadow p-6">
    <h2 class="text-xl font-semibold mb-4">Projects</h2>

    <!-- Upload -->
    <div class="flex items-center gap-4 mb-6">
      <input type="file" @change="e => selectedImage = e.target.files[0]" />
      <button
        @click="uploadProject"
        class="px-4 py-2 bg-primary-500 text-white rounded-xl"
      >
        Upload
      </button>
    </div>

    <table class="w-full text-left">
      <thead>
        <tr class="border-b">
          <th class="py-2">Image</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="project in projects"
          :key="project.id"
          class="border-b hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <td class="py-3">
            <img
              :src="project.image"
              class="h-16 w-28 object-cover rounded-lg"
            />
          </td>
          <td class="text-center">
            <button
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