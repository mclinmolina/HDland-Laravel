<template>
  <div class="bg-gray-800 rounded-2xl shadow p-6">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-xl font-semibold text-white">About Page</h2>
      <button
        @click="saveAbout"
        :disabled="loading"
        class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50"
      >
        {{ loading ? 'Saving...' : 'Save Changes' }}
      </button>
    </div>

    <div class="space-y-6">

      <!-- About Text -->
      <div>
        <label class="block text-sm font-medium mb-1 text-white">About Company</label>
        <textarea
          v-model="form.about_text"
          rows="4"
          class="w-full px-3 py-2 border rounded-lg bg-gray-700 border-gray-600 text-white resize-none"
          placeholder="Describe your company..."
        />
      </div>

      <!-- Years of Experience -->
      <div>
        <label class="block text-sm font-medium mb-1 text-white">Years of Experience</label>
        <input
          v-model="form.years_of_experience"
          type="number"
          class="w-full px-3 py-2 border rounded-lg bg-gray-700 border-gray-600 text-white"
          placeholder="e.g. 25"
        />
      </div>

      <!-- Team Image -->
      <div>
        <label class="block text-sm font-medium mb-1 text-white">Team Image</label>

        <!-- Current Image Preview -->
        <div v-if="form.team_image_url" class="mb-3">
          <p class="text-xs text-gray-400 mb-1">Current image:</p>
          <img
            :src="form.team_image_url"
            class="h-32 w-48 object-cover rounded-lg"
          />
        </div>

        <input
          type="file"
          @change="handleImageChange"
          accept="image/*"
          class="w-full px-3 py-2 border rounded-lg bg-gray-700 border-gray-600 text-white"
        />
        <p class="text-xs text-gray-400 mt-1">Upload a new image to replace the current one</p>
      </div>

    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient()
const loading = ref(false)
const newImage = ref(null)

const form = ref({
  id: null,
  about_text: '',
  years_of_experience: 0,
  team_image_url: '',
  mission: '',
  vision: ''
})

// ✅ Fetch existing about record
async function fetchAbout() {
  const { data, error } = await supabase
    .from('about')
    .select('*')
    .single()

  if (error) {
    console.error('Error fetching about:', error.message)
    return
  }

  form.value = { ...data }
}

onMounted(fetchAbout)

function handleImageChange(event) {
  const file = event.target.files[0]
  if (file) newImage.value = file
}

// ✅ Upload image if a new one was selected
async function uploadImage() {
  if (!newImage.value) return form.value.team_image_url

  const file = newImage.value
  const fileName = `${Date.now()}-${file.name}`

  // Delete old image from storage if exists
  if (form.value.team_image_url) {
    const oldFileName = form.value.team_image_url.split('/').pop()
    await supabase.storage.from('about').remove([oldFileName])
  }

  const { error: uploadError } = await supabase.storage
    .from('about')
    .upload(fileName, file)

  if (uploadError) throw uploadError

  const { data: { publicUrl } } = supabase.storage
    .from('about')
    .getPublicUrl(fileName)

  return publicUrl
}

// ✅ Save all changes
async function saveAbout() {
  loading.value = true

  try {
    const imageUrl = await uploadImage()

    const { error } = await supabase
      .from('about')
      .update({
        about_text: form.value.about_text,
        years_of_experience: form.value.years_of_experience,
        team_image_url: imageUrl,
        mission: form.value.mission,
        vision: form.value.vision
      })
      .eq('id', form.value.id)

    if (error) throw error

    newImage.value = null
    alert('✅ About page updated successfully!')

  } catch (error) {
    console.error('Error saving about:', error.message)
    alert('Error: ' + error.message)
  } finally {
    loading.value = false
  }
}
</script>