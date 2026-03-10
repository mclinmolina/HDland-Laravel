<template>
  <div class="space-y-10">
    <ServicesTable />
    <ProjectsTable />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
})
</script>
