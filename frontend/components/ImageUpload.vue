<template>
  <div>
    <UButton :loading="isUploading" @click="triggerFileInput" :disabled="isUploading">
      {{ isUploading ? 'Uploading...' : 'Upload Image' }}
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

import type { Database } from '~/types/supabase'
const supabase = useSupabaseClient<Database>()

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

  // Validate file
  if (!file.type.startsWith('image/')) {
    errorMsg.value = 'Please select an image file only.'
    return
  }
  if (file.size > 5 * 1024 * 1024) {
    errorMsg.value = 'File size too large. Max 5MB.'
    return
  }

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

    // Reset input
    fileInput.value!.value = ''

    // Save metadata to DB
    // @ts-ignore TS type mismatch - check Supabase table schema
    const { error: dbError } = await supabase.from('media').insert([{
      title: file.name,
      url: data.publicUrl
    }])
    if (dbError) throw dbError

  } catch (err: any) {
    console.error('Upload error:', err)
    errorMsg.value = err.message || 'Upload failed. Check console for details.'
  } finally {
    isUploading.value = false
  }
}
</script>