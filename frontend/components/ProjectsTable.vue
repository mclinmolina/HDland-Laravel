<script setup>
import { useSupabaseClient } from '#imports'

const supabase = useSupabaseClient()
const projects = ref([])
const showModal = ref(false)
const loading = ref(false)

const newProject = ref({
  name: '',
  image: null
})

// ✅ Fetch projects from Supabase
async function fetchProjects() {
  const { data, error } = await supabase
    .from('media')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching projects:', error.message)
    return
  }

  projects.value = data
}

onMounted(fetchProjects)

function openAddModal() {
  newProject.value = { name: '', image: null }
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

function handleImageChange(event) {
  const file = event.target.files[0]
  if (file) newProject.value.image = file
}

// ✅ Upload image + save to Supabase
async function addProject() {
  if (!newProject.value.name || !newProject.value.image) return

  loading.value = true
  try {
    const file = newProject.value.image
    const fileName = `${Date.now()}-${file.name}`

    // Upload image to Storage
    const { error: uploadError } = await supabase.storage
      .from('images')
      .upload(fileName, file)

    if (uploadError) throw uploadError

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(fileName)

    // Save to media table
    const { error: insertError } = await supabase
      .from('media')
      .insert({
        title: newProject.value.name,
        url: publicUrl
      })

    if (insertError) throw insertError

    await fetchProjects()
    closeModal()

  } catch (error) {
    console.error('Error adding project:', error.message)
    alert('Error: ' + error.message)
  } finally {
    loading.value = false
  }
}

// ✅ Delete from Supabase
async function deleteProject(id, imageUrl) {
  try {
    // Extract filename from URL to delete from storage
    const fileName = imageUrl.split('/').pop()

    await supabase.storage.from('images').remove([fileName])
    await supabase.from('media').delete().eq('id', id)

    await fetchProjects()
  } catch (error) {
    console.error('Error deleting project:', error.message)
    alert('Error: ' + error.message)
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
          <td class="py-3 font-medium text-white">{{ project.title }}</td>
          <td class="py-3">
            <img
              :src="project.url"
              class="h-16 w-28 object-cover rounded-lg"
            />
          </td>
          <td class="text-center">
            <button
              @click="deleteProject(project.id, project.url)"
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

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1 text-white">Name *</label>
            <input
              v-model="newProject.name"
              type="text"
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
              @click="addProject"
              :disabled="loading"
              class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50"
            >
              {{ loading ? 'Adding...' : 'Add Project' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>