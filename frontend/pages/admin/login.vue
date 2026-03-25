<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950 px-4">
    <UCard class="w-full max-w-sm shadow-xl border-t-4 border-primary-500">
      <template #header>
        <div class="flex flex-col items-center gap-3">
          <div class="text-center">
            <h1 class="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-wider">
              Admin Portal
            </h1>
            <p class="text-xs text-gray-500">Authorized Access Only</p>
          </div>
        </div>
      </template>

      <UForm :state="state" class="space-y-5" @submit="onSubmit">
        <UFormField label="Email" name="email">
          <UInput 
            v-model="state.email" 
            type="email"
            placeholder="admin@example.com" 
            icon="i-heroicons-envelope" 
            size="lg" 
          />
        </UFormField>

        <UFormField label="Password" name="password">
          <UInput 
            v-model="state.password" 
            type="password" 
            placeholder="••••••••" 
            icon="i-heroicons-lock-closed" 
            size="lg" 
          />
        </UFormField>

        <UButton type="submit" block :loading="loading" color="primary" size="lg" class="mt-4 font-bold">
          Sign In
        </UButton>
      </UForm>

      <template #footer>
        <p class="text-center text-[10px] text-gray-400">
          © 2026 Hdland Surveying & Realty. All Rights Reserved.
        </p>
      </template>
    </UCard>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})

const supabase = useSupabaseClient()
const toast = useToast()

const state = reactive({
  email: '',
  password: ''
})

const loading = ref(false)

async function onSubmit() {
  loading.value = true

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: state.email,
      password: state.password
    })

    if (error) throw error

    toast.add({
      title: 'Success',
      description: 'Logged in!',
      color: 'success'
    })

    navigateTo('/admin/dashboard')

  } catch (error) {
    console.error('Login Error:', error)

    toast.add({
      title: 'Error',
      description: error?.message || 'Login failed',
      color: 'error'
    })
  } finally {
    loading.value = false
  }
}
</script>