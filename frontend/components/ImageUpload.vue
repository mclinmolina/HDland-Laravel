<template>
  <div>
    <UButton @click="triggerFileInput">
      Upload Image
    </UButton>

    <input
      ref="fileInput"
      type="file"
      accept="image/*"
      class="hidden"
      @change="handleUpload"
    />

    <!-- Preview -->
    <div v-if="uploadedUrl" class="mt-4">
      <p class="text-sm text-green-500">✅ Upload successful!</p>
      <img :src="uploadedUrl" class="mt-2 w-48 rounded-lg" />
    </div>

    <!-- Error -->
    <p v-if="errorMsg" class="text-sm text-red-500 mt-2">{{ errorMsg }}</p>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()

const fileInput = ref<HTMLInputElement | null>(null)
const uploadedUrl = ref<string | null>(null)
const errorMsg = ref<string | null>(null)
const isUploading = ref(false)

const triggerFileInput = () => {
  fileInput.value?.click()
}

const handleUpload = async (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (!file) return

  isUploading.value = true
  errorMsg.value = null

  try {
    const fileName = `${Date.now()}-${file.name}`

    // Upload to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from('images')
      .upload(fileName, file)

    if (uploadError) throw uploadError

    // Get public URL
    const { data } = supabase.storage
      .from('images')
      .getPublicUrl(fileName)

    uploadedUrl.value = data.publicUrl

    // Save metadata to DB
    await supabase.from('media').insert({
      title: file.name,
      url: data.publicUrl
    })

  } catch (err: any) {
    errorMsg.value = err.message
  } finally {
    isUploading.value = false
  }
}
</script>