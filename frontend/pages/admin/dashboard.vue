<template>
  <div class="space-y-10">
    <ServicesTable />
    <ProjectsTable />
    <AboutTable />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
})
</script>
